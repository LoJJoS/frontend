import "./App.css";
import JoinRoom from "./Components/joinroom/JoinRoom";
import Lobby from "./Components/lobby/Lobby";
import MakeRoom from "./Components/make_a_face/MakeRoom";
import UploadFace from "./Components/uploadface/UploadFace";
import ScoreBoard from "./Components/scoreboard/ScoreBoard";

function App() {
  return (
    <div className="App">
      {/* <JoinRoom /> */}
      {/* <Lobby /> */}
      {/* <MakeRoom /> */}
      {/* <UploadFace /> */}
      <ScoreBoard />
    </div>
  );
}

export default App;
