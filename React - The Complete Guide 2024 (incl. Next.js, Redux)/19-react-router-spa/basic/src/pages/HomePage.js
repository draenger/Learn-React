import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("products");
  }

  return (
    <>
      <h1>The Home Page</h1>
      <button onClick={handleClick}>Go to Products</button>
    </>
  );
}

export default HomePage;
