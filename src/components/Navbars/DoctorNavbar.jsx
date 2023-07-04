import "./Navbar.css";
import { VideoBar } from "./VideoBar";
import {Link} from 'react-router-dom';
import { context } from "../../context/SharedData";
import { useEffect, useState, useContext } from "react";

const DoctorNavbar = (props) => {
  const sharedData = useContext(context);
  useEffect(() => {console.log("user: ",sharedData.username)}, []);

  return (
    <>
        <VideoBar />
        <div id="navbar" className="frostedNavbar">
          <h1 id = "capitalize">Hello {props.username}!</h1>

          <div id="navOptions">
            <ul id="options">
              <li>
                <a href="#doctorStatus">Request Activation</a>
              </li>
              <li>
                <a href="#getDoctors">Update Data</a>
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
