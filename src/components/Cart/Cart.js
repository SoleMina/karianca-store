import React from "react";
import { useItemsContext } from "../../CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

//Estilo
import "./Cart.css";

const Cart = () => {
  const { cartItems, totalPrice, totalProducts } = useItemsContext();
  return (
    <div className="bg-gray vh-100">
      <h1 className="text-center pt-4 mb-4">Productos de Compra</h1>
      {/*<div>Producto: {cartItems.length > 0 && cartItems[0].title}</div>*/}
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
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="hv-85">
            <h4 className="mt-5">No hay productos en el carrito</h4>
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
