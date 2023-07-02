import "./AdminPage.css";
import { AdminNavbar } from "../Navbars/AdminNavbar";
import { DoubleStats } from "../Statistics/DoubleStats";
import { SingleStats } from "../Statistics/SingleStats";
import { DoctorCardAvailable } from "../DoctorCard/DoctorCard";
import { context } from "../../context/SharedData";
import { useContext } from "react";
import { useState, useEffect } from "react";

const AdminPage = (props) => {
  const sharedData = useContext(context);

  const [doctorId, setDoctorId] = useState("");
  const [patientId, setPatientId] = useState("");
  const [patientIdData, setPatientIdData] = useState([{}]);
  const [doctorIdData, setDoctorIdData] = useState([{}]);
  const [doctorToggle, setDoctorToggle] = useState({});

  useEffect(() => {

  }, [sharedData.doctors, sharedData.patients]);

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

  const deletePatient = async (id) => {
    try {
      const response = await fetch(
        `https://localhost:7210/api/Patients/${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        console.log("Patient deleted successfully");
        sharedData.patients.filter((patient) => patient.id !== id);
      } else {
        console.error("Error deleting patient:", response.statusText);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const deleteDoctor = async (id) => {
    try {
      const response = await fetch(`https://localhost:7210/api/Doctors/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        console.log("Doctor data deleted successfully");
        sharedData.doctors.filter((doctor) => doctor.id !== id);
      } else {
        console.error("Error deleting doctor:", response.statusText);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const updateDoctorToggle = async (id) => {
    try {
      const response = await fetch(`https://localhost:7210/api/Doctors/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(doctorToggle),
      });
      if (response.ok) {
        console.log("Doctor status updated successfully");
        console.log(doctorToggle);
        sharedData.doctors.map((doctor) =>
          doctor.id === id ? doctorToggle : doctor
        );
      } else {
        console.error("Error updating doctor status:", response.statusText);
        console.log(doctorToggle);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    updateDoctorToggle(doctorToggle.id);
  }, [doctorToggle]);

  const toggleDoctor = (data) => {
    if (data.status === "active") {
      setDoctorToggle({
        id: data.id,
        name: `${data.name}`,
        age: data.age,
        gender: `${data.gender}`,
        specialization: `${data.specialization}`,
        experience: data.experience,
        request: "no",
        status: "inactive",
      });
    } else {
      setDoctorToggle({
        id: data.id,
        name: `${data.name}`,
        age: data.age,
        gender: `${data.gender}`,
        specialization: `${data.specialization}`,
        experience: data.experience,
        request: "no",
        status: "active",
      });
    }
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

        <div style={{ marginTop: "4rem" }}>
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
                  <th>Requested</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {sharedData.doctors.map((data) => (
                  <tr>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.age}</td>
                    <td>{data.gender}</td>
                    <td>{data.specialization}</td>
                    <td>{data.experience}</td>
                    <td>{data.request}</td>
                    <td>{data.status}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteDoctor(data.id)}
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-warning"
                        onClick={() => toggleDoctor(data)}
                      >
                        Toggle Status
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div style={{ marginTop: "2rem" }}>
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
                {sharedData.patients.map((data) => (
                  <tr>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.age}</td>
                    <td>{data.gender}</td>
                    <td>{data.ailment}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => deletePatient(data.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
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
                name="doctorID"
                onChange={handleInputChange}
                value = {doctorId}
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
                <th>Requested</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {doctorIdData.map((data) => (
                <tr>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.age}</td>
                  <td>{data.gender}</td>
                  <td>{data.specialization}</td>
                  <td>{data.experience}</td>
                  <td>{data.request}</td>
                  <td>{data.status}</td>
                </tr>
              ))}
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
                name="patientID"
                onChange={handleInputChange}
                value = {patientId}
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
            {patientIdData.map((data) => (
                  <tr>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.age}</td>
                    <td>{data.gender}</td>
                    <td>{data.ailment}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export { AdminPage };
