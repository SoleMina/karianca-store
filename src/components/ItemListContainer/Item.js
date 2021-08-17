import React from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import Card from "react-bootstrap/Card";

const CardItem = ({ pictureUrl, name, description, stock }) => {
  return (
    <div className="col-md-4 d-flex justify-content-center mb-4">
      <Card className="text-center" style={{ width: "18rem" }}>
        <a href="https://reactjs.org/">
          <Card.Img variant="top" src={pictureUrl} alt="Producto" />
        </a>
        <Card.Body>
          <Card.Title> {name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <ItemCount stock={stock} initial={1} />
        </Card.Body>
      </Card>
    </div>
  );
};
export default CardItem;