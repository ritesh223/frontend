import React from 'react';
import { useHistory } from "react-router-dom";

function Bookh() {
     const history = useHistory();

     const handleClick = () => {
       history.push("/hotel");
     };
    return (
        <div className="col-md-4">
            <h3><i className="fa-solid fa-bed"></i><button onClick={handleClick} style={{backgroundColor:"transparent", color:"black"}}><strong> Book Hotels</strong></button></h3>
            <p>"Staying in a good hotel is like being wrapped in a warm embrace, it surrounds you with comfort and luxury, creating a perfect haven away from the hustle and bustle of the world."</p>
        </div>
    );
}

export default Bookh;
