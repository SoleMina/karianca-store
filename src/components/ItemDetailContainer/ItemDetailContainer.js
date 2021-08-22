import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(0);

  useEffect(() => {
    axios(
      "https://raw.githubusercontent.com/SoleMina/karianca-store/main/src/components/DataList/products.json"
    ).then((res) => setItem(res));
  }, []);

  return (
    <div>
      <h1>Item Detail Container</h1>
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
