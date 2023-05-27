// import { persistStore } from "redux-persist";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  SAVE_SHIPPING_INFO,
  ADD_TO_CART1,
  REMOVE_CART_ITEM1,
} from "../constants/cartConstants";
// import CryptoJS from "crypto-js";
import axios from "axios";
// const api = axios.create({
//   baseURL: "http://localhost:4000",
// });

// const secretKey = process.env.REACT_APP_SECRET_KEY;
// Add to Cart
// export const addItemsToCart =
//   (id, quantity, roomType, price) => async (dispatch, getState) => {
//     const { data } = await axios.get(`/api/v1/product/${id}`);

//     dispatch({
//       type: ADD_TO_CART,
//       payload: {
//         product: data.product._id,
//         name: data.product.name,
//         price: data.product.price,
//         image: data.product.images[0].url,
//         stock: data.product.Stock,
//         quantity,
//         roomType,
//         price,
//         vendor: data.product.vendor,
//         type: data.product.type,
//       },
//     });

//     const cartItems = getState().cart.cartItems;
//     const encryptedCartItems = CryptoJS.AES.encrypt(
//       JSON.stringify(cartItems),
//       "048945cc9bb4d6faa8298e0c2476af494ebbcd490be5c104f658ec7e57284f0f"
//     ).toString();
//     localStorage.setItem("cartItems", encryptedCartItems);
//   };

// export const addItemsToCart1 =
//   (id, quantity, Category, price) => async (dispatch, getState) => {
//     const { data } = await axios.get(`/api/v1/product1/${id}`);

//     dispatch({
//       type: ADD_TO_CART1,
//       payload: {
//         product1: data.product1._id,
//         name: data.product1.name,
//         price: data.product1.price,
//         image: data.product1.images[0].url,
//         stock: data.product1.Stock,
//         quantity,
//         Category,
//         price,
//         vendor: data.product1.vendor,
//         type: data.product1.type,
//       },
//     });
//     const cartItems = getState().cart.cartItems;
//     const encryptedCartItems = CryptoJS.AES.encrypt(
//       JSON.stringify(cartItems),
//       "048945cc9bb4d6faa8298e0c2476af494ebbcd490be5c104f658ec7e57284f0f"
//     ).toString();
//     localStorage.setItem("cartItems", encryptedCartItems);
//     // localStorage.setItem(
//     //   "cartItems",
//     //   JSON.stringify(getState().cart.cartItems)
//     // );
//   };
export const addItemsToCart = (id, quantity , roomType , price) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/v1/product/${id}`);

  dispatch({
    type: ADD_TO_CART,
    payload: {
      product: data.product._id,
      name: data.product.name,
      price: data.product.price,
      image: data.product.images[0].url,
      stock: data.product.Stock,
      quantity,
      roomType,
      // eslint-disable-next-line
      price,
      vendor: data.product.vendor,
      type: data.product.type,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
export const addItemsToCart1 =
  (id, quantity, Category, price) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/v1/product1/${id}`);

    dispatch({
      type: ADD_TO_CART1,
      payload: {
        product1: data.product1._id,
        name: data.product1.name,
        price: data.product1.price,
        image: data.product1.images[0].url,
        stock: data.product1.Stock,
        quantity,
        Category,
        // eslint-disable-next-line
        price,
        vendor: data.product1.vendor,
        type: data.product1.type,
      },
    });

    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  };

// REMOVE FROM CART
export const removeItemsFromCart =
  (price, roomType) => async (dispatch, getState) => {
    // console.log(price)
    // console.log(roomType)
    dispatch({
      type: REMOVE_CART_ITEM,
      payload: { price, roomType },
    });

    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  };
export const removeItemsFromCart1 = (id) => async (dispatch, getState) => {
  // console.log(price)
  // console.log(roomType)
  dispatch({
    type: REMOVE_CART_ITEM1,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// // SAVE SHIPPING INFO
export const saveShippingInfo = (data) => async (dispatch) => {
  dispatch({
    type: SAVE_SHIPPING_INFO,
    payload: data,
  });

  // const dataString = JSON.stringify(dataxios

  // // Encrypt the data
  // const encryptedData = CryptoJS.AES.encrypt(
  //   dataString,
  //   "048945cc9bb4d6faa8298e0c2476af494ebbcd490be5c104f658ec7e57284f0f"
  // ).toString();

  // Store the encrypted data in local storage
  localStorage.setItem("shippingInfo", JSON.stringify(data));
};
