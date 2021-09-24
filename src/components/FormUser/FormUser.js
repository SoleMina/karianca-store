import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

//Import from bootstrap
import { Form } from "react-bootstrap";

//Import form style
import "./FormUser.css";

//Import context
import { useItemsContext } from "../../CartContext";

const FormUser = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const {
    totalPrice,
    AddProduct,
    cartItems,
    removeItem,
    totalProducts,
    order,
    setOrders,
    lastOrder
  } = useItemsContext();

  const onSubmit = (e) => {
    e.preventDefault();
    if (user.length > 3 && email.length > 5) {
      setOrders(true);
      removeItem();
      lastOrder();
      alert("LOGIN FINISHED");
      history.push("/orders");
    }
  };

  return (
    <div className="form-user">
      <div className="container-form pt-5 pb-5">
        <h2 className="pt-3 pb-3 font-weight-bold">LOGIN</h2>
        <Form
          className="pb-3"
          onSubmit={onSubmit}
          action={`/orders`}
          method="post"
        >
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="user"
              type="text"
              minLength={3}
              maxLength={20}
              placeholder="Enter Name"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              name="phone"
              type="text"
              placeholder="Enter Phone Number"
              min={7}
              max={10}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              minLength={15}
              maxLength={50}
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
              minLength={3}
              maxLength={20}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <input
            className="btn-login mb-4"
            type="submit"
            placeholder="Send"
            onClick={() =>
              AddProduct(user, phone, email, cartItems, totalPrice)
            }
          />
          <p className="pt-4">*Please complete all the blank spaces</p>
        </Form>
      </div>
    </div>
  );
};

export default FormUser;
