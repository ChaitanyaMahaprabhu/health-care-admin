import "./Navbar.css";
import { VideoBar } from "./VideoBar";
import {Link} from 'react-router-dom';

const DoctorNavbar = (props) => {
  return (
    <>
        <VideoBar />
        <div id="navbar" className="frostedNavbar">
          <h1>Good to see you!</h1>

          <div id="navOptions">
            <ul id="options">
              <li>
                <a href="#">Request Activation</a>
              </li>
              <li>
                <a href="#">Update Data</a>
              </li>
              <li>
                <Link to = '/'><a>Log Out</a></Link>
              </li>
            </ul>
          </div>
        </div>
    </>
  );
};

export { DoctorNavbar };
