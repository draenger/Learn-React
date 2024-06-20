import AuthForm from "../components/AuthForm";
import { json, redirect } from "react-router-dom";

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {
  const mode = new URL(request.url).searchParams.get("mode") || "login";

  if (mode !== "login" && mode !== "signup") {
    throw json({ message: "Invalid mode" }, { status: 422 });
  }

  const data = await request.formData();

  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  try {
    const response = await fetch(`http://localhost:8080/${mode}`, {
      method: "POST",
      body: JSON.stringify(authData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 422 || response.status === 401) {
      return response;
    }

    if (!response.ok) {
      throw json({ message: "Authentication failed" }, { status: 500 });
    }

    const { token } = await response.json();
    localStorage.setItem("token", token);

    return redirect("/");
  } catch (error) {
    console.error("Error during authentication:", error);
    throw json({ message: "Authentication failed" }, { status: 500 });
  }
}
