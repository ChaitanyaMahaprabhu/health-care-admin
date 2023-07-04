import "./DoctorRegistration.css";
import { context } from "../../context/SharedData";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { specializations } from "../../constants/constants";

const DoctorRegistration = () => {
  const sharedData = useContext(context);

  const [doctor, setDoctor] = useState({
    name: "",
    age: "",
    gender: "",
    specialization: "",
    experience: "",
    request: "no",
    status: "inactive",
  });

  const [doctorLogin, setDoctorLogin] = useState({
    userName: "",
    userEmail: "",
    password: "",
    role: "Doctor",
  });

  const changeHandler = (event) => {
    if (event.target.name === "userName") {
      setDoctor((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
      }));

      setDoctorLogin((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
      }));
    } else if (
      event.target.name != "userEmail" &&
      event.target.name != "password"
    ) {
      setDoctor((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
      }));
    } else {
      setDoctorLogin((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
      }));
    }
  };

  const clickHandler = (event) => {
    for (let doc of sharedData.accounts) {
      if (doc.userName === doctorLogin.userName) {
        toast("Username not available 😶");
        return;
      }
    }

    if (parseInt(doctor["age"], 10) < 28 || parseInt(doctor["age"], 10) > 100) {
      toast("[Age > 27] allowed and above 100 of age too old for the website!");
    } else if (
      Object.values(doctor).includes("") != true &&
      Object.values(doctorLogin).includes("") != true
    ) {
      console.log(doctor);
      post();
      postUser();
      alert("You have been registered successfully!");
      window.location = "/";
    } else {
      toast("We do not believe in empty forms!");
    }
  };

  const post = () => {
    fetch("https://localhost:7261/api/Doctors", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(doctor),
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
      body: JSON.stringify(doctorLogin),
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
      <div id="doctorWallpaper" style={{ overflowY: "scroll" }}>
        <div className="desc frostedDoc">
          <div>
            <h1 style={{ fontSize: "4rem" }}>Hello Doctor.</h1>
            <h4 style={{ marginTop: "1rem" }}>
              We have patients waiting outside
            </h4>
            <h4>Let's get you ready.</h4>
          </div>

          <div id="stripes">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div className="userData frostedDoc">
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
                  autocomplete="off"
                  onChange={changeHandler}
                />
              </div>

              <div className="mb-3 mt-3">
                <label for="specialization" className="form-label">
                  Specialization
                </label>
                <select
                  className="form-select"
                  id="specialization"
                  name="specialization"
                  required
                  aria-required
                  onChange={changeHandler}
                >
                  <option disabled selected>
                    Choose
                  </option>
                  {specializations.map((value) => (
                    <option value={value.toLowerCase()}>{value}</option>
                  ))}
                </select>
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
                  autocomplete="off"
                  onChange={changeHandler}
                />
              </div>

              <div className="mb-3 mt-3">
                <label for="experience" className="form-label">
                  Experience
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="experience"
                  placeholder="Experience (In years)"
                  name="experience"
                  required
                  aria-required
                  autocomplete="off"
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
                  autocomplete="off"
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
                    autocomplete="off"
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
                    autocomplete="off"
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

export { DoctorRegistration };
