import { useRef } from "react";

import classes from "./Contact.module.css";

const Form = (props) => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const phonenumberRef = useRef("");

  function submitHandler(event) {
    event.preventDefault();

    const details = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phonenumber: phonenumberRef.current.value,
    };

    props.onAddUser(details);
  }
  return (
    <form onSubmit={submitHandler}>
      <div className={classes.form}>
        <label htmlFor="Name">Name</label>
        <input type="text" id="name" ref={nameRef} required />
      </div>
      <div className={classes.form}>
        <label htmlFor="Email id">Email id</label>
        <input type="text" id="email" ref={emailRef} required />
      </div>
      <div className={classes.form}>
        <label htmlFor="Phone number">Phone number</label>
        <input type="text" id="phonenumber" ref={phonenumberRef} required />
      </div>
      <button className={classes.button}>Submit</button>
    </form>
  );
};

export default Form;
