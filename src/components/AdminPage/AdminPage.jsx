import "./AdminPage.css";
import { AdminNavbar } from "../Navbars/AdminNavbar";
import { DoubleStats } from "../Statistics/DoubleStats";
import { SingleStats } from "../Statistics/SingleStats";
import { DoctorCardAvailable } from "../DoctorCard/DoctorCard";
import { context } from "../../context/SharedData";
import { useContext } from "react";
import { useState, useEffect } from "react";

const AdminPage = (props) => {
  const con = useContext(context);

  const [doctorId, setDoctorId] = useState("");
  const [patientId, setPatientId] = useState("");
  const [patientIdData, setPatientIdData] = useState([{}]);
  const [doctorIdData, setDoctorIdData] = useState([{}]);
  const [toggle, setToggle] = useState({});

  useEffect(() => {
    fetchDoctorById();
  }, [doctorId]);

  useEffect(() => {
    fetchPatientById();
  }, [patientId]);

  const fetchDoctorById = async () => {
    try {
      const response = await fetch(
        `https://localhost:7210/api/Doctors/${doctorId}`
      );
      if (response.ok) {
        const data = await response.json();
        setDoctorIdData([data]);
      } else {
        console.error("Error fetching doctors:", response.statusText);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const fetchPatientById = async () => {
    try {
      const response = await fetch(
        `https://localhost:7210/api/Patients/${patientId}`
      );
      if (response.ok) {
        const data = await response.json();
        setPatientIdData([data]);
      } else {
        console.error("Error fetching patients:", response.statusText);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleInputChange = (event) => {
    if (event.target.name === "doctorID") setDoctorId(event.target.value);
    else setPatientId(event.target.value);
  };

  return (
    <>
      <div id="wallpaper" style={{ overflowY: "scroll" }}>
        <AdminNavbar />

        <div id="adminStats">
          <div>
            <h4 id="statsText" className="frosted">
              Doctors
            </h4>
            <DoubleStats />

            <h4
              id="statsText"
              className="frosted"
              style={{ marginTop: "1rem" }}
            >
              Patients
            </h4>
            <DoubleStats />
          </div>

          <div style={{ marginTop: "2rem" }}>
            <h4 id="statsText" className="frosted">
              Average Experience
            </h4>
            <SingleStats />
          </div>
        </div>

        <div style = {{marginTop: '4rem'}}>
          <h4 id="statsText" className="frosted">
            Doctors
          </h4>
          <div className="container-fluid bg-light" id="getDoctors">
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Specialization</th>
                  <th>Years Of Experience</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                  <td>
                    <button className="btn btn-warning">Toggle Status</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div style = {{marginTop: '2rem'}}>
          <h4 id="statsText" className="frosted">
            Patients
          </h4>
          <div className="container-fluid bg-light" id="getDoctors">
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Ailment</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="container-fluid frosted" id="getDoctorById">
          <form>
            <div className="mb-3">
              <label htmlFor="doctorID" className="form-label">
                Doctor ID
              </label>
              <input
                type="text"
                className="form-control"
                id="doctorID"
                onChange={handleInputChange}
              />
            </div>
          </form>
          <table className="table mt-5">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Specialization</th>
                <th>Years Of Experience</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tbody>
          </table>
        </div>

        <div className="container-fluid frosted" id="getDoctorById">
          <form>
            <div className="mb-3">
              <label htmlFor="patientID" className="form-label">
                Patient ID
              </label>
              <input
                type="text"
                className="form-control"
                id="patientID"
                onChange={handleInputChange}
              />
            </div>
          </form>
          <table className="table mt-5">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Ailment</th>
              </tr>
            </thead>
            <tbody>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tbody>
          </table>
        </div>

        <div id="activateDoctor">
          <h1 className="frosted" style={{ padding: "1rem" }}>
            Doctors requesting activation.
          </h1>
          <div id="docCards">
            <DoctorCardAvailable />
          </div>
        </div>
      </div>
    </>
  );
};

export { AdminPage };
