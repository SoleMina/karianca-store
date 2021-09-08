import React from "react";

//Import context
import { useItemsContext } from "../../CartContext";

//Import estilos
import "./CartItem.css";

const CartItem = ({ item }) => {
  const { removeItem } = useItemsContext();

  return (
    <>
      <div className="cart-item">
        <div className="row">
          <div className="col-md-2 justify-content-center">
            <img src={item.pictureUrl} alt="Producto" width="100" />
            <button onClick={() => removeItem(item.id)}>Eliminar</button>
          </div>
          <div className="col-md-2 text-center">
            <p>Product Name:</p>
            <h5>{item.title}</h5>
          </div>
          <div className="col-md-2">
            <p>Cantidad:</p>
            <p>{item.quantity}</p>
          </div>
          <div className="col-md-3">
            <p>Price x Unit:</p>
            <p> S/. {item.price}</p>
          </div>
          <div className="col-md-3">
            <p>Total Price:</p>
            <p> S/. {item.price * item.quantity}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
