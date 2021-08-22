import React from "react";
import Item from "./Item";
import { Link } from "react-router-dom";

const ItemList = ({ productos }) => {
  return (
    <>
      {productos.map((producto) => {
        return (
          <div
            className="col-md-4 d-flex justify-content-center mb-4"
            key={producto.id}
          >
            <Link to={`/detail/${producto.id}`}>
              <Item
                name={producto.title}
                description={producto.description}
                price={producto.price}
                pictureUrl={producto.pictureUrl}
                stock={producto.stock}
              />
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default ItemList;
