import React from "react";
import axios from "axios";
import "./UploadFace.css";

function UploadFace({ setFaceUploaded, setFace }) {
  function handleFile(event) {
    let file = event.target.files[0];
    var fileExt = file.name.split('.').pop().toLowerCase();
    window.alert(fileExt)
    if (fileExt === "jpg" || fileExt === "jpeg" || fileExt === "png"){
      readFile(file, fileExt);
      setFaceUploaded(true);
    } else {
      window.alert("Wrong file type. Please upload a jpg or png.")
    }
  }

  function readFile(file, fileExt) {
    let myReader = new FileReader();
    myReader.onloadend = async function (e) {
        const parsedData = myReader.result.substr(myReader.result.indexOf(',') + 1)
        await cb(parsedData, fileExt);
    };
    myReader.readAsDataURL(file);
  };

  async function cb(base64string, fileExt) {
    console.log(base64string);
    const baseUrl = 'http://34.130.207.147:5000'
    const upload_response = await fetch(`${baseUrl}/upload`, {
      method: 'POST',
      mode: 'cors',
      headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        "extension": fileExt,
        "data": base64string,
      })
    })
    const { filename } = await upload_response.json();
    console.log(JSON.stringify({
      "imgs": [filename],
    }));
    const create_response = await fetch(`${baseUrl}/create-image-test?room=${"AMDBNEL"}`, {
      method: 'POST',
      mode: 'cors',
      headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        "imgs": [filename],
      })
    });
    const { result } = await create_response.json();
    setFace(result[0]);
    setFaceUploaded(true);
    console.log(result);

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
