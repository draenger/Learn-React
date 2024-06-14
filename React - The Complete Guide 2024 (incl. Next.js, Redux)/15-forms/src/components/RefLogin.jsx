import { useRef } from "react";
import { useState } from "react";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const [isEmailValid, setIsEmailValid] = useState(true);

  function handleSubmit(event) {
    event.preventDefault();
    const credentials = {
      email: email.current.value,
      password: password.current.value,
    };
    console.log("User Email: ", credentials.email);
    console.log("User Password: ", credentials.password);

    const emailIsInvalid = !credentials.email.includes("@");

    if (emailIsInvalid) {
      console.log("Invalid email");
      setIsEmailValid(false);
      return;
    }

    // Send a request to the server
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email} />
          {!isEmailValid && <p className="error">Please enter a valid email</p>}
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
