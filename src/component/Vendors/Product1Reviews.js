import React, { Fragment, useEffect, useState } from "react";

import { DataGrid } from "@mui/x-data-grid";
import "./productReviews.css";

import { useSelector, useDispatch } from "react-redux";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import {
  clearErrors,
  getAllReviews1,
  deleteReviews1,
} from "../../actions/productAction";

import { useAlert } from "react-alert";

import { Button } from "@material-ui/core";
import Metadata from "../Metadata";
import DeleteIcon from "@material-ui/icons/Delete";
import Star from "@material-ui/icons/Star";

import Sidebar from "./Sidebar";

import { DELETE_REVIEW1_RESET } from "../../constants/productConstants";

const Product1Reviews = () => {
  const history = useHistory();
  const params = useParams();
  const dispatch = useDispatch();

  const alert = useAlert();

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.review1
  );

  const { error, reviews, loading } = useSelector(
    (state) => state.productReviews1
  );
  const { isAuthenticatedVendor, vendor } = useSelector((state) => state.vendor);

  const [productId, setProductId] = useState("");

  const deleteReviewHandler = (reviewId) => {
    dispatch(deleteReviews1(reviewId, productId));
  };

  const productReviewsSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(getAllReviews1(productId));
  };

  useEffect(() => {
    if (productId.length === 24) {
      dispatch(getAllReviews1(productId));
    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert.success("Review Deleted Successfully");
      history.push("/vendor/reviews1");

      dispatch({
        type: DELETE_REVIEW1_RESET,
      });
    }
  }, [dispatch, alert, error, deleteError, history, isDeleted, productId]);

  const columns = [
    {
      field: "id",
      headerName: "Review ID",
      minWidth: 200,
      flex: 0.5,
    },

    {
      field: "user",
      headerName: "User",
      minWidth: 200,
      flex: 0.6,
    },

    {
      field: "comment",
      headerName: "Comment",
      minWidth: 350,
      flex: 1,
    },

    {
      field: "rating",
      headerName: "Rating",
      type: "number",
      minWidth: 180,
      flex: 0.4,

      cellClassName: (cellParams) => {
        if (cellParams.value && typeof cellParams.value === "function") {
          return cellParams.value(params.id, "rating") >= 3
            ? "greenColor"
            : "redColor";
        } else {
          // Handle the case when cellParams.value is not a function or a valid value
          return ""; // Or you can return a default value
        }
      },
    },

    {
        field: "actions",
        flex: 0.3,
        headerName: "Actions",
        minWidth: 150,
        type: "number",
        sortable: false,
        renderCell: (cellParams) => {
          if (isAuthenticatedVendor && vendor.role === "admin") {
            return (
              <Fragment>
                <Button
                  onClick={
                    () => deleteReviewHandler(cellParams.id)
                    // Add this line to console.log params.id
                  }
                >
                  <DeleteIcon />
                </Button>
              </Fragment>
            );
          } else {
            return null;
          }
        },
      },
  ];

  const rows = [];

  reviews &&
    reviews.forEach((item) => {
      rows.push({
        id: item._id,
        rating: item.rating,
        comment: item.comment,
        user: item.name,
      });
    });

  return (
    <Fragment>
      {" "}
      <Metadata title={`ALL HOTEL REVIEWS - Vendor`} />{" "}
      <div className="dashboard">
        {" "}
        <Sidebar />{" "}
        <div className="productReviewsContainer">
          {" "}
          <form
            className="productReviewsForm"
            onSubmit={productReviewsSubmitHandler}
          >
            {" "}
            <h1 className="productReviewsFormHeading">
              ALL HOLIDAY PACKAGES REVIEWS
            </h1>{" "}
            <div>
              {" "}
              <Star />{" "}
              <input
                type="text"
                placeholder="Product Id"
                required
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
              />{" "}
            </div>{" "}
            <Button
              id="createProductBtn"
              type="submit"
              disabled={
                loading ? true : false || productId === "" ? true : false
              }
            >
              {" "}
              Search{" "}
            </Button>{" "}
          </form>{" "}
          {reviews && reviews.length > 0 ? (
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={10}
              disableSelectionOnClick
              className="productListTable"
              autoHeight
            />
          ) : (
            <h1 className="productReviewsFormHeading">No Reviews Found</h1>
          )}
        </div>{" "}
      </div>{" "}
    </Fragment>
  );
};

export default Product1Reviews;
