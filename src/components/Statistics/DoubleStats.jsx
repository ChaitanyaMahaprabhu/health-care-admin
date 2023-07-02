import "./Stats.css";
const DoubleStats = (props) => {
  const startWidth = `${props.stTotal}`;
  const endWidth = `${props.enTotal}`;
  return (
    <>
        <div id="graph" class="frosted">
          <div id="outer">
            <div
              id="start"
              style={{
                backgroundColor: `${props.startColor}`,
                width: `${startWidth}%`,
              }}
            ></div>
            <div
              id="end"
              style={{
                backgroundColor: `${props.endColor}`,
                width: `${endWidth}%`,
              }}
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

export { DoubleStats };
