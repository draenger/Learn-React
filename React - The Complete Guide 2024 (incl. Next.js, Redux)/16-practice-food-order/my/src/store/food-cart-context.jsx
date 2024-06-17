import { createContext, useReducer } from "react";

export const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  updateItemQuantity: (id, amount) => {},
});

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      return {
        items: state.items.concat(action.item),
      };
    }
    case "UPDATE_ITEM_QUANITY": {
      const updatedItems = state.items.map((item) => {
        if (item.id === action.id) {
          const newAmount = item.amount + action.amount;
          if (newAmount <= 0) {
            return null; // Remove the item from the array
          }
          return {
            ...item,
            amount: newAmount,
          };
        }
        return item;
      });

      return {
        items: updatedItems.filter((item) => item !== null),
      };
    }
    default:
      return state;
  }
}

export default function CartContextProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
  });

  function addItemHandler(item) {
    dispatchCartAction({ type: "ADD_ITEM", item });
  }

  function updateItemQuantityHandler(id, amount) {
    dispatchCartAction({ type: "UPDATE_ITEM_QUANITY", id, amount });
  }

  function calculateTotalAmount() {
    return cartState.items
      .reduce((acc, item) => acc + item.price * item.amount, 0)
      .toFixed(2);
  }

  const cartContext = {
    items: cartState.items,
    calculateTotalAmount: calculateTotalAmount,
    addItem: addItemHandler,
    updateItemQuantity: updateItemQuantityHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}
