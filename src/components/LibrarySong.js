import React from 'react';

const LibrarySong = ({
  song,
  setCurrentSong,
  audioRef,
  setSongs,
  songs,
  isPlaying,
}) => {
  const songSelectHandler = async () => {
    const updatedSongs = songs.map((songInState) => {
      return song.id === songInState.id
        ? { ...songInState, active: true }
        : { ...songInState, active: false };
    });
    setCurrentSong({ ...song, active: true });
    setSongs(updatedSongs);
    if (isPlaying) {
      await audioRef.current.play();
      audioRef.current.play();
    }
  };

  return (
    <div
      onClick={songSelectHandler}
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
