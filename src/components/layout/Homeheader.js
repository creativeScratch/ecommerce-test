import { Fragment } from "react";
import { NavLink } from "react-router-dom";

import classes from "./Homeheader.module.css";

const Homeheader = (props) => {
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
      <div className={classes["main-header"]}>
        <div>
          <h1 className={classes.heading}>The Generics</h1>
          <span className={classes.secheading}>Get our Latest Album</span>
        </div>
        <div className={classes.icon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="75"
            height="75"
            fill="currentColor"
            class="bi bi-play-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
          </svg>
        </div>
      </div>
    </Fragment>
  );
};

export default Homeheader;
