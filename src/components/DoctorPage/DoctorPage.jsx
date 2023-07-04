import "./DoctorPage.css";
import { DoctorNavbar } from "../../components/Navbars/DoctorNavbar";
import { useContext, useEffect, useState } from "react";
import { context } from "../../context/SharedData";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Footer} from '../Footer/Footer';

const DoctorPage = () => {
  const sharedData = useContext(context);
  const { username } = useParams();
  const [doctorData, setDoctorData] = useState({});
  const [doctorToggle, setDoctorToggle] = useState({});
  const [id, setId] = useState();

  useEffect(() => {
    getDoctor();
  });

  const [doctorUpdate, setDoctorUpdate] = useState({});

  const getDoctor = () => {
    for (let doctor of sharedData.doctors) {
      if (doctor.userName === username) {
        setId(doctor.id);
        setDoctorData(doctor);
      }
    }
  };

  const changeHandler = (event) => {
    setDoctorUpdate((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const updateDoctorToggle = async (data) => {
    try {
      const response = await fetch(`https://localhost:7261/api/Doctors/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log("Your request has been made!");
        alert("Your request has been made!");
        window.location = "/";
      } else {
        console.error("Error while making request:", response.statusText);
        console.log(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleRequest = () => {
    const updatedDoctorToggle = {
      ...doctorData,
      request: "yes",
    };

    setDoctorToggle(updatedDoctorToggle);
    updateDoctorToggle(updatedDoctorToggle);
  };

  const clickHandler = () => {
    if (
      parseInt(doctorUpdate["age"], 10) < 28 ||
      parseInt(doctorUpdate["age"], 10) > 100
    ) {
      toast("[Age > 27] allowed and above 100 of age too old for the website!");
    } else if (Object.values(doctorUpdate).includes("") != true) {
      updateDoctorToggle({
        ...doctorUpdate,
        ["userName"]: doctorData.userName,
        ["request"]: doctorData.request,
        ["status"]: doctorData.status,
        id: doctorData.id,
      });
    } else {
      toast("We do not believe in empty forms!");
    }
  };

  return (
    <>
      <div id="docWallpaper" style={{ overflowY: "scroll" }}>
        <DoctorNavbar username={username} />

        <div id="doctorStatus" className="frosted">
          <h1>
            You Are{" "}
            <span
              id="stat"
              style={{
                backgroundColor: `${
                  doctorData.status === "active" ? "green" : "red"
                }`,
              }}
            >
              {doctorData.status}.
            </span>
          </h1>
          <button
            className={
              doctorData.request === "yes" || doctorData.status === "active"
                ? "btn btn-warning btn-lg disabled"
                : "btn btn-warning btn-lg"
            }
            onClick={handleRequest}
          >
            Request Activation
          </button>
        </div>

        <div
          className="container-fluid bg-light"
          id="getDoctors"
          style={{ marginTop: "2rem" }}
        >
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Specialization</th>
                <th>Years Of Experience</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                    name="name"
                    required
                    value={doctorUpdate.name}
                    onChange={changeHandler}
                    aria-required
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    id="age"
                    placeholder="Your age"
                    name="age"
                    required
                    value={doctorUpdate.age}
                    onChange={changeHandler}
                    aria-required
                  />
                </td>
                <td>
                  <select
                    className="form-select"
                    id="gender"
                    name="gender"
                    required
                    onChange={changeHandler}
                    aria-required
                  >
                    <option disabled selected>
                      Choose
                    </option>
                    {sharedData.genders.map((value) => (
                      <option key={value} value={value}>
                        {value}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    id="specialization"
                    placeholder="Your specialization"
                    name="specialization"
                    required
                    value={doctorUpdate.specialization}
                    onChange={changeHandler}
                    aria-required
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    id="experience"
                    placeholder="Experience (In years)"
                    name="experience"
                    required
                    value={doctorUpdate.experience}
                    onChange={changeHandler}
                    aria-required
                  />
                </td>
                <td>
                  <button className="btn btn-primary" onClick={clickHandler}>
                    Update
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <ToastContainer />
        <Footer/>
      </div>
    </>
  );
};

export { DoctorPage };
