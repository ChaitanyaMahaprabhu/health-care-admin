import "./DoctorPage.css";
import { DoctorNavbar } from "../../components/Navbars/DoctorNavbar";

const DoctorPage = (props) => {
  return (
    <>
      <div id="wallpaper" style={{ overflowY: "scroll" }}>
        <DoctorNavbar />

        <div id="doctorStatus" className="frosted">
            <h1>You Are Inactive</h1>
            <button className="btn btn-warning btn-lg">Request Activation</button>
        </div>
      </div>
    </>
  );
};

export { DoctorPage };
