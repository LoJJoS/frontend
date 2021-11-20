import "./JoinRoom.css";
import React from "react";

function JoinRoom() {
  return (
    <div className="container">
      <div className="header">😀 FACE IT</div>
      <div className="body">
        <form className="form-roomCode">
          <div className="labelTitle roomCode">Room Code</div>
          <label>
            <input
              type="text"
              //value={this.state.value}
              //onChange={this.handleChange}
            />
          </label>
        </form>
        <form className="form-name">
          <div className="labelTitle name">Your Name</div>
          <label>
            <input
              type="text"
              //value={this.state.value}
              //onChange={this.handleChange}
            />
          </label>
        </form>
        <div className="buttons">
          <button className="joinGame">Join Game</button>
          <button className="createGame">Create Game</button>
        </div>
      </div>
    </div>
  );
}

export default JoinRoom;
