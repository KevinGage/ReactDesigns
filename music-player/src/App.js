import { useState, useRef } from "react";
import Player from "./components/Player/Player";
import Song from "./components/Song/Song";
import Library from "./components/Library/Library";
import Nav from "./components/Nav/Nav";
import "./styles/app.scss";
import data from "./data/songs";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });

  const audioRef = useRef(null);

  const timeUpdateHander = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;

    //Get percentage of current position in song
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const percentage = Math.round((roundedCurrent / roundedDuration) * 100);

    setSongInfo({
      ...setSongInfo,
      duration: duration,
      currentTime: current,
      animationPercentage: percentage,
    });
  };

  const setActiveSong = async (song) => {
    await setCurrentSong(song);
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

  const songEndHandler = async () => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setActiveSong(songs[(currentIndex + 1) % songs.length]);
    audioRef.current.play();
  };

  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        setActiveSong={setActiveSong}
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        songs={songs}
      />
      <Library
        songs={songs}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setActiveSong={setActiveSong}
        libraryStatus={libraryStatus}
      />
      <audio
        ref={audioRef}
        onTimeUpdate={timeUpdateHander}
        onLoadedMetadata={timeUpdateHander}
        src={currentSong.audio}
        onEnded={songEndHandler}
      />
    </div>
  );
}

export default App;
