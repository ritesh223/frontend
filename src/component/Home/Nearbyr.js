import React from 'react';
import { useHistory } from "react-router-dom";

function Nearbyr() {
    const history = useHistory();

    const handleClick = () => {
        history.push("/restaurants");
    }

    return (
      <div className="col-md-4">
        <h3>
          <i className="fa-solid fa-utensils"></i>
          <button
            onClick={handleClick}
            style={{ backgroundColor: "transparent", color: "black" }}
          >
            <strong> Nearby Restaurants</strong>
          </button>
        </h3>
        <p>
          "Good food is all the sweeter when shared with good friends, and
          nearby restaurants offer the perfect opportunity to gather and savor
          the flavors of life."
        </p>
      </div>
    );
}

export default Nearbyr;
