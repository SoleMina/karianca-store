import React from "react";
import { useItemsContext } from "../../CartContext";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { cartItems } = useItemsContext();
  return (
    <div className="container">
      <h1>Productos de Compra</h1>
      <div>Producto: {cartItems.length > 0 && cartItems[0].title}</div>
      {cartItems.map((item) => {
        return <CartItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Cart;
