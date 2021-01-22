import { useState, useRef } from "react";
import Player from "./components/Player/Player";
import Song from "./components/Song/Song";
import Library from "./components/Library/Library";
import "./styles/app.scss";
import data from "./data/songs";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  const audioRef = useRef(null);

  const timeUpdateHander = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;

    setSongInfo({ ...setSongInfo, duration: duration, currentTime: current });
  };

  const setActiveSong = (song) => {
    setCurrentSong(song);
    setSongs(
      songs.map((s) => {
        if (s.id === song.id) {
          return {
            ...s,
            active: true,
          };
        } else {
          return {
            ...s,
            active: false,
          };
        }
      })
    );
  };

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
      />
      <Library
        songs={songs}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setActiveSong={setActiveSong}
      />
      <audio
        ref={audioRef}
        onTimeUpdate={timeUpdateHander}
        onLoadedMetadata={timeUpdateHander}
        src={currentSong.audio}
      />
    </div>
  );
}

export default App;
