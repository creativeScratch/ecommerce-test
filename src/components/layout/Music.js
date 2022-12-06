import { useCallback, useContext, useEffect } from "react";

import MusicItems from "./MusicItems";
import CartContext from "../../store/Cart-Context";
import axios from "axios";
import AuthContext from "../../store/auth-context";

const Music = (props) => {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);

  const user = authCtx.email;
  const userEmail = user.replace("@", "");
  const newUser = userEmail.replace(".", "");

  const getItems = useCallback(() => {
    axios
      .get(
        `https://crudcrud.com/api/1585dc3c5b5c4c5cb0f91cd9bd7136ef/login${newUser}`
      )
      .then((response) => {
        if (response.data.length > 0) {
          cartCtx.initialItems(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [newUser]);

  useEffect(() => {
    getItems();
  }, [getItems]);

  const addCartHandler = (quantity) => {
    cartCtx.addItems({
      key: props.id,
      id: props.id,
      title: props.title,
      imageUrl: props.imageUrl,
      price: props.price,
      quantity: quantity,
    });
  };

  return <MusicItems onAddCart={addCartHandler}></MusicItems>;
};

export default Music;
