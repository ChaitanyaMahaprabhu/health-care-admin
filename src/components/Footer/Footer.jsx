import './Footer.css';
import {Link} from 'react-router-dom';

const Footer = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();
  return (
    <>
      <footer id="footer">
        <div id = "foot" class="frosted" style={{ height: "20vh", padding: "2rem" }}>
          <div>
          <h2>Chaitanya Mahaprabhu ✨👨‍💻</h2>
          <h3>Chennai, India 🌏</h3>
          </div>

          <div>
          <h5>Today - {formattedDate} 📅</h5>
          <h5 id = "linkToHome"><Link to = '/'>Go to home</Link></h5>
          </div>
        </div>
      </footer>
    </>
  );
};

export { Footer };
