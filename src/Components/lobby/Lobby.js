import React from "react";
import "./Lobby.css";
import { ref, update } from "firebase/database";
// make useState hook to insert an Array of players into the tables

function Lobby({ db, users, userKeys, roomCode, isHost, updateRoomStatus }) {
  // console.log('lobby load:');
  // console.log(users, userKeys);

  return (
    <div className="containerLobby">
      <div className="headerLobby">
        <div className="headerLobby name">😀 FACE IT</div>
        <div className="headerLobby number"> ROOM CODE: {roomCode}</div>
      </div>
      <div className="tableLobby">
        {userKeys.map((key) => {
          return (
            <>
              <div key={roomCode + "_" + key} className="colLobby">
                <div className="username">{users[key].name}</div>
              </div>
            </>
          );
        })}
      </div>
      {isHost ? (
        <div className="buttonContainer">
          <button
            className="startButton"
            onClick={() => {
              // Sets state of lobby to in-progress
              const roomRef = ref(db, `rooms/${roomCode}`);
              update(roomRef, { room_status: "active" });
              updateRoomStatus("active");

              // const roomData = await get(roomRef);
              // if (roomData.exists()){
              //   const newUser = {
              //     name,
              //     path_to_photo: "",
              //   }
              //   const newRoomRef = push(roomRef);
              //   set(newRoomRef, newUser);
              // }
              // else {
              //   alert('That room does not exist!');
              //   return;
              // }
              // setId(name);
              // setRoom(code);
              // updateRoomStatus("idling");
            }}
          >
            Start
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default Lobby;
