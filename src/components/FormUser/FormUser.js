import React, { useState } from "react";
import { useHistory } from "react-router-dom";

//Import from bootstrap
import { Form, Button } from "react-bootstrap";

//Import form style
import "./FormUser.css";

//Import context
import { useItemsContext } from "../../CartContext";

const FormUser = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  console.log("USUARIO", user);

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      user === "karina" &&
      email === "karina@gmail.com" &&
      password === "1234"
    ) {
      alert("LOGIN FINISHED");
      history.push("/cart");
    }
  };
  return (
    <div className="form-user">
      <div className="container-form pt-5 pb-5">
        <h2 className="pt-3 pb-5 font-weight-bold">LOGIN</h2>
        <Form
          className="pb-5"
          onSubmit={onSubmit}
          action={`/cart`}
          method="post"
        >
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="user"
              type="text"
              placeholder="Enter Name"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <input className="btn-login mb-4" type="submit" placeholder="Send" />
          <p className="pb-5 pt-4">*Please complete all the blank spaces</p>
        </Form>
      </div>
    </div>
  );
};

export default FormUser;
