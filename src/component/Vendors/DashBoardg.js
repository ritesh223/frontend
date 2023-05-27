import React, { useMemo, useState, Fragment, useEffect } from "react";
import "../Register/dashboard.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { clearErrors } from "../../actions/vendorAction";

import Metadata from "../Metadata";
import Loader from "../Loader/Loader";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const DashBoardg = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { guide, loading, isAuthenticatedGuide, error } = useSelector(
    (state) => state.guide
  );

  useEffect(() => {
    if (isAuthenticatedGuide === false || error) {
      dispatch(clearErrors());

      history.push("/guide_register");
    }
  }, [history, isAuthenticatedGuide]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Metadata title={`${guide.name}'s Profile`} />
          <div className="profileContainer">
            <div>
              <h1>My Profile</h1>
              <img src={guide.avatar.url} alt={guide.name} />
              <Link to="/updategp">Edit Profile</Link>
            </div>
            <div>
              <div>
                <h4>Full Name</h4>
                <p>{guide.name}</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>{guide.email}</p>
              </div>
              <div>
                <h4>Mobile Number</h4>
                <p>{guide.MobileNumber}</p>
              </div>
              <div>
                <h4>Status</h4>
                <p>{guide.status}</p>
              </div>
              <div>
                <h4>Current Location</h4>
                <p>{guide.currloc}</p>
              </div>
              <div>
                <h4>Joined On</h4>
                <p>{String(guide.createdAt).substr(0, 10)}</p>
              </div>

              <div>
                {/* <Link to="/orders">My Orders</Link> */}
                <Link to="/updateg/password">Change Password</Link>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default DashBoardg;
