import "./JoinRoom.css";
import React, { useState } from "react";
import { ref, set, onValue, get, child, push } from "@firebase/database";
import bcrypt, { hash } from "bcryptjs";

  function JoinRoom({
    db,
    setRoom,
    setId,
    hasHostPrivileges,
    updateRoomStatus,
  }) {
    const [name, setName] = useState("");
    const [code, setCode] = useState("");

    const handleRoomChange = (event) => {
      setCode(event.target.value);
    };

    const handleNameChange = (event) => {
      setName(event.target.value);
    };

    const handleJoin = async () => {
      if (code === "" || name === "") {
        alert("Please enter a name or code!");
        return;
      }
      const roomRef = ref(db, `rooms/${code}/users`);
      const roomData = await get(roomRef);
      if (roomData.exists()) {
        const newUser = {
          name,
          path_to_photo: "",
        };
        const newRoomRef = push(roomRef);
        set(newRoomRef, newUser);
      } else {
        alert("That room does not exist!");
        return;
      }
      setId(name);
      setRoom(code);
      updateRoomStatus("idling");
    };

    const handleCreate = async () => {
      if (code === "" || name === "") {
        alert("Please enter a name or code!");
        return;
      }
      const roomId = name + code;

      const roomRef = ref(db, "rooms/");
      const roomData = await get(child(roomRef, `${code}`));
      if (roomData.exists()) {
        alert("Duplicate room found!");
        return;
      }

      set(ref(db, "rooms/" + code), {
        room_code: code,
        room_status: "idling",
        users: [
          {
            name,
            path_to_photo: "",
          },
        ],
      });
      setId(name);
      setRoom(code);
      updateRoomStatus("idling");
      hasHostPrivileges(true);
    };

    return (
      <div className="containerJoinRoom">
        <div className="headerJoinRoom">😀 FACE IT</div>
        <div className="bodyJoinRoom">
          <form className="form-roomCode">
            <div className="labelTitle roomCode">Room Code</div>
            <label>
              <input type="text" value={code} onChange={handleRoomChange} />
            </label>
          </form>
          <form className="form-name">
            <div className="labelTitle name">Your Name</div>
            <label>
              <input type="text" value={name} onChange={handleNameChange} />
            </label>
          </form>
          <button className="joinGame" onClick={() => handleJoin()}>
            Join Game
          </button>
          <button className="createGame" onClick={() => handleCreate()}>
            Create Game
          </button>
        </div>
      </div>
    );
  }

export default JoinRoom;
