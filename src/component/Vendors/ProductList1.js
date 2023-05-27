import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./productlist.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom";

// import {
//   clearErrors,
//   getAdminProduct,
//   deleteProduct,
// } from "../../actions/productAction";
import {
  clearErrors,
  getVendorProduct1,
  deleteProduct1,
} from "../../actions/productAction";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import Metadata from "../Metadata";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SideBar from "./Sidebar";
import { DELETE_PRODUCT1_RESET } from "../../constants/productConstants";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const ProductList1 = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { vendor } = useSelector((state) => state.vendor);

  const alert = useAlert();

  const { error, vproducts1 } = useSelector((state) => state.vendorproducts1);

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.product1
  );

  const deleteProductHandler = (id) => {
    dispatch(deleteProduct1(id));
  };

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
      alert.success("Product Deleted Successfully");
      history.push("/vendor");
      dispatch({ type: DELETE_PRODUCT1_RESET });
    }

    dispatch(getVendorProduct1(vendor._id));
  }, [dispatch, alert, error, deleteError, history, isDeleted]);

  const columns = [
    { field: "id", headerName: "Product ID", minWidth: 200, flex: 0.5 },

    {
      field: "name",
      headerName: "Name",
      minWidth: 350,
      flex: 1,
    },
    {
      field: "stock",
      headerName: "Stock",
      type: "number",
      minWidth: 150,
      flex: 0.3,
    },

    {
      field: "price",
      headerName: "Price",
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
            <Link to={`/vendor/product1/${cellParams.id}`}>
              <EditIcon />
            </Link>

            <Button onClick={() => deleteProductHandler(cellParams.id)}>
              <DeleteIcon />
            </Button>
          </Fragment>
        );
      },
    },
  ];

  const rows = [];

  vproducts1 &&
    vproducts1.forEach((item) => {
      rows.push({
        id: item._id,
        stock: item.Stock,
        price: item.price,
        name: item.name,
      });
    });

  return (
    <Fragment>
      <Metadata title={`ALL Packages - Vendor`} />

      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">ALL HOLIDAY PACKAGES</h1>

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

export default ProductList1;
