import "./Navbar.css";
import { VideoBar } from "./VideoBar";
const AdminNavbar = (props) => {
  const name = 'Magnus';
  return (
    <>
        <VideoBar/>
        <div id="navbar" className="frostedNavbar">
          <h1>Hello {name}!</h1>

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
            </ul>
          </div>
        </div>
    </>
  );
};

export { AdminNavbar };
