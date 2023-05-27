import React, { Fragment, useState, useEffect } from "react";
import "./UpdateProfile.css";
import Loader from "../Loader/Loader";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import FaceIcon from "@material-ui/icons/Face";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, updateProfile, logout} from "../../actions/userAction";
import { useAlert } from "react-alert";
import { UPDATE_PROFILE_RESET } from "../../constants/userConstants";
import Metadata from "../Metadata";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const UpdateProfile = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const alert = useAlert();

  const { user ,isAuthenticatedUser } = useSelector((state) => state.user);
  const { error, isUpdated, loading } = useSelector((state) => state.profile);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [MobileNumber, setMobileNumber] = useState("");
  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("");

  const updateProfileSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("MobileNumber", MobileNumber);
    myForm.set("avatar", avatar);
    dispatch(updateProfile(myForm ,user._id));
  };

  const updateProfileDataChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
        setAvatar(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setMobileNumber(user.MobileNumber)
      setAvatarPreview(user.avatar.url);
    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert.success(" Updated Successfully! Logout and Login again to see changes");
      // dispatch(loadUser());
      //  dispatch(logout());

      history.push("/dashboard");

      dispatch({
        type: UPDATE_PROFILE_RESET,
      });
    }
  }, [dispatch, error, alert, history, user, isUpdated, isAuthenticatedUser]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Metadata title="Update Profile" />
          <div className="updateProfileContainer">
            <div className="updateProfileBox">
              <h2 className="updateProfileHeading">Update Profile</h2>

              <form
                className="updateProfileForm"
                encType="multipart/form-data"
                onSubmit={updateProfileSubmit}
              >
                <div className="updateProfileName">
                  <FaceIcon />
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="updateProfileEmail">
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
                <div className="updateProfileMobile">
                  <PhoneAndroidIcon />
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    required
                    name="MobileNumber"
                    value={MobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                  />
                </div>

                <div id="updateProfileImage">
                  <img src={avatarPreview} alt="Avatar Preview" />
                  <input
                    type="file"
                    name="avatar"
                    accept="image/*"
                    onChange={updateProfileDataChange}
                  />
                </div>
                <input
                  type="submit"
                  value="Update"
                  className="updateProfileBtn"
                />
              </form>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default UpdateProfile;
