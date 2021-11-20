import "./App.css";
import JoinRoom from "./Components/joinroom/JoinRoom";
import Lobby from "./Components/lobby/Lobby";
import MakeRoom from "./Components/make_a_face/MakeRoom";

function App() {
  return (
    <div className="App">
      {/* <JoinRoom></JoinRoom> */}
      <Lobby />
      {/* <MakeRoom /> */}
    </div>
  );
}

export default App;
