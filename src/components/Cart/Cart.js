import React from "react";
import { useItemsContext } from "../../CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cartItems, totalPrice } = useItemsContext();
  return (
    <div className="bg-gray vh-85">
      <h1 className="text-center pt-4">Productos de Compra</h1>
      {/*<div>Producto: {cartItems.length > 0 && cartItems[0].title}</div>*/}
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })}
          <div className="cart-item text-right">Total: {totalPrice}</div>
        </div>
      ) : (
        <div className="container">
          <div className="hv-85">
            <h4 className="mt-5">No hay productos en el carrito</h4>
            <Link to={`/`}>Go back to Homepage</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
