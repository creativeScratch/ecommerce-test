import { Fragment } from "react";
import { NavLink } from "react-router-dom";

import classes from "./Header.module.css";

const Aboutheader = (props) => {
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
        </nav>
      </div>
      <h1 className={classes["main-header"]}>The Generics</h1>
    </Fragment>
  );
};

export default Aboutheader;
