import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import SpinnerContainer from "../SpinnerContainer/SpinnerContainer";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/SoleMina/karianca-store/main/src/components/DataList/products.json"
    )
      .then((response) => response.json())
      .then((data) => {
        categoryId
          ? setProductos(
              data.filter((producto) => producto.category === `${categoryId}`)
            )
          : setProductos(data);
        //Adding setTimeout because fetch loading is too fast
        setTimeout(() => {
          setLoading(false);
        }, 500);
      });
  }, [categoryId]);

  return (
    <>
      {loading ? (
        <SpinnerContainer />
      ) : (
        <div className="row">
          <ItemList productos={productos} />
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
