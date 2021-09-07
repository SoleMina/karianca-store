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
          <div className="col-md-8 justify-content-center">
            <img src={item.pictureUrl} alt="Producto" width="200" />
            <h3>{item.title}</h3>
            <button onClick={() => removeItem(item.id)}>Eliminar</button>
          </div>
          <div className="col-md-4 d-flex justify-content-center">
            <ItemCount stock={item.stock} initial={1} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
