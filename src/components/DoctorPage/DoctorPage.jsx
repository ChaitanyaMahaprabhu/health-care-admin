import "./DoctorPage.css";
import { DoctorNavbar } from "../../components/Navbars/DoctorNavbar";
import { useContext, useEffect, useState } from "react";
import { context } from "../../context/SharedData";
import { useParams } from "react-router-dom";

const DoctorPage = () => {
  const sharedData = useContext(context);
  const { username } = useParams();
  const [doctorData, setDoctorData] = useState({});

  useEffect(() => {
    const foundDoctor = sharedData.doctors.find(doctor => doctor.userName === username);
    if (foundDoctor) {
      setDoctorData(foundDoctor);
      console.log(foundDoctor);
    }
  }, [sharedData.doctors, username]);

  return (
    <>
      <div id="docWallpaper" style={{ overflowY: "scroll" }}>
        <DoctorNavbar username={username} />

        <div id="doctorStatus" className="frosted">
          <h1>You Are <span id = "stat" style = {{backgroundColor: `${doctorData.status === 'active' ? 'green' : 'red'}`}}>{doctorData.status}.</span></h1>
          <button className="btn btn-warning btn-lg">Request Activation</button>
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
                    aria-required
                  />
                </td>
                <td>
                  <select
                    className="form-select"
                    id="gender"
                    name="gender"
                    required
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
                    aria-required
                  />
                </td>
                <td>
                  <button className="btn btn-primary">Update</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export { DoctorPage };
