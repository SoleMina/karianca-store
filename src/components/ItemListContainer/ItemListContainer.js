import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import SpinnerContainer from "../SpinnerContainer/SpinnerContainer";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);

  const { categoryId } = useParams();
  console.log("CATEGORY ID: ", categoryId);

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
        }, 1000);
      });
  }, [categoryId]);

  return (
    <>{loading ? <SpinnerContainer /> : <ItemList productos={productos} />}</>
  );
};

export default ItemListContainer;
