import "./LogIn.css";
const LogIn = () => {
  return (
    <>
      <div id="wallpaper" className="center">
        <div id="loginForm" className="frosted">
          <h1 id="heading">Log In.</h1>

          <div id="loginInput">
            <form action="/action_page.php">
              <div class="mb-3 mt-3">
                <label for="username" class="form-label">
                  Username
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  placeholder="Enter your username"
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
                  placeholder="Enter your password"
                  name="password"
                  required
                  aria-required
                />
              </div>
              <div class="mb-3">
                <label for="user" class="form-label">
                  User Type
                </label>
                <select class="form-select mb-4" id="user" name="user" required aria-required>
                  <option disabled selected>Choose</option>
                  <option value="patient">Patient</option>
                  <option value="doctor">Doctor</option>
                  <option value="admin">Admin</option>
                </select>
              </div>

              <button type="submit" class="btn btn-primary">
                Step In
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export { LogIn };
