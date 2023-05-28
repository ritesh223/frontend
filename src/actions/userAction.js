import { persistStore } from "redux-persist";
import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  // LOAD_USER_REQUEST,
  // LOAD_USER_SUCCESS,
  // LOAD_USER_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAIL,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  // ALL_USERS_REQUEST,
  // ALL_USERS_SUCCESS,
  // ALL_USERS_FAIL,
  // DELETE_USER_REQUEST,
  // DELETE_USER_SUCCESS,
  // DELETE_USER_FAIL,
  // UPDATE_USER_REQUEST,
  // UPDATE_USER_SUCCESS,
  // UPDATE_USER_FAIL,
  // USER_DETAILS_REQUEST,
  // USER_DETAILS_SUCCESS,
  // USER_DETAILS_FAIL,
  USER_REQUEST,
  USER_SUCCESS,
  USER_FAIL,
  CLEAR_ERRORS,
} from "../constants/userConstants";
// import Cookies from "js-cookie";
import axios from "axios";
// const axios = require("axios");
const Baseurl = process.env.REACT_SERVER;
const api = axios.create({
  baseURL: "https://Budgettrip.com",
});
// axios.defaults.withCredentials = true;
// Login
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    };

    const { data } = await axios.post(
      `/api/v1/login`,
      { email, password },
      config
    );
    // const token = data.token;
    //  Cookies.set("token", token);
    //  Cookies.set("_id", data.user._id);
    // console.log(token);
    // const userId = data.user._id;

    // document.cookie = `token=${token}; expires=${new Date(
    //   Date.now() + 24 * 60 * 60 * 1000
    // ).toUTCString()}; path=/`;

    // localStorage.setItem("token", token);
    // localStorage.setItem("userId", userId);

    dispatch({ type: LOGIN_SUCCESS, payload: { user: data.user } });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
  }
};

// Register
export const register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });

    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.post(`/api/v1/register`, userData, config);

    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: { user: data.user },
    });
  } catch (error) {
    // console.log(error.response.data.error)
   dispatch({
     type: REGISTER_USER_FAIL,
     payload: error.response.data.message || error.response.data.error,
   });

  }
};
export const requests = (userData) => async (dispatch) => {
  try {
    dispatch({ type: USER_REQUEST });

    const config = { headers: { "Content-Type": "multipart/form-data" } };
    console.log(userData);
    const { data } = await axios.post(`/api/v1/requests`, userData, config);

    dispatch({
      type: USER_SUCCESS,
      payload: { requests: data },
    });
  } catch (error) {
    dispatch({
      type: USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// // Load User
// export const loadUser = () => async (dispatch) => {
//   try {
//     dispatch({ type: LOAD_USER_REQUEST });

//     const { data } = await api.get(`/api/v1/me`);

//     dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
//   } catch (error) {
//     dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
//   }
// };

// export const loadUser = () => async (dispatch, getState) => {
//   try {
//     dispatch({ type: LOAD_USER_REQUEST });

//     const { _id } = getState().persistedReducer.user;
//     console.log(_id);
//     const { data } = await api.get(`/api/v1/${_id}`);

//     dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
//   } catch (error) {
//     dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
//   }
// };

// // Logout User
export const logout = () => async (dispatch) => {
  try {
    await axios.get(`/api/v1/logout`);

    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
  }
};

// // Update Profile
// export const updateProfile = (userData) => async (dispatch) => {
//   try {
//     dispatch({ type: UPDATE_PROFILE_REQUEST });

//     const config = { headers: { "Content-Type": "multipart/form-data" } };

//     const { data } = await api.put(`/api/v1/updateup`, userData, config);

//     dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data.success });
//   } catch (error) {
//     dispatch({
//       type: UPDATE_PROFILE_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };

export const updateProfile = (userData, userId) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROFILE_REQUEST });
    // console.log(userData)
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    // console.log(userId);
    const updateprofileuser = `/api/v1/updateup/${userId}`;
    const { data } = await axios.put(updateprofileuser, userData, config);

    dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// // Update Password
export const updatePassword = (passwords, userId) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PASSWORD_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.put(
      `/api/v1/password/update/${userId}`,
      passwords,
      config
    );

    dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

// // Forgot Password
export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: FORGOT_PASSWORD_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(`/api/v1/password/forgot`, email, config);

    dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: data.message });
  } catch (error) {
    dispatch({
      type: FORGOT_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

// // Reset Password
export const resetPassword = (token, passwords) => async (dispatch) => {
  try {
    dispatch({ type: RESET_PASSWORD_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await api.put(
      `api/v1/password/reset/${token}`,
      passwords,
      config
    );

    dispatch({ type: RESET_PASSWORD_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: RESET_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

// // get All Users
// export const getAllUsers = () => async (dispatch) => {
//   try {
//     dispatch({ type: ALL_USERS_REQUEST });
//     const { data } = await axios.get(`/api/v1/admin/users`);

//     dispatch({ type: ALL_USERS_SUCCESS, payload: data.users });
//   } catch (error) {
//     dispatch({ type: ALL_USERS_FAIL, payload: error.response.data.message });
//   }
// };

// // get  User Details
// export const getUserDetails = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: USER_DETAILS_REQUEST });
//     const { data } = await axios.get(`/api/v1/admin/user/${id}`);

//     dispatch({ type: USER_DETAILS_SUCCESS, payload: data.user });
//   } catch (error) {
//     dispatch({ type: USER_DETAILS_FAIL, payload: error.response.data.message });
//   }
// };

// // Update User
// export const updateUser = (id, userData) => async (dispatch) => {
//   try {
//     dispatch({ type: UPDATE_USER_REQUEST });

//     const config = { headers: { "Content-Type": "application/json" } };

//     const { data } = await axios.put(
//       `/api/v1/admin/user/${id}`,
//       userData,
//       config
//     );

//     dispatch({ type: UPDATE_USER_SUCCESS, payload: data.success });
//   } catch (error) {
//     dispatch({
//       type: UPDATE_USER_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };

// // Delete User
// export const deleteUser = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: DELETE_USER_REQUEST });

//     const { data } = await axios.delete(`/api/v1/admin/user/${id}`);

//     dispatch({ type: DELETE_USER_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({
//       type: DELETE_USER_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
