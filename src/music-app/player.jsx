import { useEffect } from "react";

const Player = ({
  songs,
  audioRef,
  isPlaying,
  setIsPlaying,
  songInfo,
  setSongInfo,
  currentSong,
  setSongs,
}) => {
  function playSongHandler() {
    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }

  function formatTime(time) {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  }
  useEffect(() => {
    songs.map((song) => {
      const updatedSongs =
        song.id === currentSong.id
          ? { ...song, active: true }
          : { ...song, active: false };
      setSongs(updatedSongs);
    });
  }, [currentSong]);

  return (
    <div className="player-container">
      <div className="time-control">
        <p>{formatTime(songInfo.currentTime)}</p>
        <input
          min={0}
          max={songInfo.duration}
          value={songInfo.currentTime}
          onChange={(e) => {
            audioRef.current.currentTime = e.target.value;
            setSongInfo({ ...songInfo, currentTime: e.target.value });
          }}
          type="range"
        />
        <p>{formatTime(songInfo.duration)}</p>
      </div>
      <div className="song-control">
        <div className="skip-back">back</div>
        <div className="play" onClick={playSongHandler}>
          {isPlaying ? "pause" : "play"}
        </div>
        <div className="skip-forward">forward</div>
      </div>
    </div>
  );
};

export default Player;
