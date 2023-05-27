import React, { useMemo, useState, Fragment, useEffect } from "react";
import "../Register/dashboard.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { clearErrors } from "../../actions/vendorAction";

import Metadata from "../Metadata";
import Loader from "../Loader/Loader";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const DashBoardv = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { vendor, loading, isAuthenticatedVendor, error } = useSelector(
    (state) => state.vendor
  );

  useEffect(() => {
    if (isAuthenticatedVendor === false || error) {
      dispatch(clearErrors());

      history.push("/vendor_register");
    }
  }, [history, isAuthenticatedVendor]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Metadata title={`${vendor.name}'s Profile`} />
          <div className="profileContainer">
            <div>
              <h1>My Profile</h1>
              <img src={vendor.avatar.url} alt={vendor.name} />
              <Link to="/updatevp">Edit Profile</Link>
            </div>
            <div>
              <div>
                <h4>Full Name</h4>
                <p>{vendor.name}</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>{vendor.email}</p>
              </div>
              <div>
                <h4>Mobile Number</h4>
                <p>{vendor.MobileNumber}</p>
              </div>
              <div>
                <h4>GST Number</h4>
                <p>{vendor.GSTNumber}</p>
              </div>
              <div>
                <h4>PAN Number</h4>
                <p>{vendor.PanNumber}</p>
              </div>
              <div>
                <h4>Joined On</h4>
                <p>{String(vendor.createdAt).substr(0, 10)}</p>
              </div>

              <div>
                {/* <Link to="/orders">My Orders</Link> */}
                <Link to="/updatev/password">Change Password</Link>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default DashBoardv;

