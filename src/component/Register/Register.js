// import ErrorAlert from "./ErrorAlert";
import { useAlert } from "react-alert";
import { React, useState, useEffect } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import { clearErrors, login ,register } from "../../actions/userAction";
import Cookies from "js-cookie";
// import { useHistory } from "react-router-dom";
import { useHistory , useLocation} from "react-router-dom";
import Metadata from "../Metadata";
const Register = () => {
   const alert = useAlert();
   const history = useHistory();
  const dispatch = useDispatch();
  const { error, isAuthenticatedUser , loading } = useSelector(
    (state) => state.user
  );
  const location = useLocation();
  // const [showErrorAlert, setShowErrorAlert] = useState(false);
  // const loading = false;
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    MobileNumber: "",
  });

  const { name, email, password, MobileNumber} = user;
  const [avatar, setAvatar] = useState("/logo192.png");
  const [avatarPreview, setAvatarPreview] = useState("/logo192.png");

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  };

  const registerSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    myForm.set("MobileNumber", MobileNumber);
    myForm.set("avatar", avatar);
    dispatch(register(myForm));
  };
//  const redirect = location.search ? location.search.split("=")[1] : "/";
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticatedUser) {
      // alert.success("Loginned. Welcome Back!")
      
  // Cookies.set("token", token);
  // Cookies.set("_id",_id );
  //     localStorage.setItem("token", token);
      history.push('/');
    }
  }, [dispatch, error, history, alert,isAuthenticatedUser]);

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
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Metadata title="User Login" />
          {/* <div>
            {showErrorAlert.show && (
              <ErrorAlert message={showErrorAlert.error} />
            )}
          </div> */}
          <div className="headline">
            <h2>User Login/Signup</h2>
          </div>

          <div className="container" id="register-container">
            <div className="row" id="register-row">
              <div className="col" id="login">
                <div className="container">
                  <form className="login_form" onSubmit={loginSubmit}>
                    <h2>Welcome Back !</h2>
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
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}"
                        title="Password must contain at least 8 characters, one special character, one number, and one capital alphabet."
                      />
                      <div id="emailHelp" className="form-text">
                        Your password is protected.
                      </div>
                      <Link className="forgotuserpass" to="/password/forgot">
                        Forget Password?
                      </Link>
                    </div>

                    <button
                      type="submit"
                      id="register_btn"
                      className="btn btn-outline-primary mx-3 my-3"
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
                    <h1>
                      {" "}
                      <small>New Here?</small> Don't Worry !
                    </h1>
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
                      id="singup_btn"
                      className="btn btn-outline-primary mx-3 my-3"
                      // disabled = {loading ? true : false}
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
};
export default Register;
//  {
   /* <div className="mb-3 mx-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div> */
//  }


