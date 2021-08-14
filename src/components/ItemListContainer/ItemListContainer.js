import React, { useState, useEffect } from "react";
import CardItem from "./CardItem";
import laptop1 from "../../images/laptop-2.jpg";

const ItemListContainer = () => {
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
          <CardItem
            key={producto.id}
            name={producto.title}
            text="this is a description text"
            imagenUrl={laptop1}
            stock={10}
          />
        );
      })}
    </>
  );
};

export default ItemListContainer;
