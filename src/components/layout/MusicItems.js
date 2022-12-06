import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";

import classes from "./MusicItems.module.css";
import CartContext from "../../store/Cart-Context";

const productsArr = [
  {
    id: 1,
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: 2,
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: 3,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: 4,
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];
const MusicItems = (props) => {
  const cartCtx = useContext(CartContext);

  const addHandler = (item) => {
    cartCtx.addItems({ ...item, quantity: 1 });
  };

  const productsItems = productsArr.map((item) => {
    return (
      <div key={item.id}>
        <span className={classes.title}>{item.title}</span>{" "}
        <Link to={`/product/${item.id}`}>
          <img className={classes.items} src={item.imageUrl} alt=""></img>
        </Link>{" "}
        <span className={classes.price}>${item.price}</span>{" "}
        <button
          className={classes.button}
          onClick={addHandler.bind(null, item)}
          to="/cart"
        >
          Add To Cart
        </button>
      </div>
    );
  });
  return (
    <Fragment>
      <h1 className={classes.main}>MUSIC</h1>
      <div className={classes.display}>{productsItems}</div>
    </Fragment>
  );
};

export default MusicItems;
