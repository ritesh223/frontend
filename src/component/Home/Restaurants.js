
import React, { useState } from "react";
import './Restaurants.css';

import Metadata from "../Metadata";
// import Book_hotel from "./Book_Hotel/Book_hotel";
import { useHistory, useLocation } from "react-router-dom";

const Restaurants = () => {
  const [keyword, setkeyword] = useState("");

  const history = useHistory();
  

  const onClickLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        
        const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=5a1b748d8c3e4899983594854c8554b8`;

        const response = await fetch(url);
        const data = await response.json();
        const city = data.results[0].components.city;

        setkeyword(`${city}`);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const searchresSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(
        `/restaurants/${keyword}`
      );
    } else {
      history.push("/restaurants");
    }
  };

  return (
    <>
      <Metadata title="Restaurants" description="Restaurants" />
      <div className="rest">
        <div className="search_box">
          <div className="heading_one">
            <h1>Search Restaurants</h1>
            <h5>Find Restaurants Near You</h5>
          </div>
          <div className="location">
            <input
              type="text"
              className="form-control my-3"
              id="exampleInputlocation1"
              aria-describedby="locationHelp"
              name="Location"
              placeholder="Location"
              value={keyword}
              onChange={(e) => setkeyword(e.target.value)}
            />
            <button className="btn btn-location" onClick={onClickLocation}>
              <i className="fa-solid fa-location-dot"></i>
            </button>
          </div>

          <div className="search_btn">
            <button
              className="btn btn-outline-success"
              onClick={searchresSubmitHandler}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Restaurants;
