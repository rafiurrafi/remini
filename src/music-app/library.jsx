const Library = ({ songs, onCurrentSong, isPlaying, audioRef, setSongs }) => {
  function handleCurrentSong(songId) {
    songs.map((song) => {
      const updatedSongs =
        song.id === songId
          ? { ...song, active: true }
          : { ...song, active: false };
      setSongs(updatedSongs);
    });
    const currentSong = songs.filter((s) => s.id === songId);
    onCurrentSong(currentSong[0]);
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then((audio) => audioRef.current.play());
      }
    }
  }
  return (
    <div className="library">
      {songs.map((song) => (
        <div
          onClick={() => handleCurrentSong(song.id)}
          className={`library-song ${song.active && "selected"}`}
        >
          <img src={song.cover} alt="" />
          <p>{song.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Library;
