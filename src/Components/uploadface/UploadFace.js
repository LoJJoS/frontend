import React from 'react';
import "./UploadFace.css";

function UploadFace(){
    return (
        <>
        <div className="c-container">
            <div className="label-text">Make this face!</div>
            <img className="face-container" alt="face here" src="https://www.nicepng.com/png/full/5-52286_download-laughing-iphone-emoji-jpg-emoji-happy-png.png"/>
        </div>
        <div className="flex-row">
            <button className="photo-container" onClick={() => {console.log('TODO: Take Photo')}}>
                <div className="photo-text">Take a photo</div>
            </button>
            <button className="photo-container" onClick={() => {console.log('TODO: Upload')}}>
                <div className="photo-text">Upload a photo</div>
            </button>
        </div>
        </>
    );
}

export default UploadFace;