import React from "react";
import "./App.css";

function Upload() {
  const fileInput = React.useRef();
  const selectFile = () => {
    fileInput.current.click();
  };
  React.useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, []);
  function updateList() {
    var input = document.getElementById("fileInput");
    var output = document.getElementById("fileList");
    output.innerHTML = "<ul>";
    for (var i = 0; i < input.files.length; ++i) {
      output.innerHTML += "<li>" + input.files.item(i).name + "</li>";
    }
    output.innerHTML += "</ul>";
  }
  return (
    <div>
      <input
        type="file"
        id="fileInput"
        name="file"
        style={{ display: "none" }}
        ref={fileInput}
        onChange={updateList}
      />
      <div id="fileList"></div>
      <button onClick={selectFile} className="btn-upload">
        <span className="ms-2">Upload and Audio/Video File</span>
      </button>
    </div>
  );
}

export default Upload;
