const Player = () => {
  return (
    <div>
      <div className="time-control">
        <div>input</div>
        <input type="range" />
        <div>output</div>
      </div>
      <div className="play-control">
        <button>Prev</button>
        <button>Play</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default Player;
