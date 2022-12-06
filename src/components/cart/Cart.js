import { useContext, useState, useEffect, useCallback } from "react";
import axios from "axios";

import Modal from "./Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/Cart-Context";
import AuthContext from "../../store/auth-context";

/*const cartElements=[
    {
        title: 'Colors',   
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        quantity: 2,
        },
        {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        quantity: 3,
        },
        {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        quantity: 1,
}] */
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);

  const [res, setResponse] = useState([]);

  // const [purchaseChange, setPurchase] = useState(false);

  let totalAmount;
  if (cartCtx.items) {
    totalAmount = cartCtx.items.reduce((currAmount, item) => {
      return currAmount + item.price * item.quantity;
    }, 0);
  }

  const purchaseChangeHandler = () => {
    // setPurchase(true);
    if (cartCtx.items.length > 0) {
      alert("Thanks for purchase");
    } else {
      alert("Add items to cart to purchase");
    }
  };

  const removeHandler = (id) => {
    cartCtx.removeItems(id);
  };

  const user = authCtx.email;
  const userEmail = user.replace("@", "");
  const newUser = userEmail.replace(".", "");

  const getItems = useCallback(() => {
    axios
      .get(
        `https://crudcrud.com/api/1585dc3c5b5c4c5cb0f91cd9bd7136ef/login${newUser}`
      )
      .then((response) => {
        setResponse(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [newUser]);

  useEffect(() => {
    getItems();
  }, [getItems]);

  const cartItems = res.map((items) => {
    return (
      <div key={items.id}>
        {" "}
        <div className={classes.main}>
          <img className={classes.image} src={items.imageUrl} alt=""></img>{" "}
          <span className={classes.title}>{items.title}</span>{" "}
        </div>{" "}
        <span className={classes.price}>PRICE - {items.price}</span>{" "}
        <span className={classes.quantity}>{items.quantity}</span>
        <button
          className={classes.rembutton}
          onClick={removeHandler.bind(null, items.id)}
        >
          REMOVE
        </button>
      </div>
    );
  });

  return (
    <Modal>
      <div>
        <h2 className={classes.heading}>CART</h2>
        <button className={classes.delbutton} onClick={props.onClose}>
          X
        </button>
      </div>
      {cartItems}
      <div className={classes.total}>
        <span>Total - </span>
        <span>${totalAmount}</span>
      </div>
      <button className={classes.purbutton} onClick={purchaseChangeHandler}>
        PURCHASE
      </button>
    </Modal>
  );
};

export default Cart;
