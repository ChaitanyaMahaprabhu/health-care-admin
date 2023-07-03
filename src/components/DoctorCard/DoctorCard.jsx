import "./DoctorCard.css";
import image1 from "../../assets/images/1.png";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DoctorCardAvailable = (props) => {
  const path = "../../assets/images/" + props.specialization + ".jpeg";
  const [doctorIdData, setDoctorIdData] = useState([{}]);
  const [doctor, setDoctor] = useState({
    id: props.id,
    name: `${props.name}`,
    age: props.age,
    gender: `${props.gender}`,
    specialization: `${props.specialization}`,
    experience: props.experience,
    request: `${props.request}`,
    status: "active",
  });

  const clickHandler = async () => {
    try {
      const response = await fetch(`https://localhost:7261/api/Doctors/${props.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(doctor),
      });
      if (response.ok) {
        console.log("Doctor has been assigned!");
        alert("Doctor has been assigned!");
        console.log(doctor);
        window.location = '/';
      } else {
        console.error("Error assigning doctor:", response.statusText);
        console.log(doctor);
      }
    } catch (e) {
      console.log(e);
    }
  };


  return (
    <div id="doctorCard" className="frosted">
      <img id="doctorImage" src={path}></img>
      <div id="doctorInfo">
        <div>
          <h1>Dr. {props.name}</h1>
          <h4>
            Specialization :{" "}
            <i style={{ textTransform: "capitalize" }}>
              {props.specialization}
            </i>
          </h4>
          <h4>Experience : 2 years</h4>
          <h4>Age : 22</h4>
        </div>

        <button className="btn btn-primary btn-lg mt-5" onClick = {clickHandler}>Choose</button>
      </div>
    </div>
  );
};

const DoctorCardUnavailable = (props) => {
  return (
    <div id="doctorCard" className="frosted">
      <div id="doctorImage" style={{ background: `url(${image1})` }}></div>
      <div id="doctorInfo">
        <div>
          <h1>Dr. {props.name}</h1>
          <h4>
            Specialization : <i>{props.specialization}</i>
          </h4>
          <h4>Experience : {props.experience} years</h4>
          <h4>Age : {props.age}</h4>
        </div>

        <button className="btn btn-primary btn-lg" disabled>
          Not Available
        </button>
      </div>
    </div>
  );
};

export { DoctorCardAvailable, DoctorCardUnavailable };
