import React from "react";
import 'react-dropdown/style.css';
import "./GuessEmoji.css";

function GuessingTime() {

  return (
    <div className="containerGuessEmoji">
      <div className="headerGuessEmoji">😀 FACE IT</div>
      <div className="guessEmojiContainer">
        <img
        className="thinkingEmoji"
        alt="thinking emoji"
        src="https://www.nicepng.com/png/full/22-221949_view-samegoogleiqdbsaucenao-rtba-thinking-emoji-ios-10.png"
        />
        <div className="guessingTime-text">Guessing time!</div>
      </div>
    </div>
  );
}
  
export default GuessingTime;
  