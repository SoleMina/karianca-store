import React, { useState } from "react";

export const ItemCounter = ({ stock }) => {
  const [counter, setCounter] = useState(1);

  //Increment Counter
  const handleIncrement = () => {
    setCounter(counter < stock ? counter + 1 : counter);
  };

  //Decremente Counter
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
    </div>
  );
};
