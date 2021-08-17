import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import SpinnerContainer from "../SpinnerContainer/SpinnerContainer";

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/SoleMina/karianca-store/main/src/components/DataList/products.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setProductos(data);
        //Add setTimeout because fetch loading is too fast
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  }, []);

  return (
    <>{loading ? <SpinnerContainer /> : <ItemList productos={productos} />}</>
  );
};

export default ItemListContainer;
