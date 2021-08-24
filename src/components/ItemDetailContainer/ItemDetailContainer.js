import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ({ match }) => {
  let charID = match.params.id;
  const [item, setItem] = useState([]);

  useEffect(() => {
    axios(
      "https://raw.githubusercontent.com/SoleMina/karianca-store/main/src/components/DataList/products.json"
    ).then((res) => setItem(res.data[charID]));
  }, [charID]);

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
