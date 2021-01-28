import React from 'react';
import LibrarySong from './LibrarySong';

const Library = ({ songs, isLibraryOpen, songSelectHandler }) => {
  return (
    <div className={`library ${isLibraryOpen ? 'active-library' : ''}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            key={song.id}
            song={song}
            songSelectHandler={songSelectHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
