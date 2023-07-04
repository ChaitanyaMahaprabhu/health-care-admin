import "./Navbar.css";
import { VideoBar } from "./VideoBar";
import {Link} from 'react-router-dom';
import { useContext, useEffect } from "react";
import {context} from "../../context/SharedData";

const AdminNavbar = (props) => {
  const sharedData = useContext(context);
  return (
    <>
        <VideoBar/>
        <div id="navbar" className="frostedNavbar">
          <h1 id = "capitalize">Hello {props.username}</h1>

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
