import "./Choices.css";
const Choices = () => {
  return (
    <>
      <div id="wallpaper" class="choiceWindow">
        <div class="frosted explain">
          <h1 style={{ fontSize: "4rem" }}>Bonne Santé</h1>
          <h1>~</h1>
          <h4>Let's get you signed up</h4>
          <h4>Choose one of the below options to proceed to the next step</h4>
        </div>
        <div class="choices">
          <div class="frosted doctor">
            <h1><a href = "/DoctorRegistration">I am a Doctor</a></h1>
          </div>
          <div class="frosted patient">
            <h1><a href = "/PatientRegistration">I am a Patient</a></h1>
          </div>
        </div>
      </div>
    </>
  );
};

export { Choices };
