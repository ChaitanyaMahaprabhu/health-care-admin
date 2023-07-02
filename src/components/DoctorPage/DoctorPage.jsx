import "./DoctorPage.css";
import { DoctorNavbar } from "../../components/Navbars/DoctorNavbar";
import { useContext, useEffect } from "react";
import { context } from "../../context/SharedData";

const DoctorPage = (props) => {
  const sharedData = useContext(context);

  return (
    <>
      <div id="wallpaper" style={{ overflowY: "scroll" }}>
        <DoctorNavbar />

        <div id="doctorStatus" className="frosted">
          <h1>You Are Inactive</h1>
          <button className="btn btn-warning btn-lg">Request Activation</button>
        </div>

        <div className="container-fluid bg-light" id="getDoctors">
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
                      <option name={value}>{value}</option>
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
