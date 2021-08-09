import React from "react";
import Card from "react-bootstrap/Card";

const ItemListContainer = (props) => {
  return (
    <div className="col-md-4 d-flex justify-content-center">
      <Card style={{ width: "18rem" }}>
        <a href="https://reactjs.org/">
          <Card.Img variant="top" src={props.imagenUrl} alt="Producto" />
        </a>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemListContainer;
