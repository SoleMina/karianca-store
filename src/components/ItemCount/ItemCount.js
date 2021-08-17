import React, { useState } from "react";

export const ItemCount = ({ stock, initial }) => {
  const [counter, setCounter] = useState(initial);

  //Increment Counter
  const handleIncrement = () => {
    setCounter(counter < stock ? counter + 1 : counter);
  };

  //Decrement Counter
  const handleDecrement = () => {
    setCounter(counter > 0 ? counter - 1 : 0);
  };

  return (
    <div className="container">
      <div className="counter-container d-flex justify-content-lg-between">
        <button onClick={handleDecrement}>-</button>
        <p className="m-0">{counter}</p>
        <button onClick={handleIncrement}>+</button>
      </div>
      <button className="w-100 btn btn-secondary btn-lg btn-block mt-1">
        Agregar al carrito
      </button>
    </div>
  );
};