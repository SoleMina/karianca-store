import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import SpinnerContainer from "../SpinnerContainer/SpinnerContainer";

//Import firebase
import { collection, query, getDocs } from "firebase/firestore";

//Import db
import { db } from "../../firebase";

//Import context
import { useItemsContext } from "../../CartContext";

const ItemDetailContainer = ({ match }) => {
  let charID = match.params.id;
  const { item, setItem, order, setOrders } = useItemsContext();

  //Traernos los productos
  const getProducts = async () => {
    const docs = [];
    const q = query(collection(db, "products"));

    //, where("capital", "==", true));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    setItem(docs.find((producto) => producto.id === charID));
    console.log("ESTE ES EL ITEM", item);
  };

  useEffect(() => {
    getProducts();
    setOrders(false);
  }, [charID]);

  return <>{item.id ? <ItemDetail item={item} /> : <SpinnerContainer />}</>;
};

export default ItemDetailContainer;
