import React from "react";
import "./carditemcard.css";
import { Link } from "react-router-dom";

const CartItemCard = ({ item, deleteCartItems }) => {
  return (
    <div className="CartItemCard">
      <img src={item.image} alt="ssa" />
      <div>
        <Link to={`/product/${item.product}`}>{item.name}</Link>
        <span>{`₹ ${item.price}`}</span>
        <span>{`${item.roomType}`}</span>
        <span>{`${item.type}`}</span>

        <p onClick={() => deleteCartItems(item.price , item.roomType)}>Remove</p>
      </div>
    </div>
  );
};

export default CartItemCard;
