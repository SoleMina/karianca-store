import React from "react";

//Import Spinner from bootstrap
import Spinner from "react-bootstrap/Spinner";

const SpinnerContainer = ({ text }) => {
  return (
    <div className="d-flex justify-content-center align-content-center align-items-center hv-100">
      <Spinner animation="border" role="status"></Spinner>
      <span className="mr-auto m-2" size="lg">
        {text}
      </span>
    </div>
  );
};

export default SpinnerContainer;
