import React from 'react';

const LibrarySong = ({ song, songSelectHandler }) => {
  return (
    <div
      onClick={() => songSelectHandler(song)}
      className={`library-song ${song.active ? 'selected' : ''}`}
    >
      <img src={song.cover} alt="Track cover" />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
