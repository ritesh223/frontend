import React, { useState } from 'react';
import './activity_one.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
export default function Activity_one() {
    const [location, setLocation] = useState('');
 const [keyword, setkeyword] = useState("");
     const [checkin, setCheckin] = useState("");
      const history = useHistory();

    const onClickLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const { latitude, longitude } = position.coords;
                // const apiKey = "YOUR_OPENCAGE_API_KEY";
                const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=5a1b748d8c3e4899983594854c8554b8`;

                const response = await fetch(url);
                const data = await response.json();
                const city = data.results[0].components.city;
                // const state = data.results[0].components.state;

                setkeyword(`${city}`);
            });
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    };

      const activitybutton = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
          history.push(
            `/activity/${keyword}?checkin=${checkin}`
          );
        } else {
          history.push("/activity");
        }
      };


  return (
    <>
      <div className="cont_activity">
        <div className="search_box_activity">
          <div className="heading_one">
            <h1>Explore</h1>
            <h5>Enjoy hassle free bookings for Adventure with Budget Trip</h5>
          </div>
          {/* <div className="location_activity">
                        <input type="email" class="form-control my-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Location' />
                        <button className='btn'><i class="fa-solid fa-location-dot"></i></button>
                    </div> */}

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

          {/* <div className="calander my-3">
            <div className="check_in mx-2">
              <h5>Date</h5>
              <input
                type="date"
                id="check_in"
                name="check_in"
                value={checkin}
                onChange={(e) => setCheckin(e.target.value)}
              />
            </div>
          </div> */}
          <div className="search_btn">
            <button
              className="btn btn-outline-success"
              onClick={activitybutton}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
