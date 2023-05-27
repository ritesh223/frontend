import React, {useState, useEffect } from 'react';
import Packroute from './Packroute';
import { BrowserRouter } from 'react-router-dom';
import './Page_4.css';
import Bookh from './Bookh';
import Plana from './Plana';
import Resortr from './Resortr';
import Nearbyr from './Nearbyr';
import Getg from './Getg';
// import balloonImage from '../../img/background/ballon.png'


export default function Page_4() {
    // function Balloon() {
    //     useEffect(() => {
    //         const balloons = document.getElementsByClassName('balloon');
    //         window.addEventListener('scroll', function () {
    //             const value = this.window.scrollY;
    //             for (let i = 0; i < balloons.length; i++) {
    //                 balloons[i].style.marginRight = value * 5 + 'px';
    //             }
    //         });
    //     }, []);}
    // function Parallax() {
    //     const [offset, setOffset] = useState(0);

    //     useEffect(() => {
    //         window.addEventListener("scroll", handleScroll);
    //         return () => window.removeEventListener("scroll", handleScroll);
    //     }, []);

    //     const handleScroll = () => setOffset(window.pageYOffset);

    //     return (
    //         <div className="parallax-container">
    //             <div className="parallax" style={{ backgroundImage: `url("https://picsum.photos/800/600")`, backgroundPositionY: offset * 0.7 }}>
    //             </div>
                
    //         </div>
    //     );
    // }
   
    return (
        <div className='page_4'>
           {/* <img className='ballon' src={ballon} alt="" /> */}
           {/* <img className='balloon' src={balloonImage} alt='Balloon' /> */}
          <h1 id='page_4_heading'>Superb Facilities</h1>
                <p id='page_4_para'>We Provide amazing facilities Which will make your Trips astonishing with stunning discounts</p>
            {/* <Parallax></Parallax> */}
            <div className="container">
                <div className="row" >
                {/* Card 1 */}
                    
                      
                        <Packroute />
                      
                   <Bookh/>

                    {/* Card 1 */}
                   <Plana/>

                    {/* Card 1 */}
                   <Resortr/>

                    {/* Card 1 */}
                    
                   <Nearbyr />
                   <Getg/>
                    
                </div>
            </div>
        </div>
    )
}
