import React, { useState, useEffect } from "react";
import Item from "./Item";
import laptop1 from "../../images/laptop-2.jpg";

const ItemList = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/SoleMina/karianca-store/main/src/components/DataList/products.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setProductos(data);
      });
  }, []);

  return (
    <>
      {productos.map((producto) => {
        return (
          <Item
            key={producto.id}
            name={producto.title}
            text="this is a description text"
            imagenUrl={laptop1}
            stock={producto.stock}
          />
        );
      })}
    </>
  );
};

export default ItemList;
