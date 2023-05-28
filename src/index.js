import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "react-toastify/dist/ReactToastify.css";
import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Backstore from "./Backstore";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./Backstore"; // Import store and persistor
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { ToastContainer } from "react-toastify";

// const MySwal = withReactContent(Swal);
// console.log("Server running on http://localhost:3000");

const options = {
  timeout: 5000,
  position: positions.MIDDLE,
  transition: transitions.FADE,
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AlertProvider template={AlertTemplate} {...options}>
        <App />
        <ToastContainer />
      </AlertProvider>
    </PersistGate>
  </Provider>
);

reportWebVitals();





























// import './index.css';
// import reportWebVitals from './reportWebVitals';
// import "react-toastify/dist/ReactToastify.css";
// import { positions, transitions, Provider as AlertProvider } from "react-alert";
// import AlertTemplate from "react-alert-template-basic";
// import Backstore from './Backstore';
// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { Provider } from "react-redux";
// import Swal from 'sweetalert2';
// import withReactContent from 'sweetalert2-react-content';
// import { ToastContainer } from "react-toastify";
// const MySwal = withReactContent(Swal);
// console.log("Server running on http://localhost:3000");
// const options = {
//   timeout: 5000,
//   position: positions.MIDDLE,
//   transition: transitions.FADE,
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={Backstore}>
//    <AlertProvider template={AlertTemplate} {...options}>

//     <App />
//    </AlertProvider>

//   </Provider>
// );

// reportWebVitals();
