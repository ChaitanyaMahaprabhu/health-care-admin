import "./Choices.css";
import {Link} from 'react-router-dom';

const Choices = () => {
  return (
    <>
      <div id="choicesWallpaper" class="choiceWindow">
        <div class="choicesFrosted explain">
          <h1 style={{ fontSize: "4rem" }}>Bonne Santé</h1>
          <h1>~</h1>
          <h4>Let's get you signed up</h4>
          <h4>Choose one of the below options to proceed to the next step</h4>
        </div>
        <div class="choices">
          <div class="frosted doctor">
            <h1><Link to = "/DoctorRegistration">I am a Doctor</Link></h1>
          </div>
          <div class="frosted patient">
            <h1><Link to = "/PatientRegistration">I am a Patient</Link></h1>
          </div>
        </div>
      </div>
    </>
  );
};

export { Choices };
