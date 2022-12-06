import { useReducer, useContext, useEffect, useState } from "react";
import axios from "axios";

import CartContext from "./Cart-Context";
import AuthContext from "./auth-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "INITIAL_ITEMS") {
    return { items: action.items, totalAmount: 0 };
  }
  if (action.type === "ADD") {
    const updatedTotalAmount = state.totalAmount + action.item.price;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + action.item.quantity,
      };

      const { _id, ...newObj } = updatedItem;

      axios
        .put(
          `https://crudcrud.com/api/1585dc3c5b5c4c5cb0f91cd9bd7136ef/login${action.newUser}/${_id}`,newObj
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });

      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);

      axios
        .post(
          `https://crudcrud.com/api/1585dc3c5b5c4c5cb0f91cd9bd7136ef/login${action.newUser}`,
          action.item
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;
    let updatedItems;
    if (existingCartItem.quantity === 1) {
      //updatedItems = state.items.filter((item) => item.id !== action.id);
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      const { _id } = updatedItem;
      axios
        .delete(
          `https://crudcrud.com/api/1585dc3c5b5c4c5cb0f91cd9bd7136ef/login${action.newUser}/${_id}`
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });

      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };

      const { _id, ...newRes } = updatedItem;

      axios
        .put(
          `https://crudcrud.com/api/1585dc3c5b5c4c5cb0f91cd9bd7136ef/login${action.newUser}/${_id}`,
          newRes
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });

      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const [newUser, setnewUser] = useState();

  const authCtx = useContext(AuthContext);
  const email = authCtx.email;

  useEffect(() => {
    if (email) {
      const userEmail = email.replace("@", "");
      setnewUser(userEmail.replace(".", ""));
    }
  }, [email]);

  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item, newUser });
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id, newUser });
  };

  const initialItemHandler = (items) => {
    dispatchCartAction({ type: "INITIAL_ITEMS", items: items });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItems: addItemHandler,
    removeItems: removeItemHandler,
    initialItems: initialItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
