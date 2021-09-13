import React from "react";
import Card from "react-bootstrap/Card";

const CardItem = ({ img, name, description }) => {
  return (
    <Card className="text-center" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} alt="Producto" />
      <Card.Body>
        <Card.Title> {name}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default CardItem;
