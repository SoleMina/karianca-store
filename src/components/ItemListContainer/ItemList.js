import React from "react";
import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <>
      {productos.map((producto) => {
        return (
          <Item
            key={producto.id}
            name={producto.title}
            description={producto.description}
            price={producto.price}
            pictureUrl={producto.pictureUrl}
            stock={producto.stock}
          />
        );
      })}
    </>
  );
};

export default ItemList;
