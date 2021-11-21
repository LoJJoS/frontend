import React, { useState, useEffect } from "react";
import { ref, onChildAdded, onValue } from "firebase/database";
import "./App.css";
import JoinRoom from "./Components/joinroom/JoinRoom";
import Lobby from "./Components/lobby/Lobby";
import MakeRoom from "./Components/makeroom/MakeRoom";
import UploadFace from "./Components/uploadface/UploadFace";
import ScoreBoard from "./Components/scoreboard/ScoreBoard";
import PlayerFaces from "./Components/playerfaces/PlayerFaces";

import { database } from "./firebase_config";

function App() {
  const [userId, setUserId] = useState("");
  const [roomCode, setCode] = useState("");
  const [roomStatus, setRoomStatus] = useState("");
  const [users, setUsers] = useState([]);
  const [userKeys, setKeys] = useState([]);
  const [isHost, setHost] = useState(false);

  useEffect(() => {
    const usersRef = ref(database, "rooms/" + roomCode + "/users");
    onValue(usersRef, (data) => {
      data.forEach((childData) => {
        if (!userKeys.includes(childData.key)) {
          userKeys.push(childData.key);
        }
      });
      // List of users
      console.log("RUNING INSIDE LISTENER");
      const userData = data.val();
      if (userData == null) {
        return null;
      }
      setUsers(data.val());
      setKeys(userKeys);
      console.log("after:", users, userKeys);
    });
  }, [roomCode]);

  useEffect(() => {
    // React to changes when HOST starts
    const roomStatusRef = ref(database, "rooms/" + roomCode);
    onValue(roomStatusRef, (snapshot) => {
      setRoomStatus(snapshot.val().room_status);
    });
    console.log("your server mode: ", roomStatus);
  }, [roomStatus]);

  return (
    <div className="App">
      {userId !== "" ? null : (
        <JoinRoom
          db={database}
          setRoom={setCode}
          setId={setUserId}
          hasHostPrivileges={setHost}
          updateRoomStatus={setRoomStatus}
        />
      )}
      {userId !== "" && roomStatus === "idling" ? (
        <Lobby
          db={database}
          users={users}
          userKeys={userKeys}
          roomCode={roomCode}
          isHost={isHost}
          updateRoomStatus={setRoomStatus}
        />
      ) : null}
      {/* <MakeRoom /> */}
      {/* <UploadFace /> */}
      <PlayerFaces />
    </div>
  );
}

export default App;
