import "./PatientRegistration.css";
import { context } from "../../context/SharedData";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { specializations } from "../../constants/constants";

const PatientRegistration = () => {
  const sharedData = useContext(context);
  const [flag, setFlag] = useState(true);

  const [patient, setPatient] = useState({
    name: "",
    age: "",
    gender: "",
    ailment: "",
  });

  const [patientLogin, setPatientLogin] = useState({
    userName: "",
    userEmail: "",
    password: "",
    role: "Patient",
  });

  const changeHandler = (event) => {
    if (
      event.target.name != "userEmail" &&
      event.target.name != "userName" &&
      event.target.name != "password"
    ) {
      setPatient((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
      }));
    } else {
      setPatientLogin((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
      }));
    }
  };

  const clickHandler = (event) => {
    for (let doc of sharedData.doctors) {
      if (doc.userName === doctorLogin.userName) {
        setFlag(false);
      }
    }

    if (
      parseInt(patient["age"], 10) < 17 ||
      parseInt(patient["age"], 10) > 100
    ) {
      toast(
        "Legal adults allowed and above 100 of age too old for the website!"
      );
    } else if (flag === true) {
      toast("Username not available 😶");
    } else if (
      Object.values(patient).includes("") != true &&
      Object.values(patientLogin).includes("") != true
    ) {
      console.log(patient);
      post();
      postUser();
      alert("You have been registered successfully!");
      window.location = "/";
    } else {
      toast("We do not believe in empty forms!");
    }
  };

  const post = () => {
    fetch("https://localhost:7261/api/Patients", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(patient),
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const postUser = () => {
    fetch("https://localhost:7261/api/Users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(patientLogin),
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div id="patientWallpaper" style={{ overflowY: "scroll" }}>
        <div className="desc frosted">
          <div>
            <h1 style={{ fontSize: "4rem" }}>Good To See You.</h1>
            <h4 style={{ marginTop: "1rem" }}>Health is wealth they say,</h4>
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
                  onChange={changeHandler}
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
                  onChange={changeHandler}
                >
                  <option disabled selected>
                    Choose
                  </option>
                  {sharedData.genders.map((value) => (
                    <option value={value.toLowerCase()}>{value}</option>
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
                  onChange={changeHandler}
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
                  onChange={changeHandler}
                />
              </div>
              <div className="mb-3 mt-3">
                <label for="userEmail" className="form-label">
                  Email ID
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="userEmail"
                  placeholder="Enter your email ID"
                  name="userEmail"
                  required
                  aria-required
                  pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                  onChange={changeHandler}
                />
              </div>

              <div id="userPass">
                <div className="mb-3 mt-3">
                  <label for="userName" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="userName"
                    placeholder="Username"
                    name="userName"
                    required
                    aria-required
                    onChange={changeHandler}
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
                    onChange={changeHandler}
                  />
                </div>
              </div>

              <div id="buttons">
                <button
                  type="button"
                  className="btn btn-primary ps-4 pe-4"
                  onClick={clickHandler}
                >
                  Sign Up
                </button>

                <button
                  type="button"
                  className="btn btn-secondary ps-4 pe-4"
                  onClick={() => (window.location = "/")}
                >
                  To Home
                </button>
              </div>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export { PatientRegistration };
