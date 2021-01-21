import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

function Player({ currentSong, isPlaying, setIsPlaying }) {
  const audioRef = useRef(null);
  const [songInfo, setSongInfo] = useState({
    currentTime: null,
    duration: null,
  });

  const formatTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const timeUpdateHander = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;

    setSongInfo({ ...setSongInfo, duration: duration, currentTime: current });
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{formatTime(songInfo.currentTime)}</p>
        <input type="range" />
        <p>{formatTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={faPlay}
        />
        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
      <audio
        ref={audioRef}
        onTimeUpdate={timeUpdateHander}
        onLoadedMetadata={timeUpdateHander}
        src={currentSong.audio}
      />
    </div>
  );
}

export default Player;
