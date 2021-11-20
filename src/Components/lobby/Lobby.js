import React from "react";
import "./Lobby.css";
// make useState hook to insert an Array of players into the tables

function Lobby() {
  return (
    <div className="containerLobby">
      <div className="headerLobby">
        <div className="headerLobby name">😀 FACE IT ROOM</div>
        <div className="headerLobby number"> CODE: 12345</div>
      </div>
      <div className="table">
        <div className="row">
          <div className="col">
            <div className="username">Jason</div>
          </div>
          <div className="col">
            <div className="username">Jason</div>
          </div>
          <div className="col">
            <div className="username">Jason</div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="username">Jason</div>
          </div>
          <div className="col">
            <div className="username">Jason</div>
          </div>
          <div className="col">
            <div className="username">Jason</div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="username">Jason</div>
          </div>
          <div className="col">
            <div className="username">Jason</div>
          </div>
          <div className="col">
            <div className="username">Jason</div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="username">Jason</div>
          </div>
          <div className="col">
            <div className="username">Jason</div>
          </div>
          <div className="col">
            <div className="username">Jason</div>
          </div>
        </div>
      </div>
      <div className="buttonContainer">
        <button
          className="startButton"
          onClick={() => {
            console.log("TODO");
          }}
        >
          Start
        </button>
      </div>
    </div>
  );
}

export default Lobby;
