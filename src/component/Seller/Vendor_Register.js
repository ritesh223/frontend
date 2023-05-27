// import React from 'react'
import './vendor_register.css'
import { useAlert } from "react-alert";
import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom/cjs/react-router-dom';
import Loader from '../Loader/Loader';
import { clearErrors, loginv ,registerv} from '../../actions/vendorAction';
import { useHistory, useLocation } from "react-router-dom";
import Metadata from '../Metadata';
export default function Vendor_Register() {
  const alert = useAlert();
  const history = useHistory();
  const dispatch = useDispatch();
  const { error, isAuthenticatedVendor, token1 , loading} = useSelector(
    (state) => state.vendor
  );


// const loading = false;
const [loginEmail, setLoginEmail] = useState("");
const [loginPassword, setLoginPassword] = useState("");
const [vendor, setVendor] = useState({
  name: "",
  email: "",
  password: "",
  MobileNumber: "",
  PanNumber :"",
  GSTNumber :"",
});
const { name, email, password, MobileNumber, PanNumber,GSTNumber } = vendor;
const [avatar, setAvatar] = useState("/logo192.png");
const [avatarPreview, setAvatarPreview] = useState("/logo192.png");

const loginSubmit = (e) => {
  e.preventDefault();
  dispatch(loginv(loginEmail, loginPassword));
};
const registerSubmit = (e) => {
  e.preventDefault();
  const myForm = new FormData();
  myForm.set("name", name);
  myForm.set("email", email);
  myForm.set("password", password);
  myForm.set("MobileNumber", MobileNumber);
  myForm.set("PanNumber", PanNumber);
  myForm.set("GSTNumber", GSTNumber);
  myForm.set("avatar", avatar);
  console.log([...myForm]);
  dispatch(registerv(myForm));
};
useEffect(() => {
  if (error) {
    alert.error(error);
    dispatch(clearErrors());
  }

  if (isAuthenticatedVendor) {
   
    history.push("/vendor");
  }
}, [dispatch, error, history, alert, isAuthenticatedVendor]);
const registerDataChange = (e) => {
  if (e.target.name === "avatar") {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
        setAvatar(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  } else {
    setVendor({ ...vendor, [e.target.name]: e.target.value });
  }
};
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Metadata title="Vendor Login" />
          <div className="headline">
            <h2>Vendor Login/Signup</h2>
          </div>
          <div className="container" id="vendor_register-container">
            <div className="row" id="vendor_register-row">
              <div className="col" id="vendor_login">
                <div className="container">
                  <form className="login_form" onSubmit={loginSubmit}>
                    <h2>Welcome Back !</h2>
                    <h4 style={{ fontFamily: "Times", color: "whitesmoke" }}>
                      Ready To Grow Your Business{" "}
                      <i className="fa-solid fa-face-smile"></i>
                    </h4>
                    <h4>LogIn With Email ID</h4>
                    <div className="mb-3 mx-3 my-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        required
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                      />
                      <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                      </div>
                    </div>
                    <div className="mb-3 mx-3 my-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        required
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                      />
                      <div id="emailHelp" className="form-text">
                        Your password is protected.
                      </div>
                      <Link className="forgotuserpass" to="/password/forgotv">
                        Forget Password ?
                      </Link>
                    </div>
                    <button
                      type="submit"
                      id="register_btn1"
                      className="btn btn-outline-primary register_btn1 mx-3 my-3"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
              <div className="col" id="signup">
                <div className="container">
                  <form
                    className="singup_form"
                    onSubmit={registerSubmit}
                    encType="multipart/form-data"
                  >
                    <h3>
                      <small>New Here?</small> Don't Worry ! Grow Your Business
                      with <small> Budget Trip</small>
                    </h3>
                    <h3>Create a New Account</h3>
                    <div className="mb-2 mx-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputName1"
                        required
                        value={name}
                        onChange={registerDataChange}
                        name="name"
                      />
                    </div>
                    <div className="mb-3 mx-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        required
                        value={email}
                        name="email"
                        onChange={registerDataChange}
                      />
                    </div>
                    <div className="mb-3 mx-3 ">
                      <label
                        htmlFor="exampleInputMobile1"
                        className="form-label"
                      >
                        Mobile Number
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="exampleInputMobile1"
                        required
                        value={MobileNumber}
                        name="MobileNumber"
                        onChange={registerDataChange}
                      />
                    </div>
                    <div className="mb-3 mx-3 ">
                      <label htmlFor="exampleInputPan1" className="form-label">
                        PAN Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputPan1"
                        required
                        value={PanNumber}
                        name="PanNumber"
                        onChange={registerDataChange}
                      />
                    </div>
                    <div className="mb-3 mx-3 ">
                      <label htmlFor="exampleInputGst1" className="form-label">
                        GST Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputGst1"
                        required
                        value={GSTNumber}
                        name="GSTNumber"
                        onChange={registerDataChange}
                      />
                    </div>
                    <div className="mb-3 mx-3 ">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        required
                        value={password}
                        name="password"
                        onChange={registerDataChange}
                      />
                    </div>
                    <div className="mb-3 mx-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Upload Profile Picture
                      </label>
                      <div id="registerImage">
                        <img src={avatarPreview} alt="Avatar Preview" />
                        <input
                          type="file"
                          name="avatar"
                          accept="image/*"
                          onChange={registerDataChange}
                        />
                      </div>
                      <small>
                        Image size less than 600kb - JPG Format Only
                      </small>
                    </div>
                    <button
                      type="submit"
                      id="vendor_signup_btn1"
                      className="btn btn-outline-primary vendor_signup_btn1 mx-3 my-3"
                    >
                      Create New Acount
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
