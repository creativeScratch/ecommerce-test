import Homefooter from "../components/layout/Homefooter";
import Form from "./Form";
import Aboutheader from "../components/layout/Aboutheader";

const Contact = (props) => {
  async function addDetailsHandler(userDetails) {
    const response = await fetch(
      "https://react-first-6bd48-default-rtdb.firebaseio.com/details.json",
      {
        method: "POST",
        body: JSON.stringify(userDetails),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  return (
    <div>
      <Aboutheader></Aboutheader>
      <div>
        <Form onAddUser={addDetailsHandler}></Form>
      </div>
      <Homefooter></Homefooter>
    </div>
  );
};

export default Contact;
