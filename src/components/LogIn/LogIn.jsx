import "./LogIn.css";
import { context } from "../../context/SharedData";
import { useContext, useEffect } from "react";
const LogIn = () => {
  const sharedData = useContext(context);
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
              <div class="mb-3 mt-3">
                <label for="username" class="form-label">
                  Username
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  placeholder="Your username"
                  name="username"
                  required
                  aria-required
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
                />
              </div>
              <div class="mb-3">
                <label for="user" className="form-label">
                  User Type
                </label>
                <select
                  className="form-select"
                  id="user"
                  name="user"
                  required
                  aria-required
                >
                  <option disabled selected>
                    Choose
                  </option>
                  {sharedData.users.map((value) => (
                    <option name={value}>{value}</option>
                  ))}
                </select>
              </div>

              <button type="submit" className="btn btn-primary ps-4 pe-4 mt-3">
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
