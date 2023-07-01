import "./Navbar.css";
const DoctorNavbar = (props) => {
  const name = "Magnus";
  return (
    <>
        <VideoBar />
        <div id="navbar" className="frosted">
          <h1>Hello {name}!</h1>

          <div id="navOptions">
            <ul id="options">
              <li>
                <a href="#">Statistics</a>
              </li>
              <li>
                <a href="#">Data</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
    </>
  );
};

export { DoctorNavbar };
