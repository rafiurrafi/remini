import Player from "./player";
import Song from "./song";
import "./app.scss";
import { useState } from "react";
import data from "./data";
const MusicApp = () => {
  const [songs, setSongs] = useState(data);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  return (
    <div>
      <h1>Music app</h1>
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} />
    </div>
  );
};

export default MusicApp;
