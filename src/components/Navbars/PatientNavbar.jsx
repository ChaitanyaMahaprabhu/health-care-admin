import "./Navbar.css";
import { VideoBar } from "./VideoBar";

const PatientNavbar = (props) => {
  return (
    <>
        <VideoBar />
        <div id="navbar" className="frostedNavbar">
          <h1>Good to see you!</h1>

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
    </>
  );
};

export { PatientNavbar };
