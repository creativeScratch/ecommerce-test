import classes from "./Footer.module.css";

const Cartstorebutton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      See the cart
    </button>
  );
};

export default Cartstorebutton;
