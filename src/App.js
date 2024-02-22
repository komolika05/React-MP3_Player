import "./App.css";
import { useLocalStorage } from "react-use";

import AudioUploader from "./AudioUploader";

import Playlist from "./Playlist";

function App() {
  const [playlist, setPlaylist] = useLocalStorage("playlist", []);

  return (
    <div className="App">
      <h1>MP3 Playlist Player</h1>

      <AudioUploader playlist={playlist} setPlaylist={setPlaylist} />
      <Playlist playlist={playlist} />
    </div>
  );
}

export default App;