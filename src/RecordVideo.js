import {
ReactMediaRecorder,
useReactMediaRecorder,
} from "react-media-recorder";
import NavBar from "./NavBar";
import { Row, Col, Button } from "reactstrap";
import "./App.css";

const RecordVideo = () => {
  const { startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ video: true });

  return (
    <div>
      <main>
        <div className="big-wrapper light">
          <NavBar />
          <div className="big-title">
            <h2 className="record_heading">Record your video here</h2>
          </div>
          <div className="container">
            <video
              className="video_screen"
              src={mediaBlobUrl}
              controls
              autoPlay
              loop
              width={650}
              height={400}/>
          </div>
          <div className="video_functions">
            <Button onClick={startRecording} className="btn-start-video">
              Start Recording
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button onClick={stopRecording} className="btn-stop-video">
              Stop Recording
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RecordVideo;
