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
            <Link
              to={`/item/${producto.id}`}
              style={{ textDecoration: "40px", color: "#212529" }}
            >
              <Item
                name={producto.title}
                description={producto.description}
                price={producto.price}
                img={producto.img}
                stock={producto.stock}
                category={producto.category}
              />
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default ItemList;
