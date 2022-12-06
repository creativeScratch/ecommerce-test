import { useState, useContext } from "react";
import { Redirect, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Music from "./components/layout/Music";
import Footer from "./components/layout/Footer";
import Cart from "./components/cart/Cart";
import CartProvider from "./store/CartProvider";
import Home from "./pages/Home";
import About from "./pages/About";
import Cartstorebutton from "./components/layout/Cartstorebutton";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Login from "./pages/Login";
import AuthContext from "./store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);

  const [cartIsShown, setCartIsShown] = useState(false);

  const cartShownHandler = () => {
    setCartIsShown(true);
  };

  const cartHideHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={cartHideHandler}></Cart>}
      <main>
        <Route path="/" exact>
          <Login></Login>
        </Route>
        <Route path="/home">
          {authCtx.isLoggedIn && <Home></Home>}
          {!authCtx.isLoggedIn && <Redirect to="/"></Redirect>}
        </Route>
        {authCtx.isLoggedIn && (
          <Route path="/store">
            <Header onShow={cartShownHandler}></Header>
            <Music></Music>
            <Cartstorebutton onClick={cartShownHandler}></Cartstorebutton>
            <Footer></Footer>
          </Route>
        )}
        <Route path="/about">
          {authCtx.isLoggedIn && <About></About>}
          {!authCtx.isLoggedIn && <Redirect to="/"></Redirect>}
        </Route>
        <Route path="/contact">
          {authCtx.isLoggedIn && <Contact></Contact>}
          {!authCtx.isLoggedIn && <Redirect to="/"></Redirect>}
        </Route>
        <Route path="/product/:productId">
          {authCtx.isLoggedIn && <Products></Products>}
          {!authCtx.isLoggedIn && <Redirect to="/"></Redirect>}
        </Route>
      </main>
    </CartProvider>
  );
}

export default App;
