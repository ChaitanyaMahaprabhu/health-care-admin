import "./DoctorInfo.css";
import { Footer } from "../Footer/Footer";
import { useContext, useState, useEffect } from "react";
import { context } from "../../context/SharedData";
import {
  DoctorCardAvailable,
  DoctorCardUnavailable,
} from "../DoctorCard/DoctorCard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useParams} from 'react-router-dom';


const PatientPage = () => {
  const {username} = useParams();
  const sharedData = useContext(context);
  return (
    <>
      <div id="wall" style={{ overflowY: "scroll" }}>
        <div id="infoDesc" className="frosted">
          <h1 style={{ fontSize: "3rem" }}>
            The best in the world, at your service.
          </h1>
          <h4>Choose the doctors you want to consult <i>{username}</i></h4>
        </div>
        <div id="docInfo">
          {sharedData.doctors.map((value) =>
            value.status === "inactive" ? (
              <DoctorCardAvailable
                name={value.name}
                specialization={value.specialization}
                experience={value.experience}
                age={value.age}
                id = {value.id}
                gender = {value.gender}
                request = {value.request}
                status = {value.status}
              />
            ) : (
              <DoctorCardUnavailable
                name={value.name}
                specialization={value.specialization}
                experience={value.experience}
                age={value.age}
                gender = {value.gender}
              />
            )
          )}
        </div>
        <ToastContainer/>
        <Footer />
      </div>
    </>
  );
};

export { PatientPage };
