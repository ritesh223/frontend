import React from 'react'
import './activity_booked.css'
import Carousel_Activity from './Carousel_Activity'

export default function Activity_booked() {
    return (
        <>
            <div className="Activity_booked">
                <div className="Activity_img">
                    <Carousel_Activity />
                </div>

                {/* review tab */}
                <div className="display_Activity">

                    {/* filters settings */}
                    <div className="booking_activity">

                        {/* intro */}
                        <div className="room_detail">
                            <p>⭐⭐⭐⭐</p>
                            <h1><strong> Rafting in Rishikesh </strong></h1>
                        </div>

                        {/* for booking button */}
                        <div className="activity_booking">
                            <div style={{ display: "flex", flexDirection: "column" }} >
                                <h6 style={{color:'#FF3131'}}><small>Starting from INR 600</small> <br /> <strong>INR 499 <small>per Adult</small></strong></h6>
                                <button className='btn' >Book Now </button>
                            </div>
                            
                        </div>

                    </div>

                    <div className="horizontal" style={{ marginLeft: "10px" }}></div>

                    {/* showing all the hotels available */}
                    <div className="activity_to_book">
                        <div className="features_provided">
                            <h6 style={{padding:'5px'}}><i class="fa-solid fa-check"></i> Instant confirmation </h6>
                            <h6 style={{padding:'5px'}}><i class="fa-solid fa-mobile-screen-button"></i> Mobile Voucher </h6>
                            <h6 style={{padding:'5px'}}><i class="fa-solid fa-person"></i> Guide </h6>
                            <h6 style={{padding:'5px'}}><i class="fa-solid fa-car-rear"></i> Transport Included </h6>
                        </div>
                        <div className="overview_activity">
                            <h1>Rafting In Rishikesh Overview</h1>
                            <p> <strong>Activity Location:</strong>  Shivpuri, Rishikesh</p>
                            <p> <strong>River Rafting in Rishikesh Timings:</strong>  Between 07:00 AM to 03:00 PM</p>
                            <p><strong>Activity Duration:</strong>  2-4 hours (Depending on the choice of your package)</p>
                            <p><strong>Meeting point:</strong>  Khara Sot, Muni Ki Reti, Rishikesh</p>
                            <p><strong>About Rafting in Rishikesh:</strong> 
                            Rishikesh is famous for its serene landscapes, religious significance as well as various thrilling adventure activities like bungee jumping, river rafting, and many more. If you want to try on something adventurous and exciting, then you must not miss out on this white-water river rafting experience in Rishikesh. Gush through the sturdy rapids as well as admire breathtaking landscapes of mountains & greenery as you raft through the clear waters. The river rafting in Rishikesh takes you on
                             a 9 km and 16 km course of adventure!</p>
                        </div>
                        <div className="overview_activity">
                            <h1>Rafting In Rishikesh Highlights</h1>
                            <ul>
                                <li>Engage in enthralling white water rafting expedition on the mighty Ganges in Rishikesh</li>
                                <li>Navigate through the thrilling grade III & IV levels of rapids amidst the mountains</li>
                                <li>Get accompanied by a trained instructor who will assist you throughout the activity</li>
                                <li>Choose from the exciting routes ranging from 9 KM & 16 KM and gear up for a thrilling rafting activity with your folks</li>
                                <li>Arrive at the meeting point and get picked-up & drop off to the activity location in a comfortable way</li>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>

        </>
    )
}
