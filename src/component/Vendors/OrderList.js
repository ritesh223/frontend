import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./productlist.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import Metadata from "../Metadata";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Sidebar from "./Sidebar";
import { getAllOrders,clearErrors,deleteOrder } from "../../actions/orderAction";
import { DELETE_ORDER_RESET } from "../../constants/orderConstants";
import { useHistory ,useParams} from "react-router-dom/cjs/react-router-dom.min";
const OrderList = () => {
    const history = useHistory();
  const dispatch = useDispatch();
  const params =useParams();
  const alert = useAlert();
  
  const { error, orders } = useSelector((state) => state.allOrders);
  const { vendor } = useSelector((state) => state.vendor);
  const vendorid = vendor._id;

  const { error: deleteError, isDeleted } = useSelector((state) => state.order);

  
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert.success("Order Deleted Successfully");
    //   console.log("now going back route");
      history.push(`/vendor/orders/vendorid`);
      dispatch({ type: DELETE_ORDER_RESET });
    }

    dispatch(getAllOrders(vendor._id));
  }, [dispatch, alert, error,history,deleteError,isDeleted]);
const deleteOrderHandler = (id) => {
  dispatch(deleteOrder(id));
};

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 300, flex: 1 },
    {
      field: "name",
      headerName: "Name",
      minWidth: 150,
      flex: 0.5,
     
    },
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
      flex: 0.4,
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
          <Fragment>
            <Link to={`/vendor/order/${cellParams.id}`}>
              <EditIcon />
            </Link>

            <Button onClick={() => deleteOrderHandler(cellParams.id)}>
              <DeleteIcon />
            </Button>
          </Fragment>
        );
      },
    },
  ];

  const rows = [];

  orders &&
    orders.forEach((item) => {
      rows.push({
        id: item._id,
        name: item.orderItems[0].name,
        itemsQty: item.orderItems[0].quantity,
        amount:
          "₹ " + item.orderItems[0].quantity * item.orderItems[0].price,
        status: item.orderStatus,
      });
    });

  return (
    <Fragment>
      <Metadata title={`ALL ORDERS - Vendor`} />

      <div className="dashboard">
        <Sidebar />
        <div className="productListContainer">
          <h1 id="productListHeading">ALL ORDERS</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="productListTable"
            autoHeight
          />
        </div>
      </div>
    </Fragment>
  );
};

export default OrderList;
