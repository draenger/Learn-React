import image from "../assets/logo.jpg";
import { useContext, useState } from "react";
import { CartContext } from "../store/food-cart-context";
import Modal from "./Modal";
import Cart from "./Cart";
import Checkout from "./Checkout";

const CART = "cart";
const CHECKOUT = "checkout";

export default function Header() {
  const { items } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const [opration, setOperation] = useState(CART);
  let cartItemsString = items.length > 0 ? `(${items.length})` : "";

  function handleShowCart() {
    setShowModal(true);
    setOperation(CART);
  }

  function handleHideCart() {
    setShowModal(false);
    setOperation(CART);
  }

  function handleCheckout() {
    setOperation(CHECKOUT);
  }

  function handleSubmitOrder() {
    setShowModal(false);
    setOperation(CART);
  }

  return (
    <header id="main-header">
      <Modal open={showModal}>
        {opration === CHECKOUT ? (
          <Checkout
            onClose={handleHideCart}
            onSubmitOrder={handleSubmitOrder}
          />
        ) : (
          <Cart onClose={handleHideCart} onCheckout={handleCheckout} />
        )}
      </Modal>
      <div id="title">
        <img src={image} alt="ReactFood" />
        <h1>ReactFood</h1>
      </div>
      <button onClick={handleShowCart} className="text-button">
        Cart{cartItemsString}
      </button>
    </header>
  );
}
