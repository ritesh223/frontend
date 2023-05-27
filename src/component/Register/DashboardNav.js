import React from 'react'
import pp from '../../img/fabio-comparelli-uq2E2V4LhCY-unsplash.jpg'
import { Link, useLocation } from 'react-router-dom';

export default function DashboardNav() {
    let loct = useLocation();
    return (
      <>
        <img
          src={pp}
          alt="profile img"
          style={{
            height: "100px",
            width: "100px",
            margin: "10px",
            borderRadius: "50%",
          }}
        />
        <h6 style={{ margin: "10px" }}>Personal Profile</h6>
        <div>
          <Link to="/reg/profile">
            {" "}
            <h5
              className={`nav_dash ${
                loct.pathname === "/reg/profile" ? "active_dash" : ""
              }`}
            >
              <i class="fa-solid fa-user"></i> Profile
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/reg/details">
            <h5
              className={`nav_dash ${
                loct.pathname === "/reg/details" ? "active_dash" : ""
              }`}
            >
              <i class="fa-solid fa-right-to-bracket"></i> Login Details
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/reg/plans">
            {" "}
            <h5
              className={`nav_dash ${
                loct.pathname === "/reg/plans" ? "active_dash" : ""
              }`}
            >
              <i class="fa-solid fa-map-location"></i> Your Plans
            </h5>
          </Link>
        </div>
        {/* <div>
                <Link to="/reg"> <h5 className={`nav_dash ${loct.pathname === '/reg/logout' ? "active_dash" : ""}`}><i class="fa-solid fa-right-from-bracket"></i> LogOut</h5></Link>
            </div> */}
      </>
    );
}
