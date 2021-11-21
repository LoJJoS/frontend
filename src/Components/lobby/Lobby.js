import React from "react";
import "./Lobby.css";
import { ref, onValue } from "firebase/database";
// make useState hook to insert an Array of players into the tables

function Lobby({ db, roomCode }) {

  const usersRef = ref(db, 'rooms/' + roomCode + '/users');
  onValue(usersRef, (data) => {
    const users = data.val();
    console.log(Object.keys(users));
    const userCount = users.length;
    console.log(`reading: `, users);
  });

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
