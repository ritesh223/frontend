import React, { Fragment } from "react";
import "./Cart.css";
import CartItemCard from "./CardItemCard";
import CartItemCard1 from "./CardItemCard1";
import { useAlert } from "react-alert";
import { useSelector, useDispatch } from "react-redux";
import { addItemsToCart , addItemsToCart1,removeItemsFromCart ,removeItemsFromCart1} from "../../actions/cartAction";
import { Typography } from "@material-ui/core";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Metadata from "../Metadata";
const Cart = () => {
  const history = useHistory();
  const alert = useAlert();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const { isAuthenticatedUser } = useSelector((state) => state.user);

  // const increaseQuantity = (id, quantity, stock ,roomType) => {
  //   const newQty = quantity + 1;
  //   if (stock <= quantity) {
  //     return;
  //   }
  //   dispatch(addItemsToCart(id, newQty , roomType));
  // };

  // const decreaseQuantity = (id, quantity ,roomType) => {
  //   const newQty = quantity - 1;
  //   if (1 >= quantity) {
  //     return;
  //   }
  //   dispatch(addItemsToCart(id, newQty,roomType));
  // };

  const deleteCartItems = (price,roomType) => {
    dispatch(removeItemsFromCart(price,roomType));
  };
  const deleteCartItems1 = (id) => {
    dispatch(removeItemsFromCart1(id));
  };

  const checkoutHandler = () => {
    if(isAuthenticatedUser){
    history.push("/shipping");
    }
    else{
      alert.error("Login or Register First !!")
      history.push('/reg')
    }
  };

  return (
    <>
      <Metadata title="Your Cart" description="Your Cart" />

      <Fragment>
        {cartItems.length === 0 ? (
          <div className="emptyCart">
            <RemoveShoppingCartIcon />

            <Typography>No Product in Your Cart</Typography>
            {/* <Link to="/hotel">Add Some</Link> */}
          </div>
        ) : (
          <Fragment>
            <div className="cartPage">
              <div className="cartHeader">
                <p>Ordering Items</p>
                <p>Quantity</p>
                <p>
                  Subtotal<span></span>
                </p>
              </div>

              {cartItems &&
                cartItems.map((item) => {
                  if (item.type === "package") {
                    return (
                      <div className="cartContainer" key={`${item.id}`}>
                        <CartItemCard1
                          item={item}
                          deleteCartItems1={deleteCartItems1}
                        />
                        <div className="cartInput">
                          <input type="number" readOnly value={item.quantity} />
                        </div>
                        <p className="cartSubtotal">{`₹${
                          item.price * item.quantity
                        }`}</p>
                      </div>
                    );
                  } else if (item.type === "hotel") {
                    return (
                      <div className="cartContainer" key={`${item.id}`}>
                        <CartItemCard
                          item={item}
                          deleteCartItems={deleteCartItems}
                        />
                        <div className="cartInput">
                          <input type="number" readOnly value={item.quantity} />
                        </div>
                        <p className="cartSubtotal">{`₹${
                          item.price * item.quantity
                        }`}</p>
                      </div>
                    );
                  }
                })}

              {/* {cartItems &&
              cartItems.map((item) => (
                <div className="cartContainer" key={`${item.id}`}>
                  <CartItemCard item={item} deleteCartItems={deleteCartItems} />;

                  <div className="cartInput">
                    <input type="number" readOnly value={item.quantity} />
                  </div>
                  <p className="cartSubtotal">{`₹${
                    item.price * item.quantity
                  }`}</p>
                </div>
              ))} */}

              <div className="cartGrossProfit">
                <div></div>
                <div className="cartGrossProfitBox">
                  <p>Gross Total</p>
                  <p>{`₹${cartItems.reduce(
                    (acc, item) => acc + item.quantity * item.price,
                    0
                  )}`}</p>
                </div>
                <div></div>
                <div className="checkOutBtn">
                  <button onClick={checkoutHandler}>Check Out</button>
                </div>
              </div>
            </div>
          </Fragment>
        )}
      </Fragment>
    </>
  );
};

export default Cart;




 {
   /* <button
                      onClick={() =>
                        decreaseQuantity(item.product, item.quantity,item.roomType)
                      }
                    >
                      -
                    </button> */
 }

  {
    /* <button
                      onClick={() =>
                        increaseQuantity(
                          item.product,
                          item.quantity,
                          item.roomType,
                          item.stock
                        )
                      }
                    >
                      +
                    </button> */
  }