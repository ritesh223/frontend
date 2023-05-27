import React from 'react';
import { useHistory } from "react-router-dom";

function Resortr() {
  const history = useHistory();

    const handleClick = () => {
    history.push("/hotel");
    }

    return (
      <div className="col-md-4">
        <h3>
          <i className="fa-solid fa-hotel"></i>
          <button
            onClick={handleClick}
            style={{ backgroundColor: "transparent", color: "black" }}
          >
            <strong> Resort Reservation</strong>
          </button>
        </h3>
        <p>
          "Escape to a world of relaxation and luxury with our resort
          reservations, where every moment is a vacation and every experience is
          a memory to cherish."
        </p>
      </div>
    );
}

export default Resortr;
