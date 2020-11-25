import React, { useState } from 'react';
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
import { getSongs } from './util';
import './styles/app.scss';

function App() {
  const [songs, setSongs] = useState(getSongs());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  console.log(songs);

  return (
    <div>
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
      />
      <Library songs={songs} currentSong={currentSong} />
    </div>
  );
}

export default App;
