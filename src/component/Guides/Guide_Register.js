import { useAlert } from "react-alert";
import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom";
import Loader from "../Loader/Loader";
import "./guide_register.css";
import { useHistory, useLocation } from "react-router-dom";
import { clearErrors, loginv1, registerv1 } from "../../actions/vendorAction";

import Metadata from "../Metadata";
export default function Guide_Register() {
  const alert = useAlert();
  const history = useHistory();
  const dispatch = useDispatch();
  const { error, isAuthenticatedGuide, token2 , loading} = useSelector(
    (state) => state.guide
  );


  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [guide, setGuide] = useState({
    name: "",
    email: "",
    password: "",
    MobileNumber: "",
    currloc :""
  });
  const { name, email, password, MobileNumber, currloc } = guide;
  const [avatar, setAvatar] = useState("/logo192.png");
  const [avatarPreview, setAvatarPreview] = useState("/logo192.png");

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(loginv1(loginEmail, loginPassword));
  };
  const registerSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    myForm.set("MobileNumber", MobileNumber);
    myForm.set("currloc", currloc);
   
    myForm.set("avatar", avatar);
    // console.log([...myForm]);
    dispatch(registerv1(myForm));
  };
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticatedGuide) {
      history.push("/guide_dashboard");
    }
  }, [dispatch, error, history, alert, isAuthenticatedGuide]);
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
      setGuide({ ...guide, [e.target.name]: e.target.value });
    }
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Metadata title="Guide Login" />
          <div className="headline">
            <h2>Guide Login/Signup</h2>
          </div>
          <div className="container" id="guide_register-container">
            <div className="row" id="guide_register-row">
              <div className="col" id="guide_login">
                <div className="container">
                  <form className="login_form" onSubmit={loginSubmit}>
                    <h2>Welcome Back !</h2>
                    <h4 style={{ fontFamily: "Times", color: "whitesmoke" }}>
                      Ready To Grow Your Income{" "}
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
                      <Link className="forgotuserpass" to="/password/forgotg">
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
                      <small>New Here?</small> Don't Worry ! Grow Your Income
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
                        Your Current Location
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputPan1"
                        required
                        value={currloc}
                        name="currloc"
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
                      id="guide_signup_btn1"
                      className="btn btn-outline-primary guide_signup_btn1 mx-3 my-3"
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
