import React from "react";

//Import context
import { useItemsContext } from "../../CartContext";

const Orders = () => {
  const { item, totalPrice, cartItems } = useItemsContext();
  return (
    <div className="container mt-5 text-center" style={{ minHeight: "82vh" }}>
      <div className="cart-item">
        <h2 className="text-center pb-4">Purchase ticket </h2>
        {cartItems.map((item) => {
          return (
            <div className="row" key={item.id}>
              <div className="col-md-2 justify-content-center">
                <img src={item.img} alt="Producto" width="100" />
              </div>
              <div className="col-md-5 text-center">
                <p>Product Name:</p>
                <h5>{item.title}</h5>
              </div>
              <div className="col-md-5">
                <p>Ticket Number:</p>
                <p> {item.id}</p>
              </div>
            </div>
          );
        })}
        <p>Total Price:</p>
        <p> S/. {totalPrice}</p>
      </div>
    </div>
  );
};

export default Orders;
