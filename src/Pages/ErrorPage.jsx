import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const HandleClick = () => {
    navigate("/Categories")
  }
  return (
    <div>
      <h1>Product Not Found!!!!!! </h1>
      <button onClick={HandleClick}>GoTo Homepage....</button>
    </div>
  );
};

export default ErrorPage;
