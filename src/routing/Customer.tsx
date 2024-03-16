import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Customer = () => {
  const params = useParams();
  return (
    <div>
      <h1>Customer</h1>
      <p>{params.id}</p>
    </div>
  );
};

export default Customer;
