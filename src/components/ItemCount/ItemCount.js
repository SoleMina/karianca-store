import React, { useState } from "react";

export const ItemCount = ({ stock, initial, onAdd }) => {
  const [counter, setCounter] = useState(initial);

  //Increment Counter
  const handleIncrement = () => {
    counter < stock ? setCounter(counter + 1) : setCounter(counter);
  };

  //Decrement Counter
  const handleDecrement = () => {
    setCounter(counter > 0 ? counter - 1 : 0);
  };

  return (
    <div className="container">
      <div className="counter-container d-flex justify-content-between">
        <button onClick={handleDecrement}>-</button>
        <p className="m-0">{counter}</p>
        <button onClick={handleIncrement}>+</button>
      </div>
      <button
        onClick={() => onAdd(counter)}
        className="w-100 btn btn-secondary btn-lg btn-block mt-1"
      >
        Agregar al carrito
      </button>
    </div>
  );
};
