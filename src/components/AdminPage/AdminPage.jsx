import "./AdminPage.css";
import { AdminNavbar } from "../Navbars/AdminNavbar";
import { DoubleStats } from "../Statistics/DoubleStats";
import { SingleStats } from "../Statistics/SingleStats";
import { DoctorCardAvailable } from "../DoctorCard/DoctorCard";

const AdminPage = (props) => {
  const arr = [1, 2, 3];

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

        <div className="container-fluid frosted" id="getDoctorById">
          <form>
            <div className="mb-3">
              <label htmlFor="doctorID" className="form-label">
                Doctor ID
              </label>
              <input type="text" className="form-control" id="doctorID" />
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

        <div id="activateDoctor">
          <h1 className="frosted" style = {{padding: '1rem'}}>Doctors requesting activation.</h1>
          <div id = "docCards">
            {arr.map((value) => (
              <DoctorCardAvailable />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export { AdminPage };
