import React from "react";
import 'react-dropdown/style.css';
import "./GuessEmoji.css";

function GuessEmoji() {

  return (
    <div className="containerUploadFace">
      <div className="headerUploadFace">😀 FACE IT</div>
      <div className="makeThisFaceContainer">
        <div className="guess-text">Who made this face?</div>
        <div className="faceContainer">
          <img
            className="faceUploadFace"
            alt="face here"
            src="https://www.nicepng.com/png/full/5-52286_download-laughing-iphone-emoji-jpg-emoji-happy-png.png"
          />
        </div>

        <form classname="dropdown">
          <select name="Select a name" classname="dropdown-menu">
            <option value="1">John</option>
            <option value="2">Jane</option>
            <option value="3">Jason</option>
            <option value="4">Jessy</option>
            <option value="5">James</option>
          </select>
        </form>

      </div>
    </div>
  );
}
  
export default GuessEmoji;
  