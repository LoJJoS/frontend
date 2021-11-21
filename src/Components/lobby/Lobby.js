import React from "react";
import "./Lobby.css";
// make useState hook to insert an Array of players into the tables

function Lobby() {
  return (
    <div className="containerLobby">
      <div className="headerLobby">
        <div className="headerLobby name">😀 FACE IT</div>
        <div className="headerLobby number"> ROOM CODE: 12345</div>
      </div>
      <div className="tableLobby">
        <div className="rowLobby">
          <div className="colLobby">
            <div className="username">Jason</div>
          </div>
          <div className="colLobby">
            <div className="username">Jason</div>
          </div>
          <div className="colLobby">
            <div className="username">Jason</div>
          </div>
        </div>
        <div className="rowLobby">
          <div className="colLobby">
            <div className="username">Jason</div>
          </div>
          <div className="colLobby">
            <div className="username">Jason</div>
          </div>
          <div className="colLobby">
            <div className="username">Jason</div>
          </div>
        </div>
        <div className="rowLobby">
          <div className="colLobby">
            <div className="username">Jason</div>
          </div>
          <div className="colLobby">
            <div className="username">Jason</div>
          </div>
          <div className="colLobby">
            <div className="username">Jason</div>
          </div>
        </div>
        <div className="rowLobby">
          <div className="colLobby">
            <div className="username">Jason</div>
          </div>
          <div className="colLobby">
            <div className="username">Jason</div>
          </div>
          <div className="colLobby">
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
