export default function CartItem({ item, onUpdateItemQuantity }) {
  return (
    <li className="cart-item" key={item.id}>
      <p>
        {item.name} - {item.amount} x ${item.price}
      </p>
      <div className="cart-item-actions">
        <button
          onClick={() => onUpdateItemQuantity(item.id, -1)}
          className="button"
        >
          -
        </button>
        <span>{item.amount}</span>
        <button
          onClick={() => onUpdateItemQuantity(item.id, 1)}
          className="button"
        >
          +
        </button>
      </div>
    </li>
  );
}
