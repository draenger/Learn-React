import { useState } from "react";

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log("User Email: ", credentials.email);
    console.log("User Password: ", credentials.password);
  }

  function handleEmailChange(event) {
    setCredentials((prevValues) => {
      return {
        ...prevValues,
        email: event.target.value,
      };
    });
  }

  function handlePasswordChange(event) {
    setCredentials((prevValues) => {
      return {
        ...prevValues,
        password: event.target.value,
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
            onChange={handleEmailChange}
            value={credentials.email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={handlePasswordChange}
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
