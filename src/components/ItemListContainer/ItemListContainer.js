import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import SpinnerContainer from "../SpinnerContainer/SpinnerContainer";
import { useParams } from "react-router-dom";
import bannerHome from "../../online-shop.png";

//Import firebase
import { collection, query, getDocs } from "firebase/firestore";

//Import firebase
import { db } from "../../firebase";

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);

  const { categoryId } = useParams();

  //Get all the products
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
        <SpinnerContainer text="Loading products..." />
      ) : (
        <div className="row" style={{ minHeight: "100vh" }}>
          {categoryId ? (
            <div>
              <h1
                className="text-center pt-4 pb-4"
                style={{ textTransform: "uppercase" }}
              >
                {categoryId}
              </h1>
            </div>
          ) : (
            <img src={bannerHome} height="450" style={{ objectFit: "cover" }} />
          )}
          <ItemList productos={productos} />
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
