import React, { useState } from 'react';
import "./App.css";
import JoinRoom from "./Components/joinroom/JoinRoom";
import Lobby from "./Components/lobby/Lobby";
import MakeRoom from "./Components/makeroom/MakeRoom";
import UploadFace from "./Components/uploadface/UploadFace";
import ScoreBoard from "./Components/scoreboard/ScoreBoard";

import { database } from './firebase_config';

function App() {
  const [userId, setUserId] = useState("");
  const [roomCode, setCode] = useState("");

  return (
    <div className="App">
      {userId != "" ? null : <JoinRoom db={database} setRoom={setCode} setId={setUserId} />}
      {userId != "" ? <Lobby db={database} roomCode={roomCode}/> : null}
      {/* <MakeRoom /> */}
      {/* <UploadFace /> */}
    </div>
  );
}

export default App;
