import { useState } from "react";
import { useRef } from "react";

const Player = ({ currentSong, isPlaying, onIsPlaying }) => {
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  const audioRef = useRef();
  function handlePlayPause() {
    if (isPlaying) {
      audioRef.current.pause();
      onIsPlaying(false);
    } else {
      audioRef.current.play();
      onIsPlaying(true);
    }
  }
  function handleTimeUpdate(e) {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime, duration });
  }
  function dragHandler(e) {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...setSongInfo, currentTime: e.target.value });
  }
  return (
    <div>
      <div className="time-control">
        <div>{Math.floor(songInfo.currentTime)}</div>
        <input
          type="range"
          min={0}
          max={songInfo.duration}
          value={songInfo.currentTime}
          onChange={dragHandler}
        />
        <div>{Math.floor(songInfo.duration)}</div>
      </div>
      <div className="play-control">
        <button>Prev</button>
        <button onClick={handlePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button>Next</button>
      </div>
      <audio
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleTimeUpdate}
        ref={audioRef}
        src={currentSong.audio}
      />
    </div>
  );
};

export default Player;
