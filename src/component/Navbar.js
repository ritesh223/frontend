import { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import "../component/navbar.css";

const Navbar = () => {
  const { isAuthenticatedUser, user } = useSelector((state) => state.user);
  const { isAuthenticatedVendor, vendor } = useSelector(
    (state) => state.vendor
  );

  const history = useHistory();
  const loc = useLocation();
  const closeNavbar = () => {
    document.querySelector(".navbar-collapse").classList.remove("show");
  };
  function OnLoginClick() {
    const [shownavModal, setShownavModal] = useState(false);

    const handleUserLogin = () => {
      setShownavModal(false);
      history.push("/reg");
    };

    const handleVendorLogin = () => {
      setShownavModal(false);
      history.push("/vendor_register");
    };

    const handleGuideLogin = () => {
      setShownavModal(false);
      history.push("/guide_register");
    };

    return (
      <>
        {!isAuthenticatedUser && !isAuthenticatedVendor && (
          <button
            className="btnlogin"
            type="button"
            id="loginDropdown"
            onClick={() => {
              setShownavModal(true);
              // Call your additional function here
            }}
          >
            Login <i className="fa-sharp fa-solid fa-user-plus"></i>
          </button>
        )}

        {shownavModal && (
          <div className="nav-modal-container">
            <div className="nav-modal">
              <button
                style={{ backgroundColor: "transparent", color:"black" }}
                className="nav-modal-close"
                onClick={() => setShownavModal(false)}
              >
                &times;
              </button>
              <h2>Login/Signup as</h2>
              <div className="buttons-container">
                <button
                  onClick={() => {
                    handleUserLogin();
                    // Call your additional function here
                    closeNavbar();
                  }}
                >
                  User
                </button>

                <button
                  onClick={() => {
                    handleVendorLogin();
                    // Call your additional function here
                    closeNavbar();
                  }}
                >
                  Vendor
                </button>
                <button
                  onClick={() => {
                    handleGuideLogin();
                    // Call your additional function here
                    closeNavbar();
                  }}
                >
                  Guide
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <button style={{backgroundColor:"transparent"}}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand" to="/">
            <i className="fa-brands fa-padlet"></i> BUDGET<sub>TRIP</sub>
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <form style={{display:"flex"}} id="navform" className="formnav" role="search">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className={`nav-link ${loc.pathname === "/" ? "active" : ""
                      }`}
                    aria-current="page"
                    to="/"
                    onClick={closeNavbar}
                  >
                    <i className="fa-solid fa-house"></i> Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${loc.pathname === "/hotel" ? "active" : ""
                      }`}
                    to="/hotel"
                    onClick={closeNavbar}
                  >
                    <i className="fa-solid fa-hotel"></i> Hotels
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${loc.pathname === "/activity" ? "active" : ""
                      }`}
                    to="/activity"
                    onClick={closeNavbar}
                  >
                    <i className="fa-solid fa-person-hiking"></i> Activity
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${loc.pathname === "/packages" ? "active" : ""
                      }`}
                    to="/packages"
                    onClick={closeNavbar}
                  >
                    <i className="fa-solid fa-mountain-sun"></i> Holiday
                    Packages
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${loc.pathname === "/restaurants" ? "active" : ""
                      }`}
                    to="/restaurants"
                    onClick={closeNavbar}
                  >
                    <i className="fa-solid fa-utensils"></i> Restaurants
                  </Link>
                </li>
                <li className="nav-item">
                  {!isAuthenticatedUser && (
                    <Link
                      className={`nav-link ${loc.pathname === "/seller" ? "active" : ""
                        }`}
                      to="/seller"
                      onClick={closeNavbar}
                    >
                      <i className="fa-solid fa-circle-check"></i> Become Vendor
                    </Link>
                  )}
                </li>
                <li className="nav-item">
                  {isAuthenticatedUser && (
                    <Link
                      className={`nav-link ${loc.pathname === "/request" ? "active" : ""
                        }`}
                      to="/request"
                      onClick={closeNavbar}
                    >
                      <i className="fa-solid fa-circle-check"></i> BeSpoke
                    </Link>
                  )}
                </li>

                <li className="nav-item">
                  <Link
                    className={`nav-link ${loc.pathname === "/guidesearch" ? "active" : ""
                      }`}
                    to="/guidesearch"
                    onClick={closeNavbar}
                  >
                    <i className="fa-solid fa-user"></i> Guides
                  </Link>
                </li>
                <li className="nav-item">
                  {!isAuthenticatedUser && (
                    <Link
                      className={`nav-link ${loc.pathname === "/cart" ? "active" : ""
                        }`}
                      to="/cart"
                      onClick={closeNavbar}
                    >
                      <i className="fa-solid fa-cart-shopping"></i> Cart
                    </Link>
                  )}
                </li>
              </ul>
              {/* <OnLoginClick /> */}
              <OnLoginClick />
            </form>
          </div>
          
        </div>
      </nav>
    </>
  );
  
};

export default Navbar;
