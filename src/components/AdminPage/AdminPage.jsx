import "./AdminPage.css";
import { AdminNavbar } from "../Navbars/AdminNavbar";
import { DoubleStats } from "../Statistics/DoubleStats";
import { SingleStats } from "../Statistics/SingleStats";
import { DoctorCardAvailable } from "../DoctorCard/DoctorCard";
import { context } from "../../context/SharedData";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { Footer } from "../Footer/Footer";

const AdminPage = (props) => {
  const sharedData = useContext(context);

  const [doctorId, setDoctorId] = useState("");
  const [patientId, setPatientId] = useState("");
  const [patientIdData, setPatientIdData] = useState([{}]);
  const [doctorIdData, setDoctorIdData] = useState([{}]);
  const [doctorToggle, setDoctorToggle] = useState({});
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchDoctors(sharedData.doctors);
  }, [doctors]);

  useEffect(() => {
    fetchPatients(sharedData.patients);
  }, [patients]);

  useEffect(() => {
    fetchDoctorById();
  }, [doctorId]);

  useEffect(() => {
    fetchPatientById();
  }, [patientId]);

  const fetchDoctors = async () => {
    try {
      const response = await fetch("https://localhost:7261/api/Doctors");
      if (response.ok) {
        const data = await response.json();
        setDoctors(data);
      } else {
        console.error("Error fetching instructors:", response.statusText);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const fetchPatients = async () => {
    try {
      const response = await fetch("https://localhost:7261/api/Patients");
      if (response.ok) {
        const data = await response.json();
        setPatients(data);
      } else {
        console.error("Error fetching instructors:", response.statusText);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const fetchDoctorById = async () => {
    try {
      const response = await fetch(
        `https://localhost:7261/api/Doctors/${doctorId}`
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
        `https://localhost:7261/api/Patients/${patientId}`
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
        `https://localhost:7261/api/Patients/${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        console.log("Patient deleted successfully");
        patients.filter((patient) => patient.id !== id);
      } else {
        console.error("Error deleting patient:", response.statusText);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const deleteDoctor = async (id) => {
    try {
      const response = await fetch(`https://localhost:7261/api/Doctors/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        console.log("Doctor data deleted successfully");
        doctors.filter((doctor) => doctor.id !== id);
      } else {
        console.error("Error deleting doctor:", response.statusText);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const updateDoctorToggle = async (id) => {
    try {
      const response = await fetch(`https://localhost:7261/api/Doctors/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(doctorToggle),
      });
      if (response.ok) {
        console.log("Doctor status updated successfully");
        console.log(doctorToggle);
        doctors.map((doctor) => (doctor.id === id ? doctorToggle : doctor));
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

  let Dmale = 0;
  let Dfemale = 0;
  for (let doctor of doctors) {
    if (doctor.gender.toLowerCase() === "male") Dmale += 1;
    else Dfemale += 1;
  }

  let Pmale = 0;
  let Pfemale = 0;
  for (let patient of patients) {
    if (patient.gender.toLowerCase() === "male") Pmale += 1;
    else Pfemale += 1;
  }

  let experience = 0;
  let count = 0;
  for (let doctor of doctors) {
    experience += parseInt(doctor.experience, 10);
    count += 1;
  }

  return (
    <>
      <div id="wallpaper" style={{ overflowY: "scroll" }}>
        <AdminNavbar />

        <div id="adminStats">
          <div>
            <h4 id="statsText" className="frosted">
              Doctors
            </h4>
            <DoubleStats
              startColor={"steelblue"}
              endColor={"pink"}
              stTotal={Dmale + 20}
              enTotal={Dfemale + 20}
              startText={"Male"}
              endText={"Female"}
            />

            <h4
              id="statsText"
              className="frosted"
              style={{ marginTop: "1rem" }}
            >
              Patients
            </h4>
            <DoubleStats
              startColor={"steelblue"}
              endColor={"pink"}
              stTotal={Pmale + 20}
              enTotal={Pfemale + 20}
              startText={"Male"}
              endText={"Female"}
            />
          </div>

          <div style={{ marginTop: "2rem" }}>
            <h4 id="statsText" className="frosted">
              Average Experience
            </h4>
            <SingleStats
              color={"orange"}
              data={experience / count}
              startText={"0"}
              endText={"100"}
            />
          </div>
        </div>

        <div style={{ marginTop: "4rem" }} id="doctorTable">
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
                {doctors.map((data) => (
                  <tr>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.age}</td>
                    <td>{data.gender}</td>
                    <td>{data.specialization}</td>
                    <td>{data.experience}</td>
                    <td style={{ color: "white", fontSize: "1.5rem" }}>
                      {data.request === "yes" ? "🙏" : "🚫"}
                    </td>
                    <td
                      id="status"
                      style={{
                        color: "white",
                        backgroundColor: `${
                          data.status === "active" ? "green" : "red"
                        }`,
                      }}
                    >
                      {data.status === "active" ? "👍" : "👎"}
                    </td>
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

        <div style={{ marginTop: "2rem" }} id="patientTable">
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
                {patients.map((data) => (
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
                value={doctorId}
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
                value={patientId}
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

        <Footer/>
      </div>
    </>
  );
};

export { AdminPage };
