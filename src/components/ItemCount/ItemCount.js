import React, { useState } from "react";

//Import from bootstrap
import { Modal } from "react-bootstrap";
import "./ItemCount.css";

export const ItemCount = ({ stock, initial, onAdd, cart, callback }) => {
  const [counter, setCounter] = useState(initial);
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 1000);
  };

  //Increment Counter
  const handleIncrement = () => {
    counter < stock ? setCounter(counter + 1) : setCounter(counter);
  };

  //Decrement Counter
  const handleDecrement = () => {
    setCounter(counter > 0 ? counter - 1 : 0);
  };

  return (
    <div className="container" onClick={() => callback("heyyyy")}>
      <div className="counter-container d-flex justify-content-between">
        <button onClick={handleDecrement}>-</button>
        <p className="m-0">{counter}</p>
        <button onClick={handleIncrement}>+</button>
      </div>

      <Modal show={show}>
        <Modal.Body>El producto ha sido agregado exitosamente!</Modal.Body>
        <div
          className="progress-div `${show ? 'completeWidth' : ''}`"
          style={{
            animation: "completeWidth 1s ease-out",
            backgroundColor: "blue",
            height: "10px"
          }}
        ></div>
      </Modal>
      {cart === 0 && (
        <button
          onClick={() => {
            {
              onAdd(counter);
              handleShow();
            }
          }}
          className="w-100 btn btn-secondary btn-lg btn-block mt-1"
        >
          Agregar al carrito
        </button>
      )}
    </div>
  );
};
