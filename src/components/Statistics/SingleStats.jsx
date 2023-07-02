import { DoubleStats } from "./DoubleStats";
import "./Stats.css";
const SingleStats = (props) => {
  const width = props.data;
  return (
    <>
        <div id="graph" class="frosted">
          <div id="outer">
            <div
              id="start"
              style={{
                backgroundColor: `${props.color}`,
                width: `${width}%`,
              }}
              title = {Math.round(width)}
            ></div>
          </div>
          <div id="graphText">
            <h5>{props.startText}</h5>
            <h5>{props.endText}</h5>
          </div>
        </div>
    </>
  );
};

export { SingleStats };
