import React, { useState, useEffect } from "react";
import Item from "./Item";
import Spinner from "react-bootstrap/Spinner";

const ItemList = () => {
  const [loading, setloading] = useState(true);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/SoleMina/karianca-store/main/src/components/DataList/products.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setProductos(data);
        setTimeout(() => {
          setloading(false);
        }, 1000);
      });
  }, []);

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-content-center align-items-center hv-88">
          <Spinner animation="border" role="status"></Spinner>
          <span className="mr-auto m-2" size="lg">
            Loading products...
          </span>
        </div>
      ) : (
        productos.map((producto) => {
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
        })
      )}
    </>
  );
};

export default ItemList;
