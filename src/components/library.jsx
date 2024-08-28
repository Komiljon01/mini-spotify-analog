import LibrarySongs from "./library-songs";

function Library({ songs }) {
  return (
    <div className="library">
      <h2>Library</h2>

      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySongs song={song} key={song.id} />
        ))}
      </div>
    </div>
  );
}

export default Library;
