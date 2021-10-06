import React from "react";
import { useItemsContext } from "../../CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
//Import fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Import icon
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

//Style
import "./Cart.css";

const Cart = () => {
  const { cartItems, totalPrice } = useItemsContext();
  return (
    <div className={`h-100 ${cartItems.length > 0 ? "bg-gray" : ""}`}>
      <h1
        className={`text-center pt-4 mb-4 ${
          cartItems.length > 0 ? "text-white" : "text-black"
        }`}
      >
        CART
      </h1>
      {cartItems.length > 0 && (
        <div
          className="cart-item text-center"
          style={{ backgroundColor: "#181d38", color: "white" }}
        >
          <div className="row">
            <div className="col-md-2 justify-content-center">
              <h5>Product</h5>
            </div>
            <div className="col-md-2">
              <h5>Product Name</h5>
            </div>
            <div className="col-md-2">
              <h5>Cantidad</h5>
            </div>
            <div className="col-md-2">
              <h5>Price x Unit</h5>
            </div>
            <div className="col-md-2">
              <h5>Total Price</h5>
            </div>
            <div className="col-md-2">
              <h5>Delete Product</h5>
            </div>
          </div>
        </div>
      )}
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })}
          <div className="cart-item">
            <div className="row">
              <div className="col-md-12 text-center">
                Monto Total:
                <p>S/. {totalPrice}</p>
                <Link to={`/FormUser`} className="btn btn-primary">
                  Finalize your purchase
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="hv-85 text-center">
            <h4 className="mt-5 mb-5">
              Oops you don't have products added to the cart
            </h4>
            <FontAwesomeIcon
              icon={faShoppingCart}
              style={{ fontSize: "300px", marginBottom: "5%" }}
            />
            <br />
            <Link to={`/`} className="btn-cart-404">
              Go back to Homepage
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
