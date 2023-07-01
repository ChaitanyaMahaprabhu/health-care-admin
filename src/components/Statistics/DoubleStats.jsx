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
                backgroundColor: `blue`,
                width: `20vw`,
              }}
            ></div>
            <div
              id="end"
              style={{
                backgroundColor: `pink`,
                width: `40vw`,
              }}
            ></div>
          </div>
          <div id="graphText">
            <h5>Male</h5>
            <h5>Female</h5>
          </div>
        </div>
    </>
  );
};

export { DoubleStats };
