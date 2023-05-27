import axios from "axios";

import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  ADMIN_PRODUCT_REQUEST,
  ADMIN_PRODUCT_SUCCESS,
  ADMIN_PRODUCT_FAIL,
  ADMIN_PRODUCT1_REQUEST,
  ADMIN_PRODUCT1_SUCCESS,
  ADMIN_PRODUCT1_FAIL,
  NEW_PRODUCT_REQUEST,
  NEW_PRODUCT_SUCCESS,
  NEW_PRODUCT_FAIL,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAIL,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  DELETE_PRODUCT1_REQUEST,
  DELETE_PRODUCT1_SUCCESS,
  DELETE_PRODUCT1_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_SUCCESS,
  NEW_REVIEW_REQUEST,
  NEW_REVIEW_SUCCESS,
  NEW_REVIEW_FAIL,
  ALL_REVIEW_REQUEST,
  ALL_REVIEW_SUCCESS,
  ALL_REVIEW_FAIL,
  DELETE_REVIEW_REQUEST,
  DELETE_REVIEW_SUCCESS,
  DELETE_REVIEW_FAIL,
  ALL_REVIEW1_REQUEST,
  ALL_REVIEW1_SUCCESS,
  ALL_REVIEW1_FAIL,
  DELETE_REVIEW1_REQUEST,
  DELETE_REVIEW1_SUCCESS,
  DELETE_REVIEW1_FAIL,
  CLEAR_ERRORS,
} from "../constants/productConstants";
// const api = axios.create({
//   baseURL: "http://localhost:4000",
// });
// Get All Products
export const getProduct =
  (keyword = "", currentPage = 1, price = "", category, ratings = 0) =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_PRODUCT_REQUEST });

      let link = `/api/v1/products?city=${keyword}&page=${currentPage}&price[gte]=${price}&price[lte]=${20000}&ratings[gte]=${ratings}`;
      // let link = `/api/v1/products?state=${keyword}`;

      if (category) {
        link = `/api/v1/products?city=${keyword}&page=${currentPage}&price[gte]=${price}&price[lte]=${20000}&Category=${category}&ratings[gte]=${ratings}`;
      }

      // const { data } = await axios.get('http://localhost:4000/api/v1/products')
      // const { data } = await api.get("/api/v1/products");
      const { data } = await axios.get(link);

      dispatch({
        type: ALL_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_PRODUCT_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// // Get All Products For Vendor
export const getVendorProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_PRODUCT_REQUEST });

    const { data } = await axios.get(`/api/v1/vendor/products/${id}`);

    dispatch({
      type: ADMIN_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};
export const getVendorProduct1 = (id) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_PRODUCT1_REQUEST });

    const { data } = await axios.get(`/api/v1/vendor/products1/${id}`);

    dispatch({
      type: ADMIN_PRODUCT1_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_PRODUCT1_FAIL,
      payload: error.response.data.message,
    });
  }
};

// // Create Product
export const createProduct = (productData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_PRODUCT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };
    //    console.log(productData)
    const { data } = await axios.post(
      `/api/v1/vendor/product/new`,
      productData,
      // vendorid,
      config
    );

    dispatch({
      type: NEW_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// // Update Product
export const updateProduct = (id, productData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PRODUCT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/v1/vendor/product/${id}`,
      productData,
      config
    );

    dispatch({
      type: UPDATE_PRODUCT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// // Delete Product
export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PRODUCT_REQUEST });

    const { data } = await axios.delete(`/api/v1/vendor/product/${id}`);

    dispatch({
      type: DELETE_PRODUCT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};
export const deleteProduct1 = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PRODUCT1_REQUEST });

    const { data } = await axios.delete(`/api/v1/vendor/product1/${id}`);

    dispatch({
      type: DELETE_PRODUCT1_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_PRODUCT1_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get Products Details
export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v1/product/${id}`);

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data.product,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// // NEW REVIEW
export const newReview = (reviewData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_REVIEW_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(`/api/v1/review`, reviewData, config);

    dispatch({
      type: NEW_REVIEW_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: NEW_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};

// // Get All Reviews of a Product
export const getAllReviews = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALL_REVIEW_REQUEST });

    const { data } = await axios.get(`/api/v1/reviews?id=${id}`);

    dispatch({
      type: ALL_REVIEW_SUCCESS,
      payload: data.reviews,
    });
  } catch (error) {
    dispatch({
      type: ALL_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};
export const getAllReviews1 = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALL_REVIEW1_REQUEST });

    const { data } = await axios.get(`/api/v1/reviews1?id=${id}`);

    dispatch({
      type: ALL_REVIEW1_SUCCESS,
      payload: data.reviews,
    });
  } catch (error) {
    dispatch({
      type: ALL_REVIEW1_FAIL,
      payload: error.response.data.message,
    });
  }
};

// // Delete Review of a Product
export const deleteReviews = (reviewId, productId) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_REVIEW_REQUEST });

    const { data } = await axios.delete(
      `/api/v1/reviews?id=${reviewId}&productId=${productId}`
    );

    dispatch({
      type: DELETE_REVIEW_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};
export const deleteReviews1 = (reviewId, productId) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_REVIEW1_REQUEST });

    const { data } = await axios.delete(
      `/api/v1/reviews1?id=${reviewId}&productId=${productId}`
    );

    dispatch({
      type: DELETE_REVIEW1_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_REVIEW1_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
