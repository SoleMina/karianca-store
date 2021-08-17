import React from "react";
import Spinner from "react-bootstrap/Spinner";

const SpinnerContainer = () => {
  return (
    <div className="d-flex justify-content-center align-content-center align-items-center hv-100">
      <Spinner animation="border" role="status"></Spinner>
      <span className="mr-auto m-2" size="lg">
        Loading products...
      </span>
    </div>
  );
};

export default SpinnerContainer;
