import React from "react";
import "./UploadFace.css";

function UploadFace() {
  function handleFile(event) {
    let file = event.target.files[0];
    if(file.size > 2097152){
      alert("File is too big! Limit: 2 MB.");
    } else {
      var fileExt = file.name.split('.').pop().toLowerCase();
      if (fileExt === "jpg" || fileExt === "jpeg" || fileExt === "png"){
        readFile(file, fileExt);
      } else {
        window.alert("Wrong file type. Please upload a jpg or png.")
      }
    }
  }

  function readFile(file, fileExt) {
    let myReader = new FileReader();
    myReader.onloadend = function (e) {
      click1(myReader.result, fileExt);
    };
    myReader.readAsDataURL(file);
  };

  async function click(base64string, fileExt) {
    let mydata = {"extension": fileExt, "data": base64string};
    const response = await fetch("http://34.130.207.147:5000/upload", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(mydata),
    });
    return response.json();
  }

  function click1() {
    click().then((data) => processResponse(data));
  }

  function processResponse(response){
    // Use this function to go to guess
    console.log(response);
    window.alert(response);
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
