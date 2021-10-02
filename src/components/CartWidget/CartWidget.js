import React from "react";

//Import context
import { useItemsContext } from "../../CartContext";

//Font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Importar estilos
import "./CartWidget.css";

const CartWidget = (props) => {
  const { cartItems, totalProducts, order } = useItemsContext();
  return (
    <div>
      <FontAwesomeIcon icon={props.icon} data-count="0" />
      <span className="cart-counter">
        {cartItems.length > 0 && order === false ? totalProducts : 0}
      </span>
    </div>
  );
};

export default CartWidget;
