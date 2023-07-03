import "./Navbar.css";
import { VideoBar } from "./VideoBar";
import {Link} from 'react-router-dom';

const AdminNavbar = (props) => {
  return (
    <>
        <VideoBar/>
        <div id="navbar" className="frostedNavbar">
          <h1>Good to see you!</h1>

          <div id="navOptions">
            <ul id="options">
              <li>
                <a href="#adminStats">Statistics</a>
              </li>
              <li>
                <a href="#doctorTable">Doctors</a>
              </li>
              <li>
                <a href="#patientTable">Patients</a>
              </li>
              <li>
                <a href="#getDoctorById">Data using ID</a>
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

export { AdminNavbar };
