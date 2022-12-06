import React from "react";
import { useState } from "react";

const AuthContext = React.createContext({
  //token: "",
  email: "",
  isLoggedIn: false,
  login: (email) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  //const initialToken = localStorage.getItem("token");
  const initialEmail = localStorage.getItem("email");

  //const [isToken, setToken] = useState(initialToken);
  const [isEmail, setEmail] = useState(initialEmail);

  const userIsLoggedIn = !!isEmail;
  //const userIsLogged = !!isEmail;

  const loginHandler = (isEmail) => {
    //setToken(isToken);
    setEmail(isEmail);
    //localStorage.setItem("token", isToken);
    localStorage.setItem("email", isEmail);
  };

  const logoutHandler = () => {
    //setToken(null);
    setEmail(null);
    //localStorage.removeItem("token");
    localStorage.removeItem("email");
  };

  const context = {
    //token: isToken,
    email: isEmail,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
