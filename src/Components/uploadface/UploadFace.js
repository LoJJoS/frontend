import React from "react";
import "./UploadFace.css";

function UploadFace() {
  function handleFile(event) {
    let file = event.target.files[0];
    var fileExt = file.name.split('.').pop().toLowerCase();
    window.alert(fileExt)
    if (fileExt === "jpg" || fileExt === "jpeg" || fileExt === "png"){
      readFile(file, fileExt);
    } else {
      window.alert("Wrong file type. Please upload a jpg or png.")
    }
  }

  function readFile(file, fileExt) {
    let myReader = new FileReader();
    myReader.onloadend = function (e) {
        cb(myReader.result);
    };
    myReader.readAsDataURL(file);
  };

  function cb(base64string, fileExt) {
    /*do next steps here like sending image base64string to the server.*/
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://34.130.207.147:5000/upload", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
      "extension": fileExt, "data": base64string
    }));

    xhr.onreadystatechange = function() {
      if (xhr.readyState == XMLHttpRequest.DONE) {
          alert(xhr.responseText);
      }
    }

  }

  return (
    <div className="containerUploadFace">
      <div className="headerUploadFace">😀 FACE IT</div>
      <div className="makeThisFaceContainer">
        <div className="label-text">Make this face!</div>
        <div className="faceContainer">
          <img
            alt="face here" className="face"
            src="https://www.nicepng.com/png/full/5-52286_download-laughing-iphone-emoji-jpg-emoji-happy-png.png"
          />
        </div>
        <div className="buttonsUploadFace">
          <button
            className="button takePhoto"
            id="take-photo"
            >
            Take a photo
          </button>

          <input type="file" accept="image/*" onChange="handleImageUpload()" id="upload" onChange={handleFile} hidden/>
          <label for="upload" className="button uploadPhoto">Upload a photo</label>
          
          <img id="display-image" src="" /*TEST*//>
        </div>
      </div>
    </div>
  );
}

export default UploadFace;
