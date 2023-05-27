import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import CryptoJS from 'crypto-js';
import {
  newProductReducer,
  newReviewReducer,
  productDetailsReducer,
  productReducer,
  productReviewsReducer,
  productsReducer,
  reviewReducer,
  vendorproductsReducer,
  vendorproducts1Reducer,
  productReviewsReducer1,
  reviewReducer1
} from "./reducers/productReducer";
import { products1Reducer,guidesReducer,product1DetailsReducer ,newReview1Reducer ,productReducer1 , newProductReducer1} from "./reducers/Product1Reducer";
import {
  allUsersReducer,
  forgotPasswordReducer,
  profileReducer,
  userDetailsReducer,
  userReducer,
  userRequests,
} from "./reducers/userReducer";
import { vendorReducer ,forgotPasswordReducerv , profileReducerv, vendorReducer1 , profileReducerv1 , forgotPasswordReducerv1} from "./reducers/vendorReducer";

import { newOrderReducer , myOrdersReducer ,orderDetailsReducer , allOrdersReducer,orderReducer} from "./reducers/orderReducer";
import { cartReducer } from "./reducers/cartReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["vendor", "user", "guide", "profile", "profilev", "profileg"],
  expires: 60 * 1000, // 1 minute in milliseconds
};


const reducer = combineReducers({
  vendor:vendorReducer,
  guide : vendorReducer1,
  products: productsReducer,
  product1Details: product1DetailsReducer,
  products1: products1Reducer,
  guides: guidesReducer,
  user: userReducer,
  requests : userRequests,
  vendorproducts: vendorproductsReducer,
  vendorproducts1: vendorproducts1Reducer,
  productDetails: productDetailsReducer,
  profile: profileReducer,
  profilev: profileReducerv,
  profileg : profileReducerv1,
  forgotPassword: forgotPasswordReducer,
  forgotPasswordv: forgotPasswordReducerv,
  forgotPasswordg: forgotPasswordReducerv1,
  cart: cartReducer,
  newOrder: newOrderReducer,
  myOrders: myOrdersReducer,
  orderDetails: orderDetailsReducer,
  newReview: newReviewReducer,
  newReview1:newReview1Reducer,
  newProduct: newProductReducer,
  newProduct1: newProductReducer1,
  product: productReducer,
  product1: productReducer1,
  allOrders: allOrdersReducer,
  order: orderReducer,
  // allUsers: allUsersReducer,
  // userDetails: userDetailsReducer,
  productReviews: productReviewsReducer,
  productReviews1: productReviewsReducer1,
  review: reviewReducer,
  review1: reviewReducer1,
});

// let initialState = {
//   cart: {
//     cartItems: (() => {
//       // Retrieve the encrypted cart items from local storage
//       const encryptedCartItem = localStorage.getItem("cartItems");

//       // Decrypt the cart items
//       const decryptedCartItemBytes = CryptoJS.AES.decrypt(
//         encryptedCartItem,
//         "048945cc9bb4d6faa8298e0c2476af494ebbcd490be5c104f658ec7e57284f0f"
//       );
//       const decryptedCartItemString = decryptedCartItemBytes.toString(
//         CryptoJS.enc.Utf8
//       );

//       // Parse the decrypted cart item string back to an object
//       const cartItems = decryptedCartItemString
//         ? JSON.parse(decryptedCartItemString)
//         : [];

//       return cartItems;
//     })(),
//     shippingInfo: localStorage.getItem("shippingInfo")
//       ? JSON.parse(localStorage.getItem("shippingInfo"))
//       : {},
//   },
// };
let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  },
};

const persistedReducer = persistReducer(persistConfig, reducer);

const middleware = [thunk];

const store = createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

const persistor = persistStore(store, null, () => {
  const expirationTimestamp = localStorage.getItem("stateExpiration");

  if (expirationTimestamp && Date.now() > parseInt(expirationTimestamp)) {
    // State has expired, clear the persisted state
    persistor.purge();
    localStorage.removeItem("stateExpiration");
  }
});

// Set the expiration timestamp when persisting the state
persistor.subscribe(() => {
  const expirationTime = Date.now() + 60 * 1000; // Set expiration time to 1 minute from now
  localStorage.setItem("stateExpiration", expirationTime);
});
export { store, persistor };


































// import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// import {
//     newProductReducer,
//     newReviewReducer,
//     productDetailsReducer,
//     productReducer,
//     productReviewsReducer,
//     productsReducer,
//     reviewReducer,
// } from "./reducers/productReducer";

// import {
//     allUsersReducer,
//     forgotPasswordReducer,
//     profileReducer,
//     userDetailsReducer,
//     userReducer,
// } from "./reducers/userReducer";

// // import { cartReducer } from "./reducers/cartReducer";
// // import {
// //     allOrdersReducer,
// //     myOrdersReducer,
// //     newOrderReducer,
// //     orderDetailsReducer,
// //     orderReducer,
// // } from "./reducers/orderReducer";

// const reducer = combineReducers({
//     products: productsReducer,
//     productDetails: productDetailsReducer,
//     user: userReducer,
//     profile: profileReducer,
//     // forgotPassword: forgotPasswordReducer,
//     // cart: cartReducer,
//     // newOrder: newOrderReducer,
//     // myOrders: myOrdersReducer,
//     // orderDetails: orderDetailsReducer,
//     // newReview: newReviewReducer,
//     // newProduct: newProductReducer,
//     // product: productReducer,
//     // allOrders: allOrdersReducer,
//     // order: orderReducer,
//     // allUsers: allUsersReducer,
//     // userDetails: userDetailsReducer,
//     // productReviews: productReviewsReducer,
//     // review: reviewReducer,
// });

// let initialState = {
//     // cart: {
//     //     cartItems: localStorage.getItem("cartItems")
//     //         ? JSON.parse(localStorage.getItem("cartItems"))
//     //         : [],
//     //     shippingInfo: localStorage.getItem("shippingInfo")
//     //         ? JSON.parse(localStorage.getItem("shippingInfo"))
//     //         : {},
//     // },
// };

// const middleware = [thunk];

// const store = createStore(
//     reducer,
//     initialState,
//     composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;
