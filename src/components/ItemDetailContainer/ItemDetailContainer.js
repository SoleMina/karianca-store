import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

//Import firebase
import { collection, query, getDocs, setDoc, doc } from "firebase/firestore";

//Import db
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

  //
  const AddProduct = async () => {
    const comprasRef = collection(db, "comprar");

    const object = {
      title: "Laptop Gamer II",
      description: "This is a powerful machine with high quality",
      price: 2500,
      stock: 20,
      category: "laptop"
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
