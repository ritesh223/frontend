import React from 'react';
import { useHistory } from "react-router-dom";

function Plana() {
  const history = useHistory();

    const handleClick = () => {
    history.push("/activity");
    }

    return (
      <div className="col-md-4">
        <h3>
          <i className="fa-solid fa-cable-car"></i>
          <button
            onClick={handleClick}
            style={{ backgroundColor: "transparent", color: "black" }}
          >
            <strong> Plan Adventures</strong>
          </button>
        </h3>
        <p>
          "The biggest adventure you can ever take is to live the life of your
          dreams."
        </p>
      </div>
    );
}

export default Plana;
