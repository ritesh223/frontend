import React from 'react';
import './hotel_two.css';
import delhi from '../../img/hotel/delhi.jpg'
import goa from '../../img/hotel/goa.jpg'
import mumbai from '../../img/hotel/mumbai.jpg'
import kerala from '../../img/hotel/kerala.jpg'
import jaipur from '../../img/hotel/jaipur.jpg'
import sea from '../../img/hotel/sea.jpg'
import couple from '../../img/hotel/couple.jpg'
import hill from '../../img/hotel/hill.jpg'
import { Link } from 'react-router-dom'



export default function Hotel_two() {
    return (
        <>
            <div className="hotel_two">
                <div className="popular">
                    <h1 className='my-4'>Popular Destinations</h1>
                    <div className="hotel_card">
                        <div className="container hotel_container">
                            <div className="row hotel_row">
                                {/* Card 1 */}
                                <div className="col-md-2 delhi_hotel my-2">
                                <Link><img src={delhi} alt="" /></Link>
                                    <h6>Delhi <br /> 3018 properties </h6>
                                </div>

                                {/* Card 1 */}
                                <div className="col-md-2 goa_hotel my-2">
                                <Link><img src={goa} alt="" /></Link>
                                <h6>goa <br /> 2092 properties </h6>
                                </div>

                                {/* Card 1 */}
                                <div className="col-md-2 mumbai_hotel my-2">
                                <Link><img src={jaipur} alt="" /></Link>
                                <h6>Jaipur <br /> 1018 properties </h6>
                                </div>

                                {/* Card 1 */}
                                <div className="col-md-2 jaipur_hotel my-2">
                                <Link><img src={mumbai} alt="" /></Link>
                                <h6>Mumbai <br /> 3008 properties </h6>
                                </div>

                                {/* Card 1 */}
                                <div className="col-md-2 kerala_hotel my-2">
                                <Link><img src={kerala} alt="" /></Link>
                                <h6>Kerala <br /> 2732 properties </h6>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* <div className="offers my-4">
                    <h5>Great Offers</h5>
                </div> */}
                <div className="treading">
                    <h1 className='my-4'>Trending getaways!</h1>
                    <div className="container hotel_container">
                            <div className="row treading_row">
                                {/* Card 1 */}
                                <div className="col-md-2 sea ">
                                <Link to="/hotel"><img src={sea} alt="" /></Link>
                                
                                    <h5>Best Hotels In Goas</h5>
                                    <p>3051 properties available</p>
                                </div>

                                {/* Card 1 */}
                                <div className="col-md-2 couple ">
                                <Link to="/hotel"><img src={couple} alt="" /></Link>
                                <h5>Couple friendly hotels in Ooty</h5>
                                <p>530 properties available</p>
                                </div>

                                {/* Card 1 */}
                                <div className="col-md-2 hill ">
                                
                                <Link to="/hotel"><img src={hill} alt="" /></Link>
                                <h5>Hill view hotels in Manali</h5>
                                <p>1198 properties available</p>
                                </div>
                            </div>

                        </div>
                </div>
            </div>

        </>
    )
}
