import React from "react";
import Card from "react-bootstrap/Card";

const ItemDetail = ({ item }) => {
  return (
    <div>
      <Card className="text-center" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.pictureUrl} alt="Producto" />
        <Card.Body>
          <Card.Title>{item.title} </Card.Title>
          <Card.Text>{item.description} </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetail;
