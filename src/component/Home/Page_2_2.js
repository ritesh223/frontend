import React from 'react';
import '../Home/page_2_2.css';
import myImg from "../../img/wallpaperflare.com_wallpaper.jpg"

const Page_2_2 = () => {
    return (
        <div>
            <div className='page_2_2'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6" id='section_1'>
                            <div className="intro">
                                <div className="image_2">
                                    <img src={myImg} alt="image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6" id='section_2'>
                            <div className="intro_2">
                                <h1 className='my-3 mx-3'>You Are Here Because<small>...</small></h1>
                                <p className='my-3 mx-3'>You've checked all the boxes. You are on the typical life trajectory that we find in work-obsessed countries: went to school , got a good job with a stable company and have been successfully climbing the corporate ladder ever since. Yet despute your outward success, you sense something is missing .Perhaps you've daydreamed of travel for a while now but aren't quite sure what to do about it.</p>
                                <p className='my-3 mx-3'>After all , not everyone can just drop everything to hike the PCT like Cheryl Strayed or "Eat, Pray,Love" their way around the world like Eizabeth Gilbert. You'd have to quit your job to have THAT type of an adventure .. Right?</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page_2_2
