import React from 'react';
import './Page_2.css';
import myImg from "../../img/fabio-comparelli-uq2E2V4LhCY-unsplash.jpg"

export default function Page_2() {
    return (
        <div className='page_2'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6" id='section_1'>
                        <div className="intro">
                            <h1>Make Your Tour Memorable and Safe With Us</h1>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            <div className="intro_number">
                            <div className="numbers mx-3">
                                <p><strong>300</strong></p>
                                <p><i className="fa-solid fa-check"></i> Successful Tours</p>
                            </div>
                            <div className="numbers mx-3">
                                <p><strong>2,000</strong></p>
                                <p><i className="fa-regular fa-face-smile"></i> Happy Tourist</p>
                            </div>
                            <div className="numbers mx-3">
                                    <p><strong><i className="fa-solid fa-infinity"></i></strong></p>
                                <p><i className="fa-solid fa-earth-asia"></i> Place Explored</p>
                            </div>
                        </div>
                        </div>

                    </div>
                    <div className="col-md-6" id='section_2'>
                        <div className="image" id='p2image'>
                            <img src={myImg} alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
