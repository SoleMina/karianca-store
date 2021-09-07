import React from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import { useItemsContext } from "../../CartContext";
import "./CartItem.css";

const CartItem = ({ item }) => {
  const { removeItem } = useItemsContext();

  return (
    <>
      <div className="cart-item mb-5 mt-5">
        <div className="row">
          <div className="col-md-4 justify-content-center">
            <img src={item.pictureUrl} alt="Producto" width="100" />
            <h3>{item.title}</h3>

            <button onClick={() => removeItem(item.id)}>Eliminar</button>
          </div>
          <div className="col-md-4 text-center">
            <p>Cantidad:</p>
            <p>{item.quantity}</p>
          </div>
          <div className="col-md-4">
            <p>Price x Unit:</p>
            <p> {item.price}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
