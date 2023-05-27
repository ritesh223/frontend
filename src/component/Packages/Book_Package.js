import React, { useState, useEffect } from "react";
import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { clearErrors ,getProduct1 } from "../../actions/product1Action";
import Loader from "../Loader/Loader";
import Metadata from "../Metadata";
import { useSelector, useDispatch } from "react-redux";
import Package_items from './Package_items';
import { Typography } from "@material-ui/core";


const categories = ["deluxe", "budget" , "luxury"];

const ratingscategories = ["1", "2", "3", "4", "5"];


const Book_Package = () => {
const alert = useAlert();
const dispatch = useDispatch();

const [currentPage, setCurrentPage] = useState(1);

const location = useLocation();
const query = new URLSearchParams(location.search);
const deptdate = query.get('departure');
// const currcity = query.get('currcity');
const [category, setCategory] = useState("");
const [ratings, setRatings] = useState();
const { keyword,currcity } = useParams();


 const { loading, error, products1, products1Count, filteredProducts1Count } =
   useSelector((state) => state.products1);


 let resultPerPage = 6;
 let count = filteredProducts1Count;

 const pageCount = Math.ceil(filteredProducts1Count / resultPerPage);
 const [price, setPrice] = useState(500);

 const handlePriceChange = (e) => {
   setPrice(e.target.value);
 };
 useEffect(() => {
   if (error) {
     alert.error(error);
 
     dispatch(clearErrors());
   }
 
   dispatch(getProduct1(keyword,currcity, currentPage, price, category, ratings));
 }, [dispatch, keyword,currcity, currentPage, error, price, category, ratings]);

  const productIndexStart = (currentPage - 1) * resultPerPage;
  const productIndexEnd = Math.min(
    productIndexStart + resultPerPage,
    filteredProducts1Count
  );

  const visibleProducts1 = products1
    ? products1.slice(productIndexStart, productIndexEnd)
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
  const filtersElement = document.querySelector(".filters2");
       const hotelsToBookElement = document.querySelector(".hotels_to_book2");

  if (filtersElement) {
    filtersElement.style.marginLeft = "0";
  }
   if (hotelsToBookElement) {
     hotelsToBookElement.style.marginTop = "450px";
   }
}
function handleClearAllClick() {
  const filtersElement = document.querySelector(".filters2");
       const hotelsToBookElement = document.querySelector(".hotels_to_book2");

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
          <Metadata title="Book Package" description="Book Package" />
          <div className="book_hotel">
            {/* booking information */}
            <div className="info_booking">
              <h6>Destination : {keyword}</h6>
              <h6>Departure Date : {deptdate}</h6>
            </div>
            <div className="display_hotels">
              <button
                className="mobile-only-button"
                onClick={handleFilterButtonClick}
              >
                Filters
              </button>
              <div className="filters2">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Typography>Filters</Typography>
                  <button
                    className="clear-all-button"
                    onClick={handleClearAllClick}
                    style={{ cursor: "pointer" }}
                  >
                    &#x2716;
                  </button>
                </div>

                <div className="price_range">
                  <Typography>Price</Typography>
                  <input
                    onChange={handlePriceChange}
                    type="range"
                    min={1000}
                    max={50000}
                    value={price}
                    className="slider"
                    id="customRange2"
                  />
                  <div className="slider_values">
                    <span>Rs 1000</span>
                    <span>Rs 50,000</span>
                  </div>
                  <p>Rs {price}/-</p>
                </div>

                <div className="CategoryBox">
                  <Typography>Categories</Typography>
                  <ul className="categoryBox">
                    {categories.map((category) => (
                      <li
                        className="category-link"
                        key={category}
                        onClick={() => setCategory(category)}
                      >
                        {category}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="RatingBox">
                  <Typography>Ratings Above</Typography>
                  <ul className="ratingBox">
                    {ratingscategories.map((ratings) => (
                      <li
                        className={`rating-link ${
                          ratings >= ratings ? "active" : ""
                        }`}
                        key={ratings}
                        onClick={() => setRatings(ratings)}
                      >
                        {/* <div className="rating-stars"> */}
                        {[...Array(ratings)].map((_, i) => (
                          <span key={i} className="star-icon">
                            {ratings} ★
                          </span>
                        ))}
                        {/* </div> */}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="horizontal2" style={{ marginLeft: "10px" }}></div>

              {/* showing all the hotels available */}
              <div className="hotels_to_book2">
                {/* <Alert_offers msg="Flat 25% off with ICICI Bank Offer. Use Coupon Code : ICICIDC | ICICICC" /> */}
                {/* <Alert_offers msg="Flat 35% off with Kotak Bank Cards. Use Coupon Code : CTKOTAK" /> */}

                <span className="packagesp">Category: {category ? category : "None"}</span>

                <p className="packagesp">Total {count} Packages</p>

                {visibleProducts1.map((product1) => (
                  <Package_items key={product1._id} product1={product1} />
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

export default Book_Package;
