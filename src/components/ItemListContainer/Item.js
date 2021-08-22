import React from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import Card from "react-bootstrap/Card";

const CardItem = ({ pictureUrl, name, description, stock }) => {
  return (
    <Card className="text-center" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={pictureUrl} alt="Producto" />
      <Card.Body>
        <Card.Title> {name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <ItemCount stock={stock} initial={1} />
      </Card.Body>
    </Card>
  );
};
export default CardItem;
