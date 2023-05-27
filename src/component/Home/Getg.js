import React from 'react';
import { useHistory } from "react-router-dom";

function Getg() {
    const history = useHistory();

    const handleClick = () => {
      history.push("/guidesearch");
    };
    return (
      <div className="col-md-4">
        <h3>
          <i className="fa-brands fa-guilded"></i>
          <button
            onClick={handleClick}
            style={{ backgroundColor: "transparent", color: "black" }}
          >
            <strong> Get Guides</strong>
          </button>
        </h3>
        <p>
          "We pride ourselves on being the only website that offers an exclusive
          guide facility to our users, providing you with all the information
          you need to navigate our platform with ease."
        </p>
      </div>
    );
}

export default Getg;
