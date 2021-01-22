import { playAudio } from "../../util";

function LibrarySong({ song, audioRef, isPlaying, setActiveSong }) {
  const songSelectHandler = () => {
    setActiveSong(song);

    playAudio(isPlaying, audioRef);
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}

export default LibrarySong;
