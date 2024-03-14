import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const HandleClick = () => {
    navigate("/")
  }
  return (
    <div>
      <h1>Product Not Found!!!!!! </h1>
      <button onClick={HandleClick}>View Homepage</button>
    </div>
  );
};

export default ErrorPage;
