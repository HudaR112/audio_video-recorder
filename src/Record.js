import React from "react";
import MicRecorder from "mic-recorder-to-mp3";
import { Button } from "reactstrap";

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

class Record extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRecording: false,
      blobURL: "",
      isBlocked: false,
    };
  }
  
  start = () => {
    if (this.state.isBlocked) {
      console.log("Permission Denied");
    } else {
      Mp3Recorder.start()
        .then(() => {
          this.setState({ isRecording: true });
        })
        .catch((e) => console.error(e));
    }
  };

  stop = () => {
    Mp3Recorder.stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const blobURL = URL.createObjectURL(blob);
        this.setState({ blobURL, isRecording: false });
      })
      .catch((e) => console.log(e));
  };

  componentDidMount() {
    navigator.getUserMedia(
      { audio: true },
      () => {
        console.log("Permission Granted");
        this.setState({ isBlocked: false });
      },
      () => {
        console.log("Permission Denied");
        this.setState({ isBlocked: true });
      }
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Button
            className="btn-record"
            onClick={() => {
              this.state.isRecording ? this.stop() : this.start();
            }}
          >
            {this.state.isRecording ? (
              <span> Stop</span>
            ) : (
              <span> Record Audio</span>
            )}
          </Button>

          <audio src={this.state.blobURL} controls="controls" />
        </header>
      </div>
    );
  }
}

export default Record;
