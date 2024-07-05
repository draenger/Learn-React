import { useContext } from "react";
import { CartContext } from "../store/food-cart-context";
import CartItem from "./CartItem";

export default function Cart({ onClose, onCheckout }) {
  const { items, updateItemQuantity, calculateTotalAmount } =
    useContext(CartContext);

  const totalAmount = calculateTotalAmount();

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <ul>
        {items.map((item) => (
          <CartItem item={item} onUpdateItemQuantity={updateItemQuantity} />
        ))}
      </ul>
      <p className="cart-total">${totalAmount}</p>
      <div className="modal-actions">
        <button onClick={onClose} className="text-button">
          Close
        </button>
        <button onClick={onCheckout} className="button">
          Go to Checkout
        </button>
      </div>
    </div>
  );
}
