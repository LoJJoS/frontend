import React from "react";
import "./Scoreboard.css";

function ScoreBoard() {
  const image =
    "https://www.nicepng.com/png/full/5-52286_download-laughing-iphone-emoji-jpg-emoji-happy-png.png";

  return (
    <div className="containerScoreBoard">
      <div className="headerScoreBoard">
        <div className="headerScoreBoard name">😀 FACE IT</div>
        <button className="playAgain">Play Again</button>
      </div>
      <div className="tableScoreBoard">
        <div className="rowScoreBoard">
          <div className="scoreContainer">
            <div className="rank first">1</div>
            <img className="avatar" src={image} alt="Avatar" />
            <div className="username">Jason</div>
          </div>
          <div className="scoreContainer">
            <div className="rank second">2</div>
            <img className="avatar" src={image} alt="Avatar" />
            <div className="username">Jason</div>
          </div>
          <div className="scoreContainer">
            <div className="rank third">3</div>
            <img className="avatar" src={image} alt="Avatar" />
            <div className="username">Jason</div>
          </div>
          <div className="scoreContainer">
            <div className="rank">4</div>
            <img className="avatar" src={image} alt="Avatar" />
            <div className="username">Jason</div>
          </div>
        </div>

        <div className="rowScoreBoard">
          <div className="scoreContainer">
            <div className="rank">5</div>
            <img className="avatar" src={image} alt="Avatar" />
            <div className="username">Jason</div>
          </div>
          <div className="scoreContainer">
            <div className="rank">6</div>
            <img className="avatar" src={image} alt="Avatar" />
            <div className="username">Jason</div>
          </div>
          <div className="scoreContainer">
            <div className="rank">7</div>
            <img className="avatar" src={image} alt="Avatar" />
            <div className="username">Jason</div>
          </div>
          <div className="scoreContainer">
            <div className="rank">8</div>
            <img className="avatar" src={image} alt="Avatar" />
            <div className="username">Jason</div>
          </div>
        </div>

        <div className="rowScoreBoard">
          <div className="scoreContainer">
            <div className="rank">9</div>
            <img className="avatar" src={image} alt="Avatar" />
            <div className="username">Jason</div>
          </div>
          <div className="scoreContainer">
            <div className="rank">10</div>
            <img className="avatar" src={image} alt="Avatar" />
            <div className="username">Jason</div>
          </div>
          <div className="scoreContainer">
            <div className="rank">11</div>
            <img className="avatar" src={image} alt="Avatar" />
            <div className="username">Jason</div>
          </div>
          <div className="scoreContainer">
            <div className="rank">12</div>
            <img className="avatar" src={image} alt="Avatar" />
            <div className="username">Jason</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScoreBoard;
