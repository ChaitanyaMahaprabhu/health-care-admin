import "./Navbar.css";
const AdminNavbar = (props) => {
  const name = 'Magnus';
  return (
    <>
      <div id="wallpaper">
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
      </div>
    </>
  );
};

export { AdminNavbar };
