import "./CheckList.css";
import pdf from "../../assets/docs/bb2.pdf";
import { checklist } from "../../constants/constants";
import { Footer } from "../Footer/Footer";

const CheckList = () => {
  return (
    <>
      <div id="checkWallpaper">
        <div id="infoDesc" className="frosted" style={{ height: "40vh" }}>
          <h1 style={{ fontSize: "3rem" }}>Case Study and Checklist</h1>
          <h4>PDF - Checklist - Github</h4>
        </div>

        <h4 id="statsText" className="frosted" style={{ marginTop: "3rem" }}>
          Case Study
        </h4>
        <div id="pdf">
          <object data={pdf} type="application/pdf" width="100%" height="500px">
            <p>
              Unable to display PDF file. <a href={pdf}>Download</a> instead.
            </p>
          </object>
        </div>

        <h4 id="statsText" className="frosted" style={{ marginTop: "1rem" }}>
          Checklist
        </h4>
        <div id="checklist">
          <div className="container-fluid bg-light" id="getDoctors">
            <table className="table">
              <thead>
                {checklist.map((value, index) => (
                  <tr>
                    <th>{index}</th>
                    <th>{value}</th>
                    <th>✅</th>
                  </tr>
                ))}
              </thead>
            </table>
          </div>
        </div>

        <div id="infoDesc" className="frosted mt-5 pulsate" style={{ height: "20vh"}}>
          <h1 id="linkToHome">
            <a href="https://github.com/chaitanya-mahaprabhu-kanini/health-care-admin">
              To Github Repo
            </a>
          </h1>
        </div>
        <Footer />
      </div>
    </>
  );
};

export { CheckList };
