import React, { useState } from 'react';
import "../Hotels/hotel_one.css";
// import Book_hotel from './Book_Hotel/Book_hotel';
import { useHistory } from "react-router-dom";

const Hotel_one = () => {


    const [keyword, setkeyword] = useState('');
    const [checkin, setCheckin] = useState('');
    const [checkout, setCheckout] = useState('');
    const [rooms, setRooms] = useState('1 Room, 1 Adult');
      const history = useHistory();
    // const history = useHistory();

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

   
      const searchSubmitHandler = (e) => {
        e.preventDefault();
        if (keyword.trim() && checkin && checkout && rooms) {
          history.push(
            `/book_hotel/${keyword}?checkin=${checkin}&checkout=${checkout}&rooms=${rooms}`
          );
        } else {
          history.push("/hotel");
        }
      };

    return (
        <>
            <div className="cont_hotel">
                <div className="search_box">
                    <div className='heading_one'>
                        <h1>Search Hotels</h1>
                        <h5>Enjoy hassle free bookings with Budget Trip</h5>
                    </div>
                    <div className="location">
                        <input type="text" className="form-control my-3" id="exampleInputlocation1" aria-describedby="locationHelp" name="Location" placeholder="Enter City" value={keyword} onChange={(e) => setkeyword(e.target.value)} required/>
                        <button className="btn btn-location" onClick={onClickLocation}><i className="fa-solid fa-location-dot"></i></button>
                    </div>
                    <div className="calander_dates my-3">
                        <div className="check_in mx-2">
                            <h5>Check In</h5>
                            <input type="date" id="check_in" name="check_in" value={checkin} required onChange={(e) => setCheckin(e.target.value)} />
                        </div>
                        <div className="check_out mx-2">
                            <h5>Check Out</h5>
                            <input type="date" id="check_out" name="check_out" value={checkout} required onChange={(e) => setCheckout(e.target.value)} />
                        </div>
                        <div className="dropdown mx-2">
                            <select name="rooms" id="rooms" value={rooms} required onChange={(e) => setRooms(e.target.value)}>
                                <option value="1 Room, 1 Adult">1 Room, 1 Adult</option>
                                <option value="1 Room, 2 Adults">1 Room, 2 Adults</option>
                                <option value="2 Rooms, 4 Adults">2 Rooms, 4 Adults</option>
                            </select>
                        </div>
                    </div>
                    <div className='search_btn'>
                        <button className="btn btn-outline-success" onClick={searchSubmitHandler}>Search</button>
                    </div>
                </div>
            </div>
            
                  </>
    );
};

export default Hotel_one;


