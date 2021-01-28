import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from '@fortawesome/free-solid-svg-icons';

const Player = ({
  audioRef,
  isPlaying,
  setIsPlaying,
  songInfo,
  setSongInfo,
  songSelectHandler,
  songs,
  currentSong,
}) => {
  const playSongHandler = () => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const dragHandler = (event) => {
    const currentTime = event.target.value;
    audioRef.current.currentTime = currentTime;
    setSongInfo({ ...songInfo, currentTime });
  };

  const getTime = (time) => {
    const seconds = Math.floor(time % 60);
    const minutes = Math.floor(time / 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const skipTrackHandler = (direction) => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    const lastIndex = songs.length - 1;

    if (direction === 'skip-back') {
      songSelectHandler(
        songs[currentIndex === 0 ? lastIndex : currentIndex - 1]
      );
    } else {
      songSelectHandler(
        songs[currentIndex === lastIndex ? 0 : currentIndex + 1]
      );
    }
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          type="range"
          min={0}
          onChange={dragHandler}
          max={songInfo.duration}
          value={songInfo.currentTime}
        />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipTrackHandler('skip-back')}
          size="2x"
          className="skip-back"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          size="2x"
          className="play"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler('skip-forward')}
          size="2x"
          className="skip-forward"
          icon={faAngleRight}
        />
      </div>
    </div>
  );
};

export default Player;
