import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";


const ErrorAlert = ({ message }) => {
  return (
    <div
      style={{
        width : "40vh",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#AF6757",
        color: "#010101",
        padding: "20px",
        borderRadius: "10px",
        zIndex: "999",
      }}
    >
      {(message)}
    </div>
  );
};




export default ErrorAlert;
