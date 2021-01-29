import React, { useState, useRef } from 'react';
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
import Nav from './components/Nav';
import { getSongs } from './util';
import './styles/app.scss';

function App() {
  const audioRef = useRef(null);

  const [songs, setSongs] = useState(getSongs());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);

  const songEndHandler = () => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    const lastIndex = songs.length - 1;

    songSelectHandler(songs[currentIndex === lastIndex ? 0 : currentIndex + 1]);
  };

  const songSelectHandler = async (songToBePlayed) => {
    const updatedSongs = songs.map((songInState) => {
      return songToBePlayed.id === songInState.id
        ? { ...songInState, active: true }
        : { ...songInState, active: false };
    });
    await setCurrentSong({ ...songToBePlayed, active: true });
    setSongs(updatedSongs);
    if (isPlaying) {
      await audioRef.current.play();
      audioRef.current.play();
    }
  };

  const timeUpdateHandler = (event) => {
    const { currentTime, duration } = event.target;
    if (currentTime && duration) {
      setSongInfo({ currentTime, duration });
    }
  };

  return (
    <div class={`app ${isLibraryOpen ? 'library-active' : ''}`}>
      <Nav isLibraryOpen={isLibraryOpen} setIsLibraryOpen={setIsLibraryOpen} />
      <Song currentSong={currentSong} isPlaying={isPlaying} />
      <Player
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        songSelectHandler={songSelectHandler}
        songs={songs}
        currentSong={currentSong}
      />
      <Library
        isLibraryOpen={isLibraryOpen}
        songs={songs}
        songSelectHandler={songSelectHandler}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        onEnded={songEndHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default App;
