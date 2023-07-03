import "./Concepts.css";
import { concepts } from "../../constants/constants";
import { Footer } from "../Footer/Footer";

const Concepts = () => {
  return (
    <>
      <div id="conceptsWallpaper">
        <Footer/>
        <div id="infoDesc" className="frosted mt-5">
          <h1 style={{ fontSize: "3rem" }}>
            So, how did I create this{" "}
            <span class="font-effect-neon">amazing</span> website?
          </h1>
          <h4>Scroll through the topics below to find out</h4>
        </div>

        <div id="concepts">
          {concepts.map((value, index) => (
            <div key = {index} id="concept" className= "frosted">
              <h1>{value}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export { Concepts };
