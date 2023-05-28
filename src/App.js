import './App.css';
import { useEffect , useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import React from 'react';
import Home from '../src/component/Home';
import Shipping from '../src/component/Shipping';
import OrderSuccess from '../src/component/OrderSuccess';
import Payment from '../src/component/Payment';
import ConfirmOrder from '../src/component/ConfirmOrder';
import Navbar from '../src/component/Navbar'
import Cart from './component/Carts/Cart'
import Register from './component/Register/Register';
import MyOrders from './component/Register/MyOrders';
import OrderDetails from './component/Register/OrderDetails';
import Hotel from './component/Hotel';
import Footer from './component/footer';
import Book_hotel from './component/Hotels/Book_Hotel/Book_hotel';
import Book_guide from './component/Guides/Book_guide';
import axios from "axios";
import Become_Seller from './component/Become_Seller';
import Activity from './component/Activity';
import Book_Activity from './component/Activity/Book_Activity/Book_Activity';
import Activity_booked from './component/Activity/Book_Activity/Activity_booked';
import Vendor_Register from './component/Seller/Vendor_Register';
import DashBoard from './component/Register/DashBoard';
import Profile from './component/Register/Dash_Nav_Comp/Profile';
import Login_Detail from './component/Register/Dash_Nav_Comp/Login_Detail';
import YourPlans from './component/Register/Dash_Nav_Comp/YourPlans';
import Guide from './component/Guide';
import Vendor from './component/Vendor';
import Footerpolicy from './component/Footerpolicy';
import Guide_Register from './component/Guides/Guide_Register';
import UpdateProfile from "./component/Register/UpdateProfile";
import UpdatePassword from "./component/Register/UpdatePassword";
import ForgotPassword from "./component/Register/ForgotPassword";
import ResetPassword from "./component/Register/ResetPassword";
import { store, persistor } from "./Backstore";
import MyComponent from './component/MyComponent';
import { ToastContainer } from "react-toastify";
import NotFound from './component/Not Found/NotFound';
// import Hotel_romm from './component/Hotels/Book_Hotel/Hotel_room';
import Backstore from './Backstore';
import ProductDetails from './component/Hotels/Book_Hotel/ProductDetails';
import WebFont from "webfontloader";
import { loadUser } from './actions/userAction';
import UserOptions from "./component/UserOptions";
import VendorOptions from './component/VendorOptions';
import ProtectedRoute from './component/ProtectedRoute';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Restaurants from './component/Home/Restaurants';
import Restshow from './component/Home/Restshow';
import Packagesearch from './component/Packages/Packagesearch';
import Book_Package from './component/Packages/Book_Package';
import Dashboardvendor from './component/Vendors/Dashboardvendor'
import NewProduct from './component/Vendors/NewProduct';
import ProductList from './component/Vendors/ProductList';
import UpdateProduct from './component/Vendors/UpdateProduct';
import OrderList from './component/Vendors/OrderList';
import ProcessOrder from './component/Vendors/ProcessOrder';
import ProductDetails1 from './component/Packages/ProductDetails1';
import ForgotPasswordv from './component/Vendors/ForgotPasswordv';
import ForgotPasswordg from './component/Vendors/ForgotPasswordg';
import ResetPasswordv from './component/Vendors/ResetPasswordv';
import ResetPasswordg from './component/Vendors/ResetPasswordg';
import DashBoardv from './component/Vendors/DashBoardv';
import UpdatevProfile from './component/Vendors/UpdatevProfile';
import UpdatevPassword from './component/Vendors/UpdatevPassword';
import ProductList1 from './component/Vendors/ProductList1';
import UpdateProduct1 from './component/Vendors/UpdateProduct1';
import NewProduct1 from './component/Vendors/NewProduct1';
import DashBoardg from './component/Vendors/DashBoardg';
import GuideOptions from "./component/GuideOptions";
import UpdategProfile from './component/Vendors/UpdategProfile';
import UpdategPassword from './component/Vendors/UpdategPassword';
import Book_Guide from './component/Packages/Book_Guide';
import AdminDashboard from './component/AdminDashboard';
import ProductReviews from './component/Vendors/ProductReviews';
import Product1Reviews from './component/Vendors/Product1Reviews';
import Requests from './component/Register/Requests';
import UserRequests from './component/Register/UserRequests';

function App() {

  // const [stripeApiKey, setStripeApiKey] = useState("");
//  async function getStripeApiKey() {
//   //  const { data } = await axios.get("/api/v1/stripeapikey");
//   // console.log(data);
//   //  setStripeApiKey(data.stripeApiKey);
//  }

  const { isAuthenticatedUser, user } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);
  const { isAuthenticatedVendor, vendor } = useSelector((state) => state.vendor);
  const { isAuthenticatedGuide, guide } = useSelector((state) => state.guide);
   const history = useHistory();
   const stripeApiKey =
     "pk_test_51N416mSBmiMRRjWK1284Lfelo29Ebz0075Sp7ax0iS1JQTaLwXv3Ni0RSgEqJwIXCOfHH7QjeR7UFjBRIuzaDcve00zOEUIFhq";
const handleSuccessRoute = () => {
  // Replace the current route with the `/success` route
  history.replace("/success");
};
useEffect(()=>{
   WebFont.load({
     google: {
       families: ["Roboto", "Droid Sans", "Chilanka"],
     },
   });
// store.dispatch(loadUser());  
  // getStripeApiKey();   
},[])
// window.addEventListener("contextmenu", (e) => e.preventDefault());
  return (
    <>
      <Router>
        {isAuthenticatedUser ||
        (!isAuthenticatedVendor && !isAuthenticatedGuide) ? (
          <Navbar />
        ) : null}

        {isAuthenticatedUser && <UserOptions user={user} />}
        {isAuthenticatedVendor && <VendorOptions vendor={vendor} />}
        {isAuthenticatedGuide && <GuideOptions guide={guide} />}

        {stripeApiKey && cartItems.length > 0 && (
          <Elements stripe={loadStripe(stripeApiKey)}>
            <ProtectedRoute
              exact
              path="/process/payment"
              component={Payment}
              history={history}
            />
          </Elements>
        )}

        <Switch>
          <Route exact path="/">
            {isAuthenticatedUser ? (
              <Home />
            ) : isAuthenticatedVendor ? (
              <Dashboardvendor />
            ) : isAuthenticatedGuide ? (
              <DashBoardg />
            ) : (
              <Home />
            )}
          </Route>

          <Route exact path="/vendor/dashboard/:id">
            {isAuthenticatedVendor ? <DashBoardv /> : <NotFound />}
          </Route>
          <Route exact path="/userrequests">
            {isAuthenticatedVendor ? <UserRequests /> : <NotFound />}
          </Route>
          <Route exact path="/dashboard">
            {isAuthenticatedUser ? <DashBoard /> : null}
          </Route>
          <Route exact path="/request">
            {isAuthenticatedUser ? <Requests /> : <NotFound />}
          </Route>
          <Route exact path="/guide_dashboard">
            {isAuthenticatedGuide ? <DashBoardg /> : null}
          </Route>
          <Route exact path="/updateup">
            {isAuthenticatedUser ? <UpdateProfile /> : null}
          </Route>
          <Route exact path="/updatevp">
            {isAuthenticatedVendor ? <UpdatevProfile /> : null}
          </Route>
          <Route exact path="/updategp">
            {isAuthenticatedGuide ? <UpdategProfile /> : null}
          </Route>
          <Route exact path="/update/password">
            {isAuthenticatedUser ? <UpdatePassword /> : <NotFound />}
          </Route>
          <Route exact path="/updatev/password">
            {isAuthenticatedVendor ? <UpdatevPassword /> : <NotFound />}
          </Route>
          <Route exact path="/updateg/password">
            {isAuthenticatedGuide ? <UpdategPassword /> : <NotFound />}
          </Route>

          <Route exact path="/shipping">
            {isAuthenticatedUser && cartItems.length > 0 ? (
              <Shipping />
            ) : (
              <NotFound />
            )}
          </Route>

          {/* <Route exact path="/process/payment">
            <Payment />
          </Route> */}
          <Route exact path="/password/forgot">
            <ForgotPassword />
          </Route>
          <Route exact path="/password/forgotv">
            <ForgotPasswordv />
          </Route>
          <Route exact path="/password/forgotg">
            <ForgotPasswordg />
          </Route>
          <Route exact path="/password/reset/:token">
            <ResetPassword />
          </Route>
          <Route exact path="/password/resetv/:token1">
            <ResetPasswordv />
          </Route>
          <Route exact path="/password/resetg/:token2">
            <ResetPasswordg />
          </Route>
          <Route exact path="/reg">
            <Register history={history} />
          </Route>
          <Route exact path="/reg/profile">
            <Profile />
          </Route>
          <Route exact path="/reg/details">
            <Login_Detail />
          </Route>
          <Route exact path="/reg/plans">
            <YourPlans />
          </Route>
          <Route exact path="/hotel">
            <Hotel />
          </Route>
          {/* <Route exact path="/me">
          
          </Route> */}

          <Route exact path="/activity">
            <Activity />
          </Route>
          <Route exact path="/activity/:keyword">
            <Book_Activity />
          </Route>
          <Route exact path="/Activity_booked">
            <Activity_booked />
          </Route>
          <Route exact path="/packages">
            <Packagesearch />
          </Route>
          {/* <Route exact path="/book_hotel">
            <Book_hotel />
          </Route> */}
          <Route path="/book_hotel/:keyword">
            <Book_hotel />
          </Route>
          <Route path="/packages/:keyword/:currcity">
            <Book_Package />
          </Route>
          <Route path="/guide/:keyword">
            <Book_Guide />
          </Route>

          <Route path="/restaurants/:keyword">
            <Restshow />
          </Route>
          <Route exact path="/product/:id">
            <ProductDetails />
          </Route>
          <Route exact path="/package/:id">
            <ProductDetails1 />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/seller">
            {!isAuthenticatedUser && !isAuthenticatedVendor ? (
              <Become_Seller />
            ) : (
              <NotFound />
            )}
          </Route>

          <Route exact path="/vendor_register">
            <Vendor_Register history={history} />
          </Route>
          <Route exact path="/guide_register">
            <Guide_Register history={history} />
          </Route>
          <Route exact path="/guidesearch">
            <Guide />
          </Route>
          <Route exact path="/vendor">
            {isAuthenticatedVendor ? <Dashboardvendor /> : <NotFound />}
          </Route>
          <Route exact path="/vendor/reviews">
            {isAuthenticatedVendor ? <ProductReviews /> : <NotFound />}
          </Route>
          <Route exact path="/vendor/reviews1">
            {isAuthenticatedVendor ? <Product1Reviews /> : <NotFound />}
          </Route>
          <Route exact path="/mycomponent">
            <MyComponent />
          </Route>
          <Route exact path="/book_guide">
            {isAuthenticatedUser ? <Book_guide /> : null}
          </Route>
          <Route exact path="/restaurants">
            <Restaurants />
          </Route>
          <Route exact path="/faqs">
            <Footerpolicy />
          </Route>
          <Route exact path="/admin/dashboard">
            <AdminDashboard />
          </Route>
          <ProtectedRoute exact path="/success">
            <OrderSuccess />
          </ProtectedRoute>
          <Route exact path="/orders/:id">
            {isAuthenticatedUser ? <MyOrders /> : <NotFound />}
          </Route>

          <ProtectedRoute exact path="/order/confirm">
            {isAuthenticatedUser && cartItems.length > 0 ? (
              <ConfirmOrder />
            ) : (
              <NotFound />
            )}
          </ProtectedRoute>

          <ProtectedRoute exact path="/order/:id">
            {isAuthenticatedUser ? <OrderDetails /> : <NotFound />}
          </ProtectedRoute>

          <Route exact path="/vendor/product/new">
            {isAuthenticatedVendor ? <NewProduct /> : <NotFound />}
          </Route>
          <Route exact path="/vendor/product1/new">
            {isAuthenticatedVendor ? <NewProduct1 /> : <NotFound />}
          </Route>
          <Route exact path="/vendor/products/:id">
            {isAuthenticatedVendor ? <ProductList /> : <NotFound />}
          </Route>
          <Route exact path="/vendor/products1/:id">
            {isAuthenticatedVendor ? <ProductList1 /> : <NotFound />}
          </Route>
          <Route exact path="/vendor/orders/:id">
            {isAuthenticatedVendor ? <OrderList /> : <NotFound />}
          </Route>
          <Route exact path="/vendor/order/:id">
            {isAuthenticatedVendor ? <ProcessOrder /> : <NotFound />}
          </Route>
          <Route exact path="/vendor/product/:id">
            {isAuthenticatedVendor ? <UpdateProduct /> : <NotFound />}
          </Route>
          <Route exact path="/vendor/product1/:id">
            {isAuthenticatedVendor ? <UpdateProduct1 /> : <NotFound />}
          </Route>
          <Route
            render={({ location }) =>
              location.pathname === "/process/payment" ? null : <NotFound />
            }
          />
          <Route component={NotFound} />

          {/* <Elements stripe={loadStripe(stripeApiKey)}>
            <ProtectedRoute exact path="/process/payment">
              <Payment />
            </ProtectedRoute>
          </Elements> */}
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;