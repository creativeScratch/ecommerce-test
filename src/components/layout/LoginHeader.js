import { useContext } from "react";
import { NavLink } from "react-router-dom";

import classes from "./Header.module.css";
import AuthContext from "../../store/auth-context";

const LoginHeader = () => {
  const authCtx = useContext(AuthContext);

  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <div>
      <div>
        <h1 className={classes.welcome}>WELCOME</h1>
        <button className={classes.logout} onClick={logoutHandler}>
          LOGOUT
        </button>
        {authCtx.isLoggedIn && (
          <NavLink to="/store" className={classes["store-login"]}>
            STORE
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default LoginHeader;
