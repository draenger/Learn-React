import image from "../assets/logo.jpg";
import { useContext } from "react";
import { CartContext } from "../store/food-cart-context";

export default function Header({ onShowCart }) {
  const { items } = useContext(CartContext);
  let cartItemsString = items.length > 0 ? `(${items.length})` : "";

  return (
    <header id="main-header">
      <div id="title">
        <img src={image} alt="ReactFood" />
        <h1>ReactFood</h1>
      </div>
      <button className="text-button">Cart{cartItemsString}</button>
    </header>
  );
}
