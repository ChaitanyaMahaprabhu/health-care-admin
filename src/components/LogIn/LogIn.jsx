import "./LogIn.css";
import { context } from "../../context/SharedData";
import { useContext, useEffect, useState } from "react";
const LogIn = () => {
  const sharedData = useContext(context);
  const [userLogin, setUserLogin] = useState({
    userName: "",
    userEmail: "",
    password: "",
    role: "",
  });
  
  const changeHandler = (event) => {
      setUserLogin((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
      }));
    }

  const clickHandler = (event) => {
    console.log(userLogin);
  }

  return (
    <>
      <div id="loginWall">
        <div class="desc frosted">
          <div>
            <h1 style={{ fontSize: "4rem" }}>Step In.</h1>
            <h4 style={{ marginTop: "1rem" }}>
              Your one stop destination for everything health
            </h4>
            <h4>awaits you.</h4>
          </div>

          <div id="stripes">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div class="userData frosted">
          <div id="loginInput">
            <form>
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
                  onChange={changeHandler}
                />
              </div>

              <div class="mb-3 mt-3">
                <label for="userName" class="form-label">
                  Username
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="userName"
                  placeholder="Your username"
                  name="userName"
                  required
                  aria-required
                  onChange={changeHandler}
                />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Your password"
                  name="password"
                  required
                  aria-required
                  onChange={changeHandler}
                />
              </div>
              <div class="mb-3">
                <label for="role" className="form-label">
                  User Type
                </label>
                <select
                  className="form-select"
                  id="role"
                  name="role"
                  required
                  aria-required
                  onChange={changeHandler}
                >
                  <option disabled selected>
                    Choose
                  </option>
                  {sharedData.users.map((value) => (
                    <option name={value}>{value}</option>
                  ))}
                </select>
              </div>

              <button type="button" className="btn btn-primary ps-4 pe-4 mt-3" onClick={clickHandler}>
                Enter
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export { LogIn };
