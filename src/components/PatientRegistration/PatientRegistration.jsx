import "./PatientRegistration.css";
import { context } from "../../context/SharedData";
import { useContext, useEffect } from "react";

const PatientRegistration = () => {
  const sharedData = useContext(context);

  return (
    <>
      <div id="wallpaper">
        <div className="desc frosted">
          <div>
            <h1 style={{ fontSize: "4rem" }}>Good To See You.</h1>
            <h4 style={{ marginTop: "1rem" }}>
              Health is wealth they say,
            </h4>
            <h4>Let's get you rich.</h4>
          </div>

          <div id="stripes">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div className="userData frosted">
          <div id="loginInput">
            <form>
              <div className="mb-3 mt-3">
                <label for="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  name="name"
                  required
                  aria-required
                />
              </div>

              <div className="mb-3 mt-3">
                <label for="user" className="form-label">
                  Gender
                </label>
                <select
                  className="form-select"
                  id="gender"
                  name="gender"
                  required
                  aria-required
                >
                  <option disabled selected>
                    Choose
                  </option>
                  {sharedData.genders.map((value) => (
                    <option name={value}>{value}</option>
                  ))}
                </select>
              </div>

              <div className="mb-3 mt-3">
                <label for="age" className="form-label">
                  Age
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="age"
                  placeholder="Your age"
                  name="age"
                  required
                  aria-required
                />
              </div>

              <div className="mb-3 mt-3">
                <label for="ailment" className="form-label">
                  Ailment
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="ailment"
                  placeholder="Your ailment"
                  name="ailment"
                  required
                  aria-required
                />
              </div>

              <div id="userPass">
                <div className="mb-3 mt-3">
                  <label for="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Username"
                    name="username"
                    required
                    aria-required
                  />
                </div>

                <div className="mb-3 mt-3">
                  <label for="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    name="password"
                    required
                    aria-required
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary ps-4 pe-4">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export { PatientRegistration };
