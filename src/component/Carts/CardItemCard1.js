import React from "react";
import "./carditemcard.css";
import { Link } from "react-router-dom";

const CartItemCard1 = ({ item ,deleteCartItems1}) => {
  return (
    <div className="CartItemCard">
      <img src={item.image} alt="ssa" />
      <div>
        <Link to={`/package/${item.product1}`}>{item.name}</Link>
        <span>{`₹ ${item.price}`}</span>
        <span>{`${item.Category}`}</span>
        <span>{`${item.type}`}</span>
        {/* {console.log(item.product1)}; */}
        <p onClick={() => deleteCartItems1(item.product1)}>Remove</p>
      </div>
    </div>
  );
};

export default CartItemCard1;
