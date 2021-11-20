import "./JoinRoom.css";
import React from "react";

function JoinRoom() {
  return (
    <div className="container">
      <div className="header">😀 FACE IT</div>
      <div className="body">
        <form className="form-roomCode">
          <div className="roomCode">Room Code</div>
          <label>
            <input
              type="text"
              //value={this.state.value}
              //onChange={this.handleChange}
            />
          </label>
        </form>
        <form className="form-name">
          <div className="roomCode">Your Name</div>
          <label>
            <input
              type="text"
              //value={this.state.value}
              //onChange={this.handleChange}
            />
          </label>
        </form>
        <button></button>
      </div>
    </div>
  );
}

export default JoinRoom;
