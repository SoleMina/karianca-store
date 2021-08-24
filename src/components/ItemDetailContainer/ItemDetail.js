import React from "react";
import Card from "react-bootstrap/Card";
import { ItemCount } from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
  return (
    <div className="container mb-4 hv-85">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center">
          <Card className="text-center" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={item.pictureUrl} alt="Producto" />
            <Card.Body>
              <Card.Title>{item.title} </Card.Title>
              <ItemCount stock={item.stock} initial={1} />
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6">
          <h1 className="pt-4 text-center">{item.title} </h1>
          <h5>Stock: {item.stock}</h5>
          <h5>Category: {item.category}</h5>
          <h5>Price: {item.price}</h5>
          <p>
            <b>Description:</b> {item.description}
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s like Aldus PageMaker including versions of
            Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
