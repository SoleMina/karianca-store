import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

//Import firebase
import {
  collection,
  query,
  getDocs,
  setDoc,
  doc,
  Timestamp
} from "firebase/firestore";

//Import db
import { db } from "../../firebase";

//Import context
import { useItemsContext } from "../../CartContext";

const ItemDetailContainer = ({ match }) => {
  let charID = match.params.id;
  const [item, setItem] = useState([]);
  const { totalPrice } = useItemsContext();

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

  //
  const AddProduct = async (buyerName, buyerPhone, buyerEmail) => {
    const comprasRef = collection(db, "comprar");
    console.log("THISSSS", item);
    const object = {
      buyer: {
        name: buyerName,
        phone: buyerPhone,
        email: buyerEmail
      },
      item: item,
      date: Timestamp.fromDate(new Date()),
      total: totalPrice
    };

    await setDoc(doc(comprasRef), object);
    console.log("Producto agregado!!!!");
  };

  useEffect(() => {
    getProducts();
  }, [charID]);

  return <ItemDetail item={item} AddProduct={AddProduct} />;
};

export default ItemDetailContainer;
