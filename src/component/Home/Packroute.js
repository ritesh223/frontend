import React from 'react';
import { useHistory } from "react-router-dom";

function PackRoute() {
  const history = useHistory();

    const handleClick = () => {
    history.push("/packages");
    }

    return (
      <div className="col-md-4">
        <h3>
          <i className="fa-sharp fa-solid fa-suitcase-rolling"></i>
          <button
            onClick={handleClick}
            style={{ backgroundColor: "transparent", color: "black" }}
          >
            <strong> Packages</strong>
          </button>
        </h3>
        <p>
          "The world is a book and those who do not travel read only one page."
          Travel packages are your ticket to unlocking the many pages of the
          world, and discovering the beauty and diversity that lies beyond your
          doorstep.
        </p>
      </div>
    );
}

export default PackRoute;
