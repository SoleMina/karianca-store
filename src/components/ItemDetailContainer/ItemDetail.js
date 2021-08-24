import React from "react";
import Card from "react-bootstrap/Card";
import { ItemCount } from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
  return (
    <div>
      <Card className="text-center" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.pictureUrl} alt="Producto" />
        <Card.Body>
          <Card.Title>{item.title} </Card.Title>
          <Card.Text>{item.description} </Card.Text>
          <ItemCount stock={item.stock} initial={1} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetail;
