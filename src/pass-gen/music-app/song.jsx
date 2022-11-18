const Song = ({ currentSong: { cover, name, artist } }) => {
  return (
    <div className="song-container">
      <img src={cover} alt="" />
      <h1>{name}</h1>
      <h1>{artist}</h1>
    </div>
  );
};

export default Song;
