import {React, useEffect} from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "./OrderSuccess.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const OrderSuccess = () => {
  const history = useHistory();
  const dispatch = useDispatch();
   const { user } = useSelector((state) => state.user);
   useEffect(() => {
     const disableBackNavigation = () => {
       window.history.pushState(null, null, window.location.href);
       window.onpopstate = () => {
         window.history.pushState(null, null, window.location.href);
       };
     };

     disableBackNavigation();

     return () => {
       window.onpopstate = null;
     };
   }, []);


  return (
    <div className="orderSuccess">
      <CheckCircleIcon />

      <Typography>Your Order has been Placed successfully </Typography>
      <Link to={`/orders/${user._id}`}>View Orders</Link>
    </div>
  );
};

export default OrderSuccess;
