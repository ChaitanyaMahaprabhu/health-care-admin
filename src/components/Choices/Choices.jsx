import "./Choices.css";
const Choices = () => {
  return (
    <>
      <div id="wallpaper" class="choiceWindow">
        <div class="frosted explain">
          <h1 style={{ fontSize: "4rem" }}>Bonne Santé</h1>
          <h1>~</h1>
          <h4>Let's get you signed up</h4>
          <h4>Choose one of the below option to proceed to the next step</h4>
        </div>
        <div class="choices">
          <div class="frosted doctor">
            <h1>I am a Doctor</h1>
          </div>
          <div class="frosted patient">
            <h1>I am a Patient</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export { Choices };
