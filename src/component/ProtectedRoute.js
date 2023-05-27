import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, component: Component, ...rest }) => {
  const { loading, isAuthenticatedUser, user } = useSelector((state) => state.user);
  const {  isAuthenticatedVendor, vendor } = useSelector((state) => state.vendor);

  return (
    <Fragment>
      {loading === false && (
        <Route
          {...rest}
          render={(props) => {
            if (isAuthenticatedUser === false ) {
              return <Redirect to="/" />;
            }

            // if (isAdmin === true && user.role !== "admin") {
            //   return <Redirect to="/" />;
            // }

            return <Component {...props} />;
          }}
        />
      )}
    </Fragment>
  );
};

export default ProtectedRoute;
