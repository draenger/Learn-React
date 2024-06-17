import { useContext } from "react";
import { CartContext } from "../store/food-cart-context";

export default function Product({ id, image, name, price, description }) {
  const { items, addItem, updateItemQuantity } = useContext(CartContext);

  function handleAddItemToCart() {
    const existingItemIndex = items.findIndex((item) => item.id === id);
    if (existingItemIndex !== -1) {
      updateItemQuantity(id, 1); // increase amount by 1
      return;
    }

    addItem({
      id,
      name,
      price,
      amount: 1,
    });
  }

  return (
    <article key={id} className="meal-item">
      <img src={`http://localhost:3000/${image}`} alt={name} />
      <h3>{name}</h3>
      <p className="meal-item-price">{price}</p>
      <p className="meal-item-description">{description}</p>
      <div className="meal-item-actions">
        <button className="button" onClick={handleAddItemToCart}>
          Add to Cart
        </button>
      </div>
    </article>
  );
}
