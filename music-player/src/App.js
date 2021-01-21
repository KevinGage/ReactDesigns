import { useState } from "react";
import Player from "./components/Player/Player";
import Song from "./components/Song/Song";
import "./styles/app.scss";
import data from "./data/songs";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player />
    </div>
  );
}

export default App;
