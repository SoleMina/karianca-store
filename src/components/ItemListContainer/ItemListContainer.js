import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import SpinnerContainer from "../SpinnerContainer/SpinnerContainer";
import { useParams } from "react-router-dom";

//Import firebase
import { collection, query, getDocs } from "firebase/firestore";

//Import firebase
import { db } from "../../firebase";

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);

  const { categoryId } = useParams();

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

    const resolveProducts = new Promise((resolve, reject) => {
      resolve(
        categoryId
          ? docs.filter((producto) => producto.category === `${categoryId}`)
          : docs
      );
    });

    resolveProducts
      .then((response) => setProductos(response))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getProducts();
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
