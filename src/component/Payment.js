import React, { Fragment, useEffect, useRef } from "react";
import CheckoutSteps from "./Carts/CheckoutSteps";
import { useSelector, useDispatch } from "react-redux";
import Metadata from "./Metadata";
import { Typography } from "@material-ui/core";
import { useAlert } from "react-alert";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { UPDATE_CART_RESET } from "../constants/cartConstants";

import axios from "axios";
import "./Payment.css";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import EventIcon from "@material-ui/icons/Event";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { createOrder , clearErrors} from "../actions/orderAction"
import { useHistory } from "react-router-dom/cjs/react-router-dom";
const api = axios.create({
  baseURL: "http://localhost:4000",
});
const Payment = () => {
const history = useHistory();

  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));

  const dispatch = useDispatch();
  const alert = useAlert();
  const stripe = useStripe();
  const elements = useElements();
  const payBtn = useRef(null);

  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const { error,created } = useSelector((state) => state.newOrder);
  
  const paymentData = {
    amount: Math.round(orderInfo.totalPrice * 100),
  };

  const order = {
    shippingInfo,
    orderItems: cartItems,
    itemsPrice: orderInfo.subtotal,
    taxPrice: orderInfo.tax,
    shippingPrice: orderInfo.shippingCharges,
    totalPrice: orderInfo.totalPrice,
    user: user._id,
    // vendor:cartItems.vendor
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    payBtn.current.disabled = true;

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await api.post(
        "/api/v1/payment/process",
        paymentData,
        config
      );

      const client_secret = data.client_secret;

      if (!stripe || !elements) return;

      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: user.name,
            email: user.email,

            address: {
              line1: shippingInfo.address,
              city: shippingInfo.city,
              state: shippingInfo.state,
              postal_code: shippingInfo.pinCode,
              country: shippingInfo.country,
            //   date: shippingInfo.date,
            },
          },
        },
      });

      if (result.error) {
        payBtn.current.disabled = false;

        alert.error("Some Error Occured.If Any Payment Deducted Will Be Refunded In 7 Working Days");
      } else {
        if (result.paymentIntent.status === "succeeded") {
          order.paymentInfo = {
            id: result.paymentIntent.id,
            status: result.paymentIntent.status,
          };
     
        dispatch(createOrder(order));
       

         
         
          
        

          
        } else {
          alert.error("There's some issue while processing payment ");
        }
      }
    } catch (error) {
      payBtn.current.disabled = false;
      alert.error(error.response.data.message);
    }
  };

  useEffect(() => {
    if (error) {
      // console.log(error);
      alert.error("There is Some Error Occurred while Creating your Order. If Any Payment deducted Then it will be Refunded in 7 working days");
      
      dispatch(clearErrors());
     
      // history.push("/");
    }
    else if(created){
      history.replace("/success");
      history.push("/success");
      localStorage.removeItem("cartItems");
      dispatch({
            type: UPDATE_CART_RESET,
          });
    }
    
  }, [dispatch, error, alert,created]);

  return (
    <Fragment>
      <Metadata title="Payment" />
      <CheckoutSteps activeStep={2} />
      <div className="paymentContainer">
        <form className="paymentForm" onSubmit={(e) => submitHandler(e)}>
          <Typography>Card Info</Typography>
          <div>
            <CreditCardIcon />
            <CardNumberElement className="paymentInput" />
          </div>
          <div>
            <EventIcon />
            <CardExpiryElement className="paymentInput" />
          </div>
          <div>
            <VpnKeyIcon />
            <CardCvcElement className="paymentInput" />
          </div>

          <input
            type="submit"
            value={`Pay - ₹ ${orderInfo && orderInfo.totalPrice}`}
            ref={payBtn}
            className="paymentFormBtn"
          />
        </form>
      </div>
    </Fragment>
  );
};

export default Payment;
