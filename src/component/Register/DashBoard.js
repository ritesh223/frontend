import React, { useMemo, useState ,Fragment ,useEffect } from "react";
import "./dashboard.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { clearErrors, } from "../../actions/userAction";
import pp from "../../img/fabio-comparelli-uq2E2V4LhCY-unsplash.jpg";
import DashboardNav from "./DashboardNav";
import { Switch, Route } from "react-router-dom";
import Home from "../Home";
import Register from "./Register";
import Login_Detail from "./Dash_Nav_Comp/Login_Detail";
import Profile from "./Dash_Nav_Comp/Profile";
import YourPlans from "./Dash_Nav_Comp/YourPlans";
import Metadata from "../Metadata";
import Loader from "../Loader/Loader";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const DashBoard = () => {
  const history =useHistory();
  const dispatch = useDispatch();
  const { user, loading, isAuthenticatedUser ,error } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticatedUser === false || error) {

  
    dispatch(clearErrors());


      history.push("/reg");
    }
  }, [history, isAuthenticatedUser]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Metadata title={`${user.name}'s Profile`} />
          <div className="profileContainer">
            <div>
              <h1>My Profile</h1>
              <img src={user.avatar.url} alt={user.name} />
              <Link to="/updateup">Edit Profile</Link>
            </div>
            <div>
              <div>
                <h4>Full Name</h4>
                <p>{user.name}</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>{user.email}</p>
              </div>
              <div>
                <h4>Mobile Number</h4>
                <p>{user.MobileNumber}</p>
              </div>
              <div>
                <h4>Joined On</h4>
                <p>{String(user.createdAt).substr(0, 10)}</p>
              </div>

              <div>
                <Link to={`/orders/${user._id}`}>My Orders</Link>
                
                <Link to="/update/password">Change Password</Link>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default DashBoard;












// export default function DashBoard() {
//   const { pathname } = useLocation();

//   const ComponentToRender = useMemo(() => {
//     switch (pathname) {
//       case "/reg/profile":
//         return Profile;
//       case "/reg/details":
//         return Login_Detail;
//       case "/reg/plans":
//         return YourPlans;
//       default:
//         return () => <h3>Get Your Info!</h3>;
//     }
//   }, [pathname]);

//   const activeLink = pathname.split("/")[2];

//   return (
//     <>
//       <div className="dashboard">
//         {/* filters settings */}
//         <div className="nav_dashboard">
//           {/* <DashboardNav /> */}
//           <img
//             src={pp}
//             alt="profile img"
//             style={{
//               height: "100px",
//               width: "100px",
//               margin: "10px",
//               borderRadius: "50%",
//             }}
//           />
//           <h6 style={{ margin: "10px" }}>Personal Profile</h6>
//           <div>
//             <Link to="/reg/profile">
//               <h5
//                 className={`nav_dash ${
//                   activeLink === "profile" ? "active_dash" : ""
//                 }`}
//               >
//                 <i className="fa-solid fa-user"></i> Profile
//               </h5>
//             </Link>
//           </div>
//           <div>
//             <Link to="/reg/details">
//               <h5
//                 className={`nav_dash ${
//                   activeLink === "details" ? "active_dash" : ""
//                 }`}
//               >
//                 <i className="fa-solid fa-right-to-bracket"></i> Login Details
//               </h5>
//             </Link>
//           </div>
//           <div>
//             <Link to="/reg/plans">
//               <h5
//                 className={`nav_dash ${
//                   activeLink === "plans" ? "active_dash" : ""
//                 }`}
//               >
//                 <i className="fa-solid fa-map-location"></i> Your Plans
//               </h5>
//             </Link>
//           </div>
//         </div>

//         <div className="horizontal" style={{ marginLeft: "30px" }}></div>

//         {/* showing all the hotels available */}
//         <div className="edit_details">
//           <ComponentToRender />
//         </div>
//       </div>
//     </>
//   );
// }


// export default function DashBoard() {
//   let loct = useLocation();
//   return (
//     <>
//       <div className="dashboard">
//         {/* filters settings */}
//         <div className="nav_dashboard">
//           {/* <DashboardNav /> */}
//           <img
//             src={pp}
//             alt="profile img"
//             style={{
//               height: "100px",
//               width: "100px",
//               margin: "10px",
//               borderRadius: "50%",
//             }}
//           />
//           <h6 style={{ margin: "10px" }}>Personal Profile</h6>
//           <div>
//             <Link to="/reg/profile">
//               {" "}
//               <h5
//                 className={`nav_dash ${
//                   loct.pathname === "/reg/profile" ? "active_dash" : ""
//                 }`}
//               >
//                 <i class="fa-solid fa-user"></i> Profile
//               </h5>
//             </Link>
//           </div>
//           <div>
//             <Link to="/reg/details">
//               <h5
//                 className={`nav_dash ${
//                   loct.pathname === "/reg/details" ? "active_dash" : ""
//                 }`}
//               >
//                 <i class="fa-solid fa-right-to-bracket"></i> Login Details
//               </h5>
//             </Link>
//           </div>
//           {/* <div>
//             <Link to="/reg/plans">
//               {" "}
//               <h5
//                 className={`nav_dash ${
//                   loct.pathname === "/reg/plans" ? "active_dash" : ""
//                 }`}
//               >
//                 <i class="fa-solid fa-map-location"></i> Your Plans
//               </h5>
//             </Link>
//           </div> */}
//         </div>

//         <div className="horizontal" style={{ marginLeft: "30px" }}></div>

//         {/* showing all the hotels available */}
//         <div className="edit_details">
//           <Switch>
//             {/* <Route exact path="/reg/profile" component={Profile} />
//             <Route exact path="/reg/details" component={Login_Detail} />
//             <Route exact path="/reg/plans" component={YourPlans} /> */}
//           </Switch>
//         </div>
//       </div>
//     </>
//   );
// }

// import React from "react";
// import "./dashboard.css";
// import DashboardNav from "./DashboardNav";
// import { Outlet } from "react-router-dom";
// import Home from "../Home";
// import Register from "./Register";

// export default function DashBoard() {
//   return (
//     <>
//       <div className="dashboard">
//         {/* filters settings */}
//         <div className="nav_dashboard">
//           <DashboardNav />
//         </div>

//         <div className="horizontal" style={{ marginLeft: "30px" }}></div>

//         {/* showing all the hotels available */}
//         <div className="edit_details">
//           <Outlet />
//         </div>
//       </div>
//     </>
//   );
// }