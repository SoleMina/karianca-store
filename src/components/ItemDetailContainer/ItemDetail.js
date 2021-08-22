import React from "react";
import Card from "react-bootstrap/Card";

const ItemDetail = ({ item }) => {
  return (
    <div>
      <Card className="text-center" style={{ width: "18rem" }}>
        <a href="https://reactjs.org/">
          <Card.Img variant="top" src={item.pictureUrl} alt="Producto" />
        </a>
        <Card.Body>
          <Card.Title> {item.name}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <ItemCount stock={item.stock} initial={1} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetail;
