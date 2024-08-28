import { playSong } from "../util";

function LibrarySongs({
  setSongs,
  songs,
  song,
  id,
  setCurrentSong,
  audioRef,
  isPlaying,
}) {
  const { name, cover, artist } = song;

  const songSelectHandler = () => {
    setCurrentSong(song);

    playSong(isPlaying, audioRef);

    // Adding State
    const newSongs = songs.map((music) => {
      if (music.id === id) {
        return { ...music, active: true };
      } else {
        return { ...music, active: false };
      }
    });

    setSongs(newSongs);
  };

  return (
    <div
      className={`library-song ${song.active && "selected"}`}
      onClick={songSelectHandler}
    >
      <img src={cover} alt={name} />
      <div className="song-description">
        <h3>{name}</h3>
        <h4>{artist}</h4>
      </div>
    </div>
  );
}

export default LibrarySongs;
