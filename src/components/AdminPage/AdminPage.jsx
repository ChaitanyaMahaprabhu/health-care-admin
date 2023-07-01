import "./AdminPage.css";
import { AdminNavbar } from "../Navbars/AdminNavbar";
import { DoubleStats } from "../Statistics/DoubleStats";
import { SingleStats } from "../Statistics/SingleStats";

const AdminPage = (props) => {
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

            <h4 id="statsText" className="frosted" style = {{marginTop: '1rem'}}>
              Patients
            </h4>
            <DoubleStats />
          </div>

          <div style = {{marginTop: '2rem'}}>
            <h4 id="statsText" className="frosted">
              Average Experience
            </h4>
            <SingleStats />
          </div>
        </div>
      </div>
    </>
  );
};

export { AdminPage };
