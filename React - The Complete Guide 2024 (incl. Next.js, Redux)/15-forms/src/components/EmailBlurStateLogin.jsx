import { useState } from "react";

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log("User Email: ", credentials.email);
    console.log("User Password: ", credentials.password);
  }

  function handleInputChange(identifier, value) {
    setCredentials((prevValues) => {
      return {
        ...prevValues,
        [identifier]: value,
      };
    });

    setDidEdit((prevValues) => {
      return {
        ...prevValues,
        [identifier]: true,
      };
    }
  }

  function handleInputBlur(identifier) {
    setDidEdit((prevValues) => {
      return {
        ...prevValues,
        [identifier]: true,
      };
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={(event) => handleInputBlur("email")}
            onChange={(event) => handleInputChange("email", event.target.value)}
            value={credentials.email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onBlur={(event) => handleInputBlur("password")}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
            value={credentials.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
