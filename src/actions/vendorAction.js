// import { persistStore } from "redux-persist";
import {
  VENDOR_LOGIN_REQUEST,
  VENDOR_LOGIN_SUCCESS,
  VENDOR_LOGIN_FAIL,
  VENDOR1_LOGIN_REQUEST,
  VENDOR1_LOGIN_SUCCESS,
  VENDOR1_LOGIN_FAIL,
  REGISTER_VENDOR1_REQUEST,
  REGISTER_VENDOR1_SUCCESS,
  REGISTER_VENDOR1_FAIL,
  LOGOUT_VENDOR1_SUCCESS,
  LOGOUT_VENDOR1_FAIL,
  UPDATE_VENDOR1_PROFILE_REQUEST,
  UPDATE_VENDOR1_PROFILE_SUCCESS,
  // UPDATE_VENDOR1_PROFILE_RESET,
  UPDATE_VENDOR1_PROFILE_FAIL,
  UPDATE_VENDOR1_PASSWORD_REQUEST,
  UPDATE_VENDOR1_PASSWORD_SUCCESS,
  // UPDATE_VENDOR1_PASSWORD_RESET,
  UPDATE_VENDOR1_PASSWORD_FAIL,
  FORGOT_VENDOR1_PASSWORD_REQUEST,
  FORGOT_VENDOR1_PASSWORD_SUCCESS,
  FORGOT_VENDOR1_PASSWORD_FAIL,
  RESET_VENDOR1_PASSWORD_REQUEST,
  RESET_VENDOR1_PASSWORD_SUCCESS,
  RESET_VENDOR1_PASSWORD_FAIL,
  REGISTER_VENDOR_REQUEST,
  REGISTER_VENDOR_SUCCESS,
  REGISTER_VENDOR_FAIL,
  LOGOUT_VENDOR_SUCCESS,
  LOGOUT_VENDOR_FAIL,
  UPDATE_VENDOR_PROFILE_REQUEST,
  UPDATE_VENDOR_PROFILE_SUCCESS,
  // UPDATE_VENDOR_PROFILE_RESET,
  UPDATE_VENDOR_PROFILE_FAIL,
  UPDATE_VENDOR_PASSWORD_REQUEST,
  UPDATE_VENDOR_PASSWORD_SUCCESS,
  // UPDATE_VENDOR_PASSWORD_RESET,
  UPDATE_VENDOR_PASSWORD_FAIL,
  FORGOT_VENDOR_PASSWORD_REQUEST,
  FORGOT_VENDOR_PASSWORD_SUCCESS,
  FORGOT_VENDOR_PASSWORD_FAIL,
  RESET_VENDOR_PASSWORD_REQUEST,
  RESET_VENDOR_PASSWORD_SUCCESS,
  RESET_VENDOR_PASSWORD_FAIL,
  CLEAR_ERRORS,
} from "../constants/vendorConstants";
import axios from "axios";
// const axios = require("axios");
const api = axios.create({
  baseURL: "https://budgettrip1.onrender.com",
});

export const loginv = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: VENDOR_LOGIN_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    };

    const { data } = await axios.post(
      `/api/v1/loginv`,
      { email, password },
      config
    );
    // const token1 = data.token1;
    dispatch({ type: VENDOR_LOGIN_SUCCESS, payload: { vendor: data.vendor } });
  } catch (error) {
    dispatch({ type: VENDOR_LOGIN_FAIL, payload: error.response.data.message });
  }
};

export const loginv1 = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: VENDOR1_LOGIN_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    };

    const { data } = await axios.post(
      `/api/v1/loging`,
      { email, password },
      config
    );
    // const token2 = data.token2;
    dispatch({
      type: VENDOR1_LOGIN_SUCCESS,
      payload: { guide: data.guide },
    });
  } catch (error) {
    dispatch({
      type: VENDOR1_LOGIN_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const registerv = (vendorData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_VENDOR_REQUEST });

    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.post(`/api/v1/registerv`, vendorData, config);
    // const token1 = data.token1;
    //  const token = data.token;
    // console.log(token);
    //  const userId = data.user._id;

    //  document.cookie = `token=${token}; expires=${new Date(
    //    Date.now() + 24 * 60 * 60 * 1000
    //  ).toUTCString()}; path=/`;

    //  localStorage.setItem("token", token);
    //  localStorage.setItem("userId", userId);

    dispatch({
      type: REGISTER_VENDOR_SUCCESS,
      payload: { vendor: data.vendor },
    });
  } catch (error) {
    dispatch({
      type: REGISTER_VENDOR_FAIL,
      payload: error.response.data.message || error.response.data.error,
    });
  }
};

export const registerv1 = (guideData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_VENDOR1_REQUEST });

    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.post(`/api/v1/registerg`, guideData, config);
    // const token2 = data.token2;
    //  const token = data.token;
    // console.log(token);
    //  const userId = data.user._id;

    //  document.cookie = `token=${token}; expires=${new Date(
    //    Date.now() + 24 * 60 * 60 * 1000
    //  ).toUTCString()}; path=/`;

    //  localStorage.setItem("token", token);
    //  localStorage.setItem("userId", userId);

    dispatch({
      type: REGISTER_VENDOR1_SUCCESS,
      payload: { guide: data.guide },
    });
  } catch (error) {
    dispatch({
      type: REGISTER_VENDOR1_FAIL,
      payload: error.response.data.message || error.response.data.error,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    await axios.get(`/api/v1/logoutvendor`);

    dispatch({ type: LOGOUT_VENDOR_SUCCESS });
  } catch (error) {
    dispatch({
      type: LOGOUT_VENDOR_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const logout1 = () => async (dispatch) => {
  try {
    await axios.get(`/api/v1/logoutguide`);

    dispatch({ type: LOGOUT_VENDOR1_SUCCESS });
  } catch (error) {
    dispatch({
      type: LOGOUT_VENDOR1_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const forgotPasswordv = (email) => async (dispatch) => {
  try {
    dispatch({ type: FORGOT_VENDOR_PASSWORD_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `/api/v1/password/forgotv`,
      email,
      config
    );

    dispatch({ type: FORGOT_VENDOR_PASSWORD_SUCCESS, payload: data.message });
  } catch (error) {
    dispatch({
      type: FORGOT_VENDOR_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};
export const forgotPasswordv1 = (email) => async (dispatch) => {
  try {
    dispatch({ type: FORGOT_VENDOR1_PASSWORD_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `/api/v1/password/forgotg`,
      email,
      config
    );

    dispatch({ type: FORGOT_VENDOR1_PASSWORD_SUCCESS, payload: data.message });
  } catch (error) {
    dispatch({
      type: FORGOT_VENDOR1_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};
export const resetPasswordv = (token1, passwords) => async (dispatch) => {
  try {
    dispatch({ type: RESET_VENDOR_PASSWORD_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await api.put(
      `api/v1/password/resetv/${token1}`,
      passwords,
      config
    );

    dispatch({ type: RESET_VENDOR_PASSWORD_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: RESET_VENDOR_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};
export const resetPasswordv1 = (token2, passwords) => async (dispatch) => {
  try {
    dispatch({ type: RESET_VENDOR1_PASSWORD_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await api.put(
      `api/v1/password/resetg/${token2}`,
      passwords,
      config
    );

    dispatch({ type: RESET_VENDOR1_PASSWORD_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: RESET_VENDOR1_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const updateProfilev = (vendorData, vendorId) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_VENDOR_PROFILE_REQUEST });
    // console.log(userData)
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    // console.log(userId);
    const updateprofilevendor = `/api/v1/updatevp/${vendorId}`;
    const { data } = await axios.put(updateprofilevendor, vendorData, config);

    dispatch({ type: UPDATE_VENDOR_PROFILE_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_VENDOR_PROFILE_FAIL,
      payload: error.response.data.message,
    });
  }
};
export const updateProfilev1 = (guideData, guideId) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_VENDOR1_PROFILE_REQUEST });
    // console.log(userData)
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    // console.log(userId);
    const updateprofileguide = `/api/v1/updategp/${guideId}`;
    const { data } = await axios.put(updateprofileguide, guideData, config);

    dispatch({ type: UPDATE_VENDOR1_PROFILE_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_VENDOR1_PROFILE_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const updatePasswordv = (passwords, vendorId) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_VENDOR_PASSWORD_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.put(
      `/api/v1/password/updatev/${vendorId}`,
      passwords,
      config
    );

    dispatch({ type: UPDATE_VENDOR_PASSWORD_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_VENDOR_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};
export const updatePasswordv1 = (passwords, guideId) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_VENDOR1_PASSWORD_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.put(
      `/api/v1/password/updateg/${guideId}`,
      passwords,
      config
    );

    dispatch({ type: UPDATE_VENDOR1_PASSWORD_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_VENDOR1_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
