import { createContext, useReducer } from "react";

export const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  updatedItemQuantity: (id, amount) => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const updatedItems = state.items.concat(action.item);

    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const itemIndex = state.items.findIndex((item) => item.id === action.id);
    const item = state.items[itemIndex];
    const updatedTotalAmount = state.totalAmount - item.price;

    let updatedItems;
    if (item.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...item, amount: item.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[itemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "UPDATE_ITEM") {
    const itemIndex = state.items.findIndex((item) => item.id === action.id);
    const item = state.items[itemIndex];
    const updatedTotalAmount = state.totalAmount + item.price * action.amount;

    const updatedItem = { ...item, amount: item.amount + action.amount };
    const updatedItems = [...state.items];
    updatedItems[itemIndex] = updatedItem;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return state;
}

export default function CartContextProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
  });

  function addItemHandler(item) {
    dispatchCartAction({ type: "ADD_ITEM", item });
  }

  function removeItemHandler(id) {
    dispatchCartAction({ type: "REMOVE_ITEM", id });
  }

  function updateItemQuantityHandler(id, amount) {
    dispatchCartAction({ type: "UPDATE_ITEM", id, amount });
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    updateItemQuantity: updateItemQuantityHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}
