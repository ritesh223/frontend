import React, { useState } from "react";
import "../Packages/Packagesearch.css";
import { useHistory, useLocation } from "react-router-dom";
import TransferWithinAStationIcon from "@material-ui/icons/TransferWithinAStation";
import PublicIcon from "@material-ui/icons/Public";
import { City, State } from "country-state-city";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import Metadata from "../Metadata";
const Packagesearch = () => {
    const history = useHistory();
    const alert = useAlert();
    const dispatch = useDispatch();
  const [keyword, setkeyword] = useState("");
  const [deptin, setDeptin] = useState("");
//   const [checkout, setCheckout] = useState("");
//   const [rooms, setRooms] = useState("1 Room, 1 Adult");
  const [city, setCity] = useState("");
//   const [state, setState] = useState("");
  const onClickLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=5a1b748d8c3e4899983594854c8554b8`;

        const response = await fetch(url);
        const data = await response.json();
        const ccity = data.results[0].components.city;

        setCity(`${ccity}`);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };
const currcity = city;
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim() && currcity && deptin) {
      history.push(
        `/packages/${keyword}/${currcity}?departure=${deptin}&currcity=${currcity}`
      );
    } else {
      history.push("/packages");
    }
  };

  return (
    <>
      <Metadata title="Holiday Packages" description="Holiday Packages" />
      <div className="cont_hotel">
        <div className="search_box">
          <div className="heading_one">
            <h1>Search Trip Packages</h1>
            <h5>Enjoy hassle free bookings with Budget Trip</h5>
          </div>
          <div className="location">
            <input
              type="text"
              className="form-control my-3"
              id="exampleInputlocation1"
              aria-describedby="locationHelp"
              name="Location"
              placeholder="Enter Your Current City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button className="btn btn-location" onClick={onClickLocation}>
              <i className="fa-solid fa-location-dot"></i>
            </button>
          </div>
          <TransferWithinAStationIcon />
          <div className="location">
            <input
              type="text"
              className="form-control my-3"
              id="exampleInputlocation1"
              aria-describedby="locationHelp"
              name="Location"
              placeholder="Enter Your Destination City"
              value={keyword}
              onChange={(e) => setkeyword(e.target.value)}
            />
          </div>
          <div className="calander my-3">
            <div className="check_in mx-2">
              <h5>Departure Date</h5>
              <input
                type="date"
                id="check_in"
                name="check_in"
                value={deptin}
                onChange={(e) => setDeptin(e.target.value)}
              />
            </div>
          </div>

          <div className="search_btn">
            <button
              className="btn btn-outline-success"
              onClick={searchSubmitHandler}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Packagesearch;
