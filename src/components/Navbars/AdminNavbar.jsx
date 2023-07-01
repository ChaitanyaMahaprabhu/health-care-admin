import "./Navbar.css";
import { VideoBar } from "./VideoBar";
const AdminNavbar = (props) => {
  const name = 'Magnus';
  return (
    <>
      <div id="wallpaper">
        <VideoBar/>
        <div id="navbar" className="frostedNavbar">
          <h1>Hello {name}!</h1>

          <div id="navOptions">
            <ul id="options">
              <li>
                <a href="#">Statistics</a>
              </li>
              <li>
                <a href="#">Data</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export { AdminNavbar };
