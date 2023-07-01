import { DoubleStats } from "./DoubleStats";
import "./Stats.css";
const SingleStats = (props) => {
  const width = 12;
  return (
    <>
        <div id="graph" class="frosted">
          <div id="outer">
            <div
              id="start"
              style={{
                backgroundColor: `red`,
                width: `20vw`,
              }}
            ></div>
          </div>
          <div id="graphText">
            <h5>0</h5>
            <h5>100</h5>
          </div>
        </div>
    </>
  );
};

export { SingleStats };
