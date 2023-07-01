import "./DoctorInfo.css";
import {
  DoctorCardAvailable,
  DoctorCardUnavailable,
} from "../DoctorCard/DoctorCard";
const DoctorInfo = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <div id="wall" style={{ overflowY: "scroll" }}>
        <div id = "infoDesc" className = "frosted">
            <h1 style = {{fontSize: '3rem'}}>The best in the world, at your service.</h1>
            <h4>Choose the doctors you want to consult</h4>
        </div>
        <div id = "docInfo">
            {arr.map(value => <DoctorCardAvailable/>)}
        </div>
      </div>
    </>
  );
};

export { DoctorInfo };
