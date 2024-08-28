import { FaMusic } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa6";

function Navbar({ libraryStatus, setLibraryStatus }) {
  return (
    <nav>
      <h1>
        <FaSpotify />
        Mini Spotify
      </h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        {" "}
        <FaMusic /> Library
      </button>
    </nav>
  );
}

export default Navbar;
