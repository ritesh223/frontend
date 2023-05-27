import axios from "axios";
import {
  ALL_PRODUCT1_FAIL,
  ALL_PRODUCT1_REQUEST,
  ALL_PRODUCT1_SUCCESS,
  PRODUCT1_DETAILS_REQUEST,
  PRODUCT1_DETAILS_SUCCESS,
  PRODUCT1_DETAILS_FAIL,
  NEW_REVIEW1_FAIL,
  NEW_REVIEW1_REQUEST,
  NEW_REVIEW1_SUCCESS,
  NEW_PRODUCT1_REQUEST,
  NEW_PRODUCT1_SUCCESS,
  NEW_PRODUCT1_FAIL,
  CLEAR_ERRORS,
  ALL_GUIDE_REQUEST,
  ALL_GUIDE_SUCCESS,
  ALL_GUIDE_FAIL,
} from "../constants/Product1Constants";
import {
  UPDATE_PRODUCT1_FAIL,
  UPDATE_PRODUCT1_REQUEST,
  UPDATE_PRODUCT1_SUCCESS,
  // UPDATE_PRODUCT1_RESET,
} from "../constants/productConstants";
// const api = axios.create({
//   baseURL: "http://localhost:4000",
// });
// Get All Products1
export const getProduct1 =
  (
    keyword = "",
    currcity = "",
    currentPage = 1,
    price = "",
    category,
    ratings = 0
  ) =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_PRODUCT1_REQUEST });

      let link = `/api/v1/products1?city=${keyword}&from=${currcity}&page=${currentPage}&price[gte]=${price}&price[lte]=${50000}&ratings[gte]=${ratings}`;
      // let link = `/api/v1/products?state=${keyword}`;

      if (category) {
        link = `/api/v1/products1?city=${keyword}&from=${currcity}&page=${currentPage}&price[gte]=${price}&price[lte]=${50000}&Category=${category}&ratings[gte]=${ratings}`;
      }

      // const { data } = await axios.get('http://localhost:4000/api/v1/products')
      // const { data } = await api.get("/api/v1/products");
      const { data } = await axios.get(link);

      dispatch({
        type: ALL_PRODUCT1_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_PRODUCT1_FAIL,
        payload: error.response.data.message,
      });
    }
  };
export const getGuide =
  (keyword = "", currentPage = 1, status) =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_GUIDE_REQUEST });

      let link = `/api/v1/guides?currloc=${keyword}&page=${currentPage}`;
      // let link = `/api/v1/products?state=${keyword}`;

      if (status) {
        link = `/api/v1/guides?currloc=${keyword}&page=${currentPage}&status=${status}`;
      }

      // const { data } = await axios.get('http://localhost:4000/api/v1/products')
      // const { data } = await api.get("/api/v1/products");
      const { data } = await axios.get(link);

      dispatch({
        type: ALL_GUIDE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_GUIDE_FAIL,
        payload: error.response.data.message,
      });
    }
  };
export const getProduct1Details = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT1_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v1/product1/${id}`);

    dispatch({
      type: PRODUCT1_DETAILS_SUCCESS,
      payload: data.product1,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT1_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const updateProduct1 = (id, product1Data) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PRODUCT1_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/v1/vendor/product1/${id}`,
      product1Data,
      config
    );

    dispatch({
      type: UPDATE_PRODUCT1_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PRODUCT1_FAIL,
      payload: error.response.data.message,
    });
  }
};
export const createProduct1 = (productData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_PRODUCT1_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };
    //    console.log(vendorid)
    const { data } = await axios.post(
      `/api/v1/vendor/product1/new`,
      productData,
      // vendorid,
      config
    );

    dispatch({
      type: NEW_PRODUCT1_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_PRODUCT1_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const new1Review = (reviewData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_REVIEW1_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(`/api/v1/review1`, reviewData, config);

    dispatch({
      type: NEW_REVIEW1_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: NEW_REVIEW1_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
