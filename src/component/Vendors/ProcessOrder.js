import React, { Fragment, useEffect, useState } from "react";
import Metadata from "../Metadata";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import Sidebar from "./Sidebar";
import {
  getOrderDetails,
  clearErrors,
  updateOrder,
} from "../../actions/orderAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Loader/Loader";
import { useAlert } from "react-alert";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import { Button } from "@material-ui/core";
import { UPDATE_ORDER_RESET } from "../../constants/orderConstants";
import "./processOrder.css";
import { useHistory ,useParams} from "react-router-dom/cjs/react-router-dom.min";

const ProcessOrder = () => {
    const history=useHistory();
    const params = useParams();
    
  const { order, error, loading } = useSelector((state) => state.orderDetails);
  const { error: updateError, isUpdated } = useSelector((state) => state.order);

  const updateOrderSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("status", status);

    dispatch(updateOrder(params.id, myForm));
  };

  const dispatch = useDispatch();
  const alert = useAlert();

  const [status, setStatus] = useState("");

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (updateError) {
      alert.error(updateError);
      dispatch(clearErrors());
    }
    if (isUpdated) {
      alert.success("Order Updated Successfully");
      dispatch({ type: UPDATE_ORDER_RESET });
    }

    dispatch(getOrderDetails(params.id));
  }, [dispatch, alert, error, params.id, isUpdated, updateError]);

  return (
    <Fragment>
      <Metadata title="Process Order" />
      <div className="dashboard">
        <Sidebar />
        <div className="newProductContainer">
          {loading ? (
            <Loader />
          ) : (
            <div
              className="confirmOrderPage"
              style={{
                display: order.orderStatus === "Delivered" ? "block" : "grid",
              }}
            >
              <div>
                <div className="confirmshippingArea">
                  <Typography>Shipping Info</Typography>
                  <div className="orderDetailsContainerBox">
                    <div>
                      <p>Name:</p>
                      <span>{order.user && order.user.name}</span>
                    </div>
                    <div>
                      <p>Phone:</p>
                      <span>
                        {order.shippingInfo && order.shippingInfo.phoneNo}
                      </span>
                    </div>
                    <div>
                      <p>Address:</p>
                      <span>
                        {order.shippingInfo &&
                          `${order.shippingInfo.address}, ${order.shippingInfo.city}, ${order.shippingInfo.state}, ${order.shippingInfo.pinCode}, ${order.shippingInfo.country}`}
                      </span>
                    </div>
                    <div>
                      <p>Booked Dates: </p>
                      <span>
                        {order.shippingInfo && order.shippingInfo.datetravel} :
                        {order.shippingInfo && order.shippingInfo.datetravels}
                      </span>
                    </div>
                  </div>

                  <Typography>Payment</Typography>
                  <div className="orderDetailsContainerBox">
                    <div>
                      <p
                        className={
                          order.paymentInfo &&
                          order.paymentInfo.status === "succeeded"
                            ? "greenColor"
                            : "redColor"
                        }
                      >
                        {order.paymentInfo &&
                        order.paymentInfo.status === "succeeded"
                          ? "PAID"
                          : "NOT PAID"}
                      </p>
                    </div>

                    <div>
                      <p>Amount:</p>
                      <span>
                        ₹{" "}
                        {order.orderItems &&
                          order.orderItems[0] &&
                          order.orderItems[0].price &&
                          order.orderItems[0].price *
                            order.orderItems[0].quantity}
                        /-
                      </span>
                    </div>
                  </div>

                  <Typography>Order Status</Typography>
                  <div className="orderDetailsContainerBox">
                    <div>
                      <p
                        className={
                          order.orderStatus && order.orderStatus === "Delivered"
                            ? "greenColor"
                            : "redColor"
                        }
                      >
                        {order.orderStatus && order.orderStatus}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="confirmCartItems">
                  <Typography>Dispatch Items:</Typography>
                  <div className="confirmCartItemsContainer">
                    {order &&
                      order.orderItems &&
                      order.orderItems.length > 0 &&
                      order.orderItems[0].image && (
                        <img src={order.orderItems[0].image} alt="Product" />
                      )}
                    {order &&
                      order.orderItems &&
                      order.orderItems.length > 0 &&
                      order.orderItems[0].product && (
                        <>
                          {order.orderItems[0].type === "package" ? (
                            <Link
                            // to={`/product1/${order.orderItems[0].product}`}
                            >
                              {order.orderItems[0].name}
                            </Link>
                          ) : (
                            <Link
                            // to={`/product/${order.orderItems[0].product}`}
                            >
                              {order.orderItems[0].name}
                            </Link>
                          )}
                        </>
                      )}

                    {order &&
                      order.orderItems &&
                      order.orderItems.length > 0 &&
                      order.orderItems[0].price &&
                      order.itemsPrice && (
                        <span>
                          {order.orderItems[0].quantity} X ₹
                          {order.orderItems[0].price} ={" "}
                          <b>
                            ₹
                            {order.orderItems[0].quantity *
                              order.orderItems[0].price}
                          </b>
                        </span>
                      )}
                  </div>
                </div>
              </div>
              {/*  */}
              <div
                style={{
                  display: order.orderStatus === "Delivered" ? "none" : "block",
                }}
              >
                <form
                  className="updateOrderForm"
                  onSubmit={updateOrderSubmitHandler}
                >
                  <h1>Process Order</h1>

                  <div>
                    <AccountTreeIcon />
                    <select onChange={(e) => setStatus(e.target.value)}>
                      <option value="">Choose Category</option>
                      {order.orderStatus === "Processing" && (
                        <option value="Shipped">Shipped</option>
                      )}

                      {order.orderStatus === "Shipped" && (
                        <option value="Delivered">Delivered</option>
                      )}
                    </select>
                  </div>

                  <Button
                    id="createProductBtn"
                    type="submit"
                    disabled={
                      loading ? true : false || status === "" ? true : false
                    }
                  >
                    Process
                  </Button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default ProcessOrder;
