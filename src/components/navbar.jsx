import { FaMusic } from "react-icons/fa";

function Navbar({ libraryStatus, setLibraryStatus }) {
  return (
    <nav>
      <h1>Spotify clone</h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        {" "}
        <FaMusic /> Library
      </button>
    </nav>
  );
}

export default Navbar;
