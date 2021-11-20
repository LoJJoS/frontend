import "./App.css";
import JoinRoom from "./Components/joinroom/JoinRoom";
import Lobby from "./Components/lobby/Lobby";
import MakeRoom from "./Components/make_a_face/MakeRoom";
import UploadFace from "./Components/uploadface/UploadFace";

function App() {
  return (
    <div className="App">
      {/* <JoinRoom></JoinRoom> */}
      {/* <Lobby /> */}
      <MakeRoom />
      {/* <UploadFace /> */}
    </div>
  );
}

export default App;
