import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();
  return (
    <>
      <footer id="footer">
        <div
          id="foot"
          class="frosted"
          style={{ height: "30vh", padding: "2rem" }}
        >
          <div>
            <h2>Chaitanya Mahaprabhu ✨👨‍💻</h2>
            <h3>Chennai, India 🌏</h3>
            <h5>Today - {formattedDate} 📅</h5>
          </div>

          <div>
            <h5 id="linkToHome">
              <Link to="/Checklist">Case Study and Checklist</Link>
            </h5>
            <h5 id="linkToHome">
              <Link to="/Concepts">Concepts Used</Link>
            </h5>
            <h5 id="linkToHome">
              <a href="https://github.com/chaitanya-mahaprabhu-kanini/health-care-admin">
                Github Repo
              </a>
            </h5>
            <h5 id="linkToHome">
              <Link to="/">To home</Link>
            </h5>
          </div>
        </div>
      </footer>
    </>
  );
};

export { Footer };
