import React from "react";
import { useItemsContext } from "../../CartContext";

const Cart = () => {
  const { cartItems } = useItemsContext();
  return (
    <div className="container">
      <h1>Cart</h1>
      <div>Producto: {cartItems[0].title}</div>
    </div>
  );
};

export default Cart;
