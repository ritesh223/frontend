import React, { useState, useEffect } from "react";
import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { clearErrors, getGuide } from "../../actions/product1Action";
import Loader from "../Loader/Loader";
import Metadata from "../Metadata";
import { useSelector, useDispatch } from "react-redux";
import Guide_items from "./Guide_items";

const statuses = ["Occupied", "Available", "Not Available"];



const Book_Guide = () => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  const location = useLocation();
  // const query = new URLSearchParams(location.search);
  
  // const currcity = query.get('currcity');
  const [status, setStatus] = useState("");
  
  const { keyword } = useParams();

  const { loading, error, guides, guidesCount, filteredGuidesCount } =
    useSelector((state) => state.guides);

  let resultPerPage = 6;
  let count = filteredGuidesCount;

  const pageCount = Math.ceil(filteredGuidesCount / resultPerPage);
  
  useEffect(() => {
    if (error) {
      alert.error(error);

      dispatch(clearErrors());
    }

    dispatch(
      getGuide(keyword, currentPage, status)
    );
  }, [
    dispatch,
    keyword,
    
    currentPage,
    error,
    
    status,
  ]);

  const productIndexStart = (currentPage - 1) * resultPerPage;
  const productIndexEnd = Math.min(
    productIndexStart + resultPerPage,
    filteredGuidesCount
  );

  const visibleGuides = guides
    ? guides.slice(productIndexStart, productIndexEnd)
    : [];

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= pageCount; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={currentPage === i ? "active" : ""}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };
function handleFilterButtonClick() {
  const filtersElement = document.querySelector(".filters");
     const hotelsToBookElement = document.querySelector(".hotels_to_book");

  if (filtersElement) {
    filtersElement.style.marginLeft = "0";
  }
   if (hotelsToBookElement) {
     hotelsToBookElement.style.marginTop = "130px";
   }
}
function handleClearAllClick() {
  const filtersElement = document.querySelector(".filters");
     const hotelsToBookElement = document.querySelector(".hotels_to_book");

  if (filtersElement) {
    filtersElement.style.marginLeft = "-420px";
  }
   if (hotelsToBookElement) {
     hotelsToBookElement.style.marginTop = "0px";
   }
}

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Metadata title="Book Guide" description="Book Guide" />
          <div className="book_hotel">
            {/* booking information */}
            <div className="info_booking">
              <h6>Location : {keyword}</h6>
            </div>
            <div className="display_hotels">
              <button
                className="mobile-only-button"
                onClick={handleFilterButtonClick}
              >
                Filters
              </button>
              <div className="filters">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <h6>Filter</h6>
                  <button
                    className="clear-all-button"
                    onClick={handleClearAllClick}
                    style={{ cursor: "pointer" }}
                  >
                    &#x2716;
                  </button>
                </div>

                <div className="CategoryBox">
                  <label htmlFor="customCategories">Availability</label>
                  <ul className="categoryBox">
                    {statuses.map((category) => (
                      <li
                        className="category-link"
                        key={category}
                        onClick={() => setStatus(category)}
                      >
                        {category}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="horizontal" style={{ marginLeft: "10px" }}></div>

              {/* showing all the hotels available */}
              <div className="hotels_to_book">
                {/* <Alert_offers msg="Flat 25% off with ICICI Bank Offer. Use Coupon Code : ICICIDC | ICICICC" /> */}
                {/* <Alert_offers msg="Flat 35% off with Kotak Bank Cards. Use Coupon Code : CTKOTAK" /> */}

                <span className="guidesp">Availability: {status ? status : "None"}</span>

                <p className="guidesp">Total Available {count} Guides</p>

                {visibleGuides.map((guide) => (
                  <Guide_items key={guide._id} guide={guide} />
                ))}
              </div>
            </div>

            {pageCount > 1 && (
              <div className="paginationBox">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  Prev
                </button>
                {renderPageNumbers()}
                <button
                  disabled={currentPage === pageCount}
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Book_Guide;
