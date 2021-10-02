import React, { useState, useEffect } from "react";
import imgOrder from "../../girl-package.jpg";
import { Link } from "react-router-dom";
import "./Orders.css";

//Import context
import { useItemsContext } from "../../CartContext";

const Orders = () => {
  const [ticket, setTicket] = useState(true);
  const {
    totalPrice,
    cartItems,
    setCartItems,
    orderId,
    item
  } = useItemsContext();

  const cleanHistory = () => {
    setCartItems([]);
  };
  useEffect(() => {
    setTimeout(() => {
      setCartItems([]);
    }, 10000);
  }, []);

  return cartItems.length > 0 ? (
    <div className="container mt-5 text-center" style={{ minHeight: "82vh" }}>
      <div className="cart-item">
        <h2 className="text-center pb-4">Purchase ticket </h2>
        <div className="row">
          <div className="col-md-4 text-center">
            <p className="w-bold">Products:</p>
          </div>
          <div className="col-md-4">
            <p className="w-bold">Ticket Number:</p>
          </div>
          <div className="col-md-4">
            <p className="w-bold">Total Price:</p>
          </div>
        </div>
        <div className="row" key={item.id}>
          <div className="col-md-4 text-center">
            {ticket
              ? cartItems.map((item) => {
                  return <span key={item.title}>{"-" + item.title + " "}</span>;
                })
              : ""}
          </div>
          <div className="col-md-4">
            {cartItems.length > 0 ? <p> {orderId}</p> : ""}
          </div>
          <div className="col-md-4 text-center">
            {cartItems.length > 0 ? totalPrice : ""}
          </div>
          <div className="col-md-12 text-center">
            <Link to="/">
              <button
                className="btn btn-primary mt-5"
                onClick={() => cleanHistory()}
              >
                Buy something else
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="container mt-5 text-center" style={{ minHeight: "82vh" }}>
      <div className="row">
        <div className="col-md-12">
          <div className="cart-item pb-5">
            <h2 className="pb-4 pt-2">
              <strong>Thank you for your purchase</strong>
            </h2>
            <img className="img-orders" src={imgOrder} width="280" />
          </div>
          <Link to="/">
            <button className="btn btn-primary">Buy something else</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Orders;
