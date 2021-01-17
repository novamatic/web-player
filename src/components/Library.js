import React from 'react';
import LibrarySong from './LibrarySong';

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  setSongs,
  isPlaying,
  isLibraryOpen,
}) => {
  return (
    <div className={`library ${isLibraryOpen ? 'active-library' : ''}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            isPlaying={isPlaying}
            setSongs={setSongs}
            audioRef={audioRef}
            songs={songs}
            setCurrentSong={setCurrentSong}
            key={song.id}
            song={song}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
