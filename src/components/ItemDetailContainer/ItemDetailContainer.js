import React, { useState, useEffect } from "react";
//import axios from "axios";
import ItemDetail from "./ItemDetail";

//Import firebase

import { collection, query, getDocs } from "firebase/firestore";

//Import firebase
import { db } from "../../firebase";

const ItemDetailContainer = ({ match }) => {
  let charID = match.params.id;
  const [item, setItem] = useState([]);

  //Traernos los productos
  const getProducts = async () => {
    const docs = [];
    const q = query(collection(db, "products"));
    //, where("capital", "==", true));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      //console.log(doc.id, "=>", doc.data());
      docs.push({ ...doc.data(), id: doc.id });
    });
    setItem(docs.find((producto) => producto.id === charID));
    console.log("ESTE ES EL ITEM", item);
    console.log("ESTE ES DOCS", docs);
    console.log("CHARID", charID);
  };

  useEffect(() => {
    getProducts();
  }, [charID]);

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
