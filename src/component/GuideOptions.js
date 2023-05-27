import React, { Fragment, useState } from "react";
import "./UserOptions.css";
import { SpeedDial, SpeedDialAction } from "@material-ui/lab";
import Backdrop from "@material-ui/core/Backdrop";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ListAltIcon from "@material-ui/icons/ListAlt";
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useHistory } from "react-router-dom";
import { useAlert } from "react-alert";
// import { logout } from "../actions/userAction";

import { useDispatch, useSelector } from "react-redux";
import { logout1 } from "../actions/vendorAction";

const GuideOptions = ({ guide }) => {
  // const { cartItems } = useSelector((state) => state.cart);

  const [open, setOpen] = useState(false);
  const history = useHistory();
  const alert = useAlert();
  const dispatch = useDispatch();

  const options = [
    // { icon: <ListAltIcon />, name: "YourOrders", func: orders },
    { icon: <PersonIcon />, name: "Profile", func: account },

    { icon: <ExitToAppIcon />, name: "Logout", func: logoutVendor },
  ];

  // if (user.role === "admin") {
  //   options.unshift({
  //     icon: <DashboardIcon />,
  //     name: "Dashboard",
  //     func: dashboard,
  //   });
  // }

  // function dashboard() {
  //   history.push("/admin/dashboard");
  // }

//   function orders() {
//     history.push(`/vendor/orders/${vendor._id}`);
//   }
  function account() {
    history.push(`/guide_dashboard`);
  }
  // function cart() {
  //   history.push("/cart");
  // }
  function logoutVendor() {
    dispatch(logout1());
    alert.success("Logout Successfully");
    history.push("/");
  }

  return (
    <Fragment>
      <Backdrop open={open} style={{ zIndex: "10" }} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        // style={{ zIndex: "11" }}
        open={open}
        direction="down"
        className="speedDial"
        icon={
          <img
            className="speedDialIcon"
            src={
              guide.avatar && guide.avatar.url
                ? guide.avatar.url
                : "/logo192.png"
            }
            alt="Profile"
          />
        }
      >
        {options.map((item) => (
          <SpeedDialAction
            key={item.name}
            icon={item.icon}
            tooltipTitle={item.name}
            onClick={item.func}
            tooltipOpen={window.innerWidth <= 600 ? true : false}
          />
        ))}
      </SpeedDial>
    </Fragment>
  );
};

export default GuideOptions;
