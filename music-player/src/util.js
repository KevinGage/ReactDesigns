export const playAudio = (isPlaying, audioRef) => {
  // starts audio when switching songs if player is playing
  // has to use a promise to make sure song is loaded before playing
  if (isPlaying) {
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise.then((audio) => {
        audioRef.current.play();
      });
    }
  }
};
