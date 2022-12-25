import Player from "./player";
import Song from "./song";
import "./app.scss";
import { useState } from "react";
import data from "./data";
const MusicApp = () => {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      <h1>Music app</h1>
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        onIsPlaying={setIsPlaying}
      />
    </div>
  );
};

export default MusicApp;
