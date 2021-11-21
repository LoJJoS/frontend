import React from "react";
// import 'react-dropdown/style.css';
import "./GuessEmoji.css";

function GuessEmoji({ currentFacePath }) {
  const path = `../../public/.tmp/output/${currentFacePath}`
  return (
    <div className="containerGuessEmoji">
      <div className="headerGuessEmoji">😀 FACE IT</div>
      <div className="outerGuessEmojiContainer">
        <div className="rounds">1/12</div>
        <div className="guessEmojiContainer">
          <div className="guess-text">Who made this face?</div>
          <div className="faceContainer">
            <img
              className="faceGuessEmoji"
              alt="face here"
              src={path}
            />
          </div>

          <div className="guessContainer" // Hide this after the timer runs out
            >
            <select name="Select a name" className="dropdown-menu">
              <option value="1">John</option>
              <option value="2">Jane</option>
              <option value="3">Jason</option>
              <option value="4">Jessy</option>
              <option value="5">James</option>
            </select>

            <div className="correct" // Change text depending on correct or not
              > 
              ✅ Correct!
            </div>
          </div>

        </div>
        <div className="guessEmojiTimer">20</div>
      </div>
    </div>
  );
}
  
export default GuessEmoji;
  