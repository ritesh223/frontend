import React, { Fragment, useState, useEffect } from "react";
import "../Register/UpdateProfile.css";
import Loader from "../Loader/Loader";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import FaceIcon from "@material-ui/icons/Face";
import { useDispatch, useSelector } from "react-redux";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import {
  clearErrors,
  updateProfilev1,
  logout1,
} from "../../actions/vendorAction";
import { useAlert } from "react-alert";
import { UPDATE_VENDOR1_PROFILE_RESET } from "../../constants/vendorConstants";
import Metadata from "../Metadata";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const UpdategProfile = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const alert = useAlert();

  const { guide, isAuthenticatedGuide } = useSelector(
    (state) => state.guide
  );
  const { error, isUpdated, loading } = useSelector((state) => state.profileg);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [MobileNumber, setMobileNumber] = useState("");
  const [status, setStatus] = useState("");
  const [currloc, setCurrloc] = useState("available");
  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("");

  const updateProfileSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("MobileNumber", MobileNumber);
    myForm.set("status", status);
    myForm.set("currloc", currloc);
    myForm.set("avatar", avatar);
    dispatch(updateProfilev1(myForm, guide._id));
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
    if (guide) {
      setName(guide.name);
      setEmail(guide.email);
      setMobileNumber(guide.MobileNumber);
      setStatus(guide.status);
      setCurrloc(guide.currloc);
      setAvatarPreview(guide.avatar.url);
    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert.success(
        " Updated Successfully! Logout and Login again to see changes"
      );
      // dispatch(loadUser());
      //  dispatch(logout());

      dispatch({
        type: UPDATE_VENDOR1_PROFILE_RESET,
      });
      history.push(`/guide_dashboard`);

    }
  }, [
    dispatch,
    error,
    alert,
    history,
    guide,
    isUpdated,
    isAuthenticatedGuide,
  ]);
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
                <div className="updateProfileStatus">
                  <EventAvailableIcon />
                  <select
                    required
                    name="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="">Select Status</option>
                    <option value="available">Available</option>
                    <option value="occupied">Occupied</option>
                    <option value="not available">Not Available</option>
                  </select>
                </div>

                <div className="updateProfileLocation">
                  <EditLocationAltIcon />
                  <input
                    type="text"
                    placeholder="Current Location"
                    required
                    name="currloc"
                    value={currloc}
                    onChange={(e) => setCurrloc(e.target.value)}
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

export default UpdategProfile;
