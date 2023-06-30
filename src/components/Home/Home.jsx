import "./Home.css";

const Home = (props) => {
  return (
    <>
      <div id="wallpaper">
        <div id="side" class="frosted">
          <div id="introduction">
            <h1>Welcome To</h1>
            <h1>Healthify</h1>
            <h4 style={{ marginTop: "1rem" }}>
              Connect To Doctors. Anywhere. Anytime.
            </h4>
          </div>

          <div id="stripes">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div id="signUp" class="frosted">
          <h1>Join Us</h1>
        </div>
        <div id="logIn" class="frosted">
          <h1>Step In</h1>
        </div>
      </div>
    </>
  );
};

export { Home };
