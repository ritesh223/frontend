import React from 'react'
import './activity_two.css'
import rishikesh from '../../img/rishikesh.jpg'
import rajasthan from '../../img/rajasthan_adventure.jpg'
import goa from '../../img/goa_adventure.jpg'
import kerala from '../../img/kerala_culture.jpg'
import manali from '../../img/manali.jpg'
import { Link } from 'react-router-dom'

export default function Activity_two() {
    return (
        <>
            <div className="activity_two">
                <div>
                    <h1 style={{ textAlign: 'center' }}>Bring Adventure in Your Life</h1>
                    <h5 style={{ textAlign: 'center' }}>Best of Indian cities Tours & Activities</h5>
                </div>
                <div className="hotel_card">
                    <div className="container hotel_container">
                        <div className="row hotel_row">
                            {/* Card 1 */}
                            <div className="col-md-2 delhi_hotel my-2">
                                <img src={rishikesh} alt="" />
                                <h6>Rishikesh  </h6>
                            </div>

                            {/* Card 1 */}
                            <div className="col-md-2 goa_hotel my-2">
                                <img src={goa} alt="" />
                                <h6>Goa  </h6>
                            </div>

                            {/* Card 1 */}
                            <div className="col-md-2 mumbai_hotel my-2">
                                <img src={rajasthan} alt="" />
                                <h6>Rajasthan </h6>
                            </div>

                            {/* Card 1 */}
                            <div className="col-md-2 jaipur_hotel my-2">
                                <img src={manali} alt="" />
                                <h6>Manali</h6>
                            </div>

                            {/* Card 1 */}
                            <div className="col-md-2 kerala_hotel my-2">
                                <img src={kerala} alt="" />
                                <h6>Kerala </h6>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
