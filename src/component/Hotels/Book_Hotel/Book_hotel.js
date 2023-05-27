import React, { useState,useEffect} from 'react';
import Accordion from './Accordion'
import Alert_offers from './Alert_offers'
import { useAlert } from "react-alert";
import './book_hotel.css'
import Hotel_items from './Hotel_items'
import Metadata from '../../Metadata';
import { clearErrors, getProduct} from '../../../actions/productAction';
import {useSelector,useDispatch} from 'react-redux';
import Loader from '../../Loader/Loader';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import  Pagination  from 'react-js-pagination';
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const categories = [
  "deluxe",
  "standard",
  "luxury",
  
];
const ratingscategories = [
 "1",
 "2",
 "3",
 "4",
 "5",



];



const Book_hotel = () => {
const alert = useAlert();

  const [currentPage, setCurrentPage] = useState(1);
 

  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const checkin = query.get('checkin');
  const checkout = query.get('checkout');
  const rooms = query.get('rooms');
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState();

  const { keyword} = useParams();
  

  const dispatch = useDispatch();
  const { loading, error, products, productsCount ,filteredProductsCount} = useSelector((state) => state.products);
  // console.log(products.name);
 let resultPerPage=6;
  let count = filteredProductsCount;

  const pageCount = Math.ceil(filteredProductsCount / resultPerPage);
  const [price, setPrice] = useState(500);

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  useEffect(() => {
    if (error) {
      alert.error(error);
      // alert(error);
      dispatch(clearErrors());
    }
  
    dispatch(getProduct(keyword,currentPage , price ,category , ratings));
  }, [dispatch,keyword,currentPage, error , price,category ,ratings])

 
 function handleFilterButtonClick() {
   const filtersElement = document.querySelector(".filters1");
   const hotelsToBookElement = document.querySelector(".hotels_to_book1");

   if (filtersElement) {
     filtersElement.style.marginLeft = "0";
   }

   if (hotelsToBookElement) {
     hotelsToBookElement.style.marginTop = "450px";
   }
 }

 function handleClearAllClick() {
   const filtersElement = document.querySelector(".filters1");
   const hotelsToBookElement = document.querySelector(".hotels_to_book1");
   if (filtersElement) {
     filtersElement.style.marginLeft = "-420px";
   }
    if (hotelsToBookElement) {
      hotelsToBookElement.style.marginTop = "0px";
    }
 }
  const productIndexStart = (currentPage - 1) * resultPerPage;
  const productIndexEnd = Math.min(
    productIndexStart + resultPerPage,
    filteredProductsCount
  );

  const visibleProducts = products
    ? products.slice(productIndexStart, productIndexEnd)
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
 
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Metadata title="Book Hotel" description="Book Hotel" />
          <div className="book_hotel">
            {/* booking information */}
            <div className="info_booking">
              <h6>Destination : {keyword}</h6>
              <h6>CheckIN : {checkin}</h6>
              <h6>CheckOUT : {checkout}</h6>
              <h6>Rooms : {rooms}</h6>
            </div>
            <div className="display_hotels">
              <button
                className="mobile-only-button"
                onClick={handleFilterButtonClick}
              >
                Filters
              </button>
              <div className="filters1">
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
                  <Typography>Price</Typography>{" "}
                  <input
                    onChange={handlePriceChange}
                    type="range"
                    min={500}
                    max={20000}
                    value={price}
                    className="slider"
                    id="customRange2"
                  />
                  <div className="slider_values">
                    <span>Rs 500</span>
                    <span>Rs 20,000</span>
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
                  <Typography component="legend">Ratings Above</Typography>

                  <ul className="ratingBox">
                    {ratingscategories.map((ratings) => (
                      <li
                        className={`rating-link ${
                          ratings >= ratings ? "active" : ""
                        }`}
                        key={ratings}
                        onClick={() => setRatings(ratings)}
                      >
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

              <div className="horizontal1" style={{ marginLeft: "10px" }}></div>

              {/* showing all the hotels available */}
              <div className="hotels_to_book1">
                {/* <Alert_offers msg="Flat 25% off with ICICI Bank Offer. Use Coupon Code : ICICIDC | ICICICC" /> */}
                {/* <Alert_offers msg="Flat 35% off with Kotak Bank Cards. Use Coupon Code : CTKOTAK" /> */}

                <span className='hotelsp'>Category: {category ? category : "None"}</span>

                <p className='hotelsp'>Total {count} Hotels</p>

                {visibleProducts.map((product) => (
                  <Hotel_items key={product._id} product={product} />
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
}

export default Book_hotel


{/* <div className="filters"> */ }
{/* <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}> */ }
{/* <h6>Filters</h6> */ }
{/* <p style={{ cursor: "pointer" }}>clear all</p> */ }
{/* </div> */ }
{/*  */ }
{/* <div className="price_range" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%" }}> */ }
{/* <label htmlFor = "customRange2" className="">Price range</label> */ }
{/* <input type="range" className="form-range" min="1" max="10" id="customRange2" onChange={handlePriceChange} /> */ }
{/* <p>RS {price}/-</p> */ }
{/* </div> */ }

{/* <Accordion /> */ }
{/* </div>  */ }


{/* <Hotel_items hotel_item={hotel_items}/> */ }
{/* {/* <Hotel_items /> */ }
{/* <Hotel_items hotelitem={hotelitem} /> */ }
{/* {products &&
              products.map((hotelitem) => (
                <Hotel_items key={hotelitem._id} hotelitem={hotelitem} />
              ))} */}