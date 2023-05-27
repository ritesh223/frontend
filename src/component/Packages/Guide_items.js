import React from "react";
import "./Packageitems.css";
// import hotelr from "../../../img/mumbai.jpg";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import Metadata from "../Metadata";
import { useAlert } from "react-alert";
import { useSelector } from "react-redux";
// import { Rating } from "@material-ui/lab";

export default function Guide_items({ guide }) {
  const styles = {
   
  };
   const { isAuthenticatedUser} = useSelector((state) => state.user);
  const alert = useAlert();
  return (
    <div className="guide-card" >
      <div className="avatar">
        <img  src={guide.avatar.url} alt={guide.name}  />
      </div>
      <div className="details" >
        <h3>{guide.name}</h3>
        <h6>
          <strong>Email:</strong> <small>{guide.email}</small>
        </h6>
        <h6>
          <strong>Current Location:</strong>
          <small> {guide.currloc}</small>{" "}
        </h6>
        <h6>
          <strong>Status: </strong>
          <small>{guide.status}</small>
        </h6>
        {isAuthenticatedUser ? (
          <button className="contact-button" onClick={() => window.open(`tel:${guide.MobileNumber}`)}>
            Contact
          </button>
        ) : (
          <button className="contact-button"onClick={() => alert.error("Please login first")}>Contact</button>
        )}
      </div>
    </div>
  );



}

