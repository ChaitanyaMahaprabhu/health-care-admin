import "./DoctorCard.css";
import image1 from "../../assets/images/1.png";
const DoctorCardAvailable = () => {
  return (
      <div id="doctorCard" className="frosted">
        <div id="doctorImage" style={{ background: `url(${image1})` }}></div>
        <div id="doctorInfo">
          <div>
          <h1>Dr. Chaitanya Mahaprabhu</h1>
          <h4>
            Specialization : <i>Laughter Therapy</i>
          </h4>
          <h4>Experience : 2 years</h4>
          <h4>Age : 22</h4>
          </div>

          <button className="btn btn-primary btn-lg">Choose</button>
        </div>
      </div>
  );
};

const DoctorCardUnavailable = () => {
    return (
        <div id="doctorCard" className="frosted">
          <div id="doctorImage" style={{ background: `url(${image1})` }}></div>
          <div id="doctorInfo">
            <div>
            <h1>Dr. Chaitanya Mahaprabhu</h1>
            <h4>
              Specialization : <i>Laughter Therapy</i>
            </h4>
            <h4>Experience : 2 years</h4>
            <h4>Age : 22</h4>
            </div>
  
            <button className="btn btn-primary btn-lg" disabled>Not Available</button>
          </div>
        </div>
    );
  };

export { DoctorCardAvailable, DoctorCardUnavailable };
