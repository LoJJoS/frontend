import React from "react";
import "./UploadFace.css";

function UploadFace() {
  return (
    <div className="containerUploadFace">
      <div className="headerUploadFace">😀 FACE IT</div>
      <div className="makeThisFaceContainer">
        <div className="label-text">Make this face!</div>
        <div className="faceContainer">
          <img
            className="faceUploadFace"
            alt="face here"
            src="https://www.nicepng.com/png/full/5-52286_download-laughing-iphone-emoji-jpg-emoji-happy-png.png"
          />
        </div>
        <div className="buttonsUploadFace">
          <button
            className="button takePhoto"
            //   onClick={() => {
            //     console.log("TODO: Take Photo");
            //   }}
          >
            Take a photo
          </button>
          <button
            className="button uploadPhoto"
            //   onClick={() => {
            //     console.log("TODO: Upload");
            //   }}
          >
            Upload a photo
          </button>
        </div>
      </div>
    </div>
  );
}

export default UploadFace;
