import React, { Fragment, useState, useEffect } from "react";
import "../Register/ForgotPassword.css";
import Loader from "../Loader/Loader";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, forgotPasswordv } from "../../actions/vendorAction";
import { useAlert } from "react-alert";
import Metadata from "../Metadata";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const ForgotPasswordv = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const history = useHistory();
  const { error, message, loading } = useSelector(
    (state) => state.forgotPasswordv
  );
  //   const {} = useSelector(
  //     (state) => state.user
  //   );

  const [email, setEmail] = useState("");

  const forgotPasswordSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("email", email);
    dispatch(forgotPasswordv(myForm));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (message) {
      alert.success(message);
      history.push("/");
    }
  }, [dispatch, error, alert, message]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Metadata title="Forgot Password" />
          <div className="forgotPasswordContainer">
            <div className="forgotPasswordBox">
              <h2 className="forgotPasswordHeading">Forgot Password</h2>

              <form
                className="forgotPasswordForm"
                onSubmit={forgotPasswordSubmit}
              >
                <div className="forgotPasswordEmail">
                  <MailOutlineIcon />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <input
                  type="submit"
                  value="Send"
                  className="forgotPasswordBtn"
                />
              </form>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default ForgotPasswordv;
