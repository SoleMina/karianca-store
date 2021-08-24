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

  return (
    <div className="container mb-4 hv-85">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center">
          <ItemDetail item={item} />
        </div>
        <div className="col-md-6">
          <h1 className="pt-4">Item Detail Container</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s like Aldus PageMaker including versions of
            Lorem Ipsum.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
