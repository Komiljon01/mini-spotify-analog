import LibrarySongs from "./library-songs";

function Library({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
}) {
  return (
    <div className={`library ${libraryStatus && "active-library"}`}>
      <h2>Library</h2>

      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySongs
            song={song}
            key={song.id}
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
            isPlaying={isPlaying}
            songs={songs}
            id={song.id}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
}

export default Library;
