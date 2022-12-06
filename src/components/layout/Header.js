import { Fragment } from "react";
import { NavLink } from "react-router-dom";

import classes from "./Header.module.css";
import CartButton from "../cart/CartButton";

const Header = (props) => {
  return (
    <Fragment>
      <div className={classes.header}>
        <nav>
          <NavLink className={classes.home} to="/home">
            HOME
          </NavLink>
          <NavLink className={classes.store} to="/store">
            STORE
          </NavLink>
          <NavLink className={classes.about} to="/about">
            ABOUT
          </NavLink>
          <NavLink className={classes.about} to="/contact">
            CONTACT US
          </NavLink>
          <NavLink className={classes.about} to="/">
            LOGIN
          </NavLink>
        </nav>
        <CartButton onClick={props.onShow}></CartButton>
      </div>
      <h1 className={classes["main-header"]}>The Generics</h1>
    </Fragment>
  );
};

export default Header;
