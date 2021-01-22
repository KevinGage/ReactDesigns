import LibrarySong from "../LibrarySong/LibrarySong";

function Library({ songs, audioRef, isPlaying, setActiveSong }) {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            key={song.id}
            song={song}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setActiveSong={setActiveSong}
          />
        ))}
      </div>
    </div>
  );
}

export default Library;
