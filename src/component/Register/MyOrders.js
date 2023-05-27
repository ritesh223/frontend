import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";

import "./MyOrders.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors , myOrders } from "../../actions/orderAction";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import Typography from "@material-ui/core/Typography";
import Metadata from "../Metadata";
import LaunchIcon from "@material-ui/icons/Launch";
import { useParams } from "react-router-dom/cjs/react-router-dom";
const MyOrders = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const alert = useAlert();

  const { loading,error, orders } = useSelector((state) => state.myOrders);
  const { user } = useSelector((state) => state.user);
//  const loading = false;
  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 300, flex: 1 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 150,
      flex: 0.5,
      cellClassName: (cellParams) => {
        return cellParams.value === "Delivered" ? "greenColor" : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 150,
      flex: 0.3,
    },

    {
      field: "amount",
      headerName: "Amount",
      type: "number",
      minWidth: 270,
      flex: 0.5,
    },

    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (cellParams) => {
        return (
          <Link to={`/order/${cellParams.id}`}>
            <LaunchIcon />
          </Link>
        );
      },
    },
  ];
  const rows = [];

  orders &&
    orders.forEach((item, index) => {
      rows.push({
        itemsQty: item.orderItems[0].quantity,
        id: item._id,
        status: item.orderStatus,
        amount:
          "₹ " +
          item.orderItems[0].price * item.orderItems[0].quantity +
          " + tax exc..",
      });
    });

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
//    console.log(user._id);
    dispatch(myOrders(user._id));
  }, [dispatch, alert, error]);

  return (
    <Fragment>
      <Metadata title={`${user.name} - Orders`} />

      {loading ? (
        <Loader />
      ) : (
        <div className="myOrdersPage">
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="myOrdersTable"
            autoHeight
          />

          <Typography id="myOrdersHeading">{user.name}'s Orders</Typography>
        </div>
      )}
    </Fragment>
  );
};

export default MyOrders;
