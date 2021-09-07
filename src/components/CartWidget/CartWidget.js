import React from "react";
import "./CartWidget.css";

//Import context
import { useItemsContext } from "../../CartContext";

//Font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartWidget = (props) => {
  const { cartItems, totalProducts } = useItemsContext();
  return (
    <div>
      <FontAwesomeIcon icon={props.icon} data-count="0" />
      <span className="cart-counter">
        {cartItems.length > 0 ? totalProducts : 0}
      </span>
    </div>
  );
};

export default CartWidget;
