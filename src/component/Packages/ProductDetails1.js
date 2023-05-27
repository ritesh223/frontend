import React, { Fragment, useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "../Hotels/Book_Hotel/hotel_room.css";
import ReactStars from "react-rating-stars-component";
import ReviewCard from "../Hotels/Book_Hotel/ReviewCard";
import Loader from "../Loader/Loader";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Metadata from "../Metadata";
import { useAlert } from "react-alert";
import {
  clearErrors,
  getProduct1Details,
  new1Review,
} from "../../actions/product1Action";
import { addItemsToCart1 } from "../../actions/cartAction";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { NEW_REVIEW1_RESET } from "../../constants/Product1Constants";
const ProductDetails1 = () => {
  const params = useParams();
  const alert = useAlert();
  const history = useHistory();
  const dispatch = useDispatch();
   const { product1, loading, error } = useSelector(
     (state) => state.product1Details
   );
   const { isAuthenticatedUser, user } = useSelector((state) => state.user);
   const { success, error: reviewError } = useSelector(
     (state) => state.newReview1
   );
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (reviewError) {
      alert.error(reviewError);
      dispatch(clearErrors());
    }
    if (success) {
      alert.success("Review Submitted Successfully");
      dispatch({ type: NEW_REVIEW1_RESET });
    }
   
    dispatch(getProduct1Details(params.id));
  }, [dispatch, params.id, error, alert, reviewError, success]);
 

  
  
  const options = {
    size: "large",
    value: product1.ratings,
    readOnly: true,
    precision: 0.5,
  };
  //  const [quantity, setQuantity] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
   const increaseQuantity = () => {
     if (product1.Stock <= quantity) return;

     const qty = quantity + 1;
     setQuantity(qty);
   };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;

    const qty = quantity - 1;
    setQuantity(qty);
  };

  const addToCartHandler = () => {
    

    const item = {
      productId: params.id,
   
      quantity:quantity,
      Category : product1.Category,
      price: product1.price
    };

    dispatch(
      addItemsToCart1(item.productId, item.quantity,item.Category, item.price)
    );
    alert.success("Item Added To Cart");
    
  };

  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const reviewSubmitHandler = () => {
    const myForm = new FormData();

    myForm.set("rating", rating);
    myForm.set("comment", comment);
    myForm.set("product1Id", params.id);
    myForm.set("userId", user._id);
    myForm.set("name", user.name);
    

    dispatch(new1Review(myForm));

    setOpen(false);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Metadata title={`${product1.name}`} />
          <div className="maindiv">
            <div className="room_detail">
              <p>
                <ReactStars {...options} />({product1.numOfReviews} reviews)
              </p>
              <h6>
                <strong> {product1.name}</strong>
                <br />
                {product1.city},{product1.state}
              </h6>
              <p>{product1.address}</p>
             
            </div>
            <div className="room_img">
              <Carousel>
                {product1.images &&
                  product1.images.map((item, i) => (
                    <img
                      key={item.url}
                      className="CarouselImage"
                      src={item.url}
                      alt={`${i} Slide`}
                    />
                  ))}
              </Carousel>
            </div>
            <div className="daynight">
              <p>
                {product1.days} Days, {product1.nights} nights Plan.
              </p>
            </div>
            <div className="detailsBlocks-3">
              <h1>{`₹ ${product1.price}`}</h1>
              <div className="detailsBlocks-3-1">
                <div className="detailsBlocks-3-1-1">
                  <button
                    type="button"
                    onClick={decreaseQuantity}
                    style={{ border: "none" }}
                  >
                    -
                  </button>
                  <input
                    style={{ border: "none" }}
                    readOnly
                    type="number"
                    value={quantity}
                  />
                  <button
                    style={{ border: "none" }}
                    type="button"
                    onClick={increaseQuantity}
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                type="button"
                disabled={product1.Stock < 1 ? true : false}
                onClick={addToCartHandler}
                style={{
                  backgroundColor: "#EB124D",
                  color: "white",
                  padding: "5px 15px",
                  borderRadius: "5px",
                  border: "none",
                }}
              >
                Add to Cart
              </button>

              <p>
                Status:
                <b className={product1.Stock < 1 ? "redColor" : "greenColor"}>
                  {product1.Stock < 1 ? "OutOfStock" : "InStock"}
                </b>
              </p>
              <span>In Stock : {product1.Stock}</span>
              <div className="packagecategory">
                <h5>Package Category : {product1.Category}</h5>
              </div>
              <div className="package_info">
                <h5>About Package</h5>
                {product1.description}
                {/* <p>Nearby : {product1.nearby}</p> */}
              </div>
            </div>

            <div className="daysum">
              <h4>Day Wise Plans</h4>
              {product1 &&
                product1.dayplans &&
                product1.dayplans.map((dayplan) => (
                  <div key={dayplan._id}>
                    <p>Day: {dayplan.day}</p>
                    <p>Summary: {dayplan.summary}</p>
                  </div>
                ))}
            </div>

            <div className="Activitysum">
              <h5>Activities Included</h5>
              {product1 &&
                product1.activities &&
                product1.activities.map((activity) => (
                  <div key={activity._id}>
                    <p>{activity.name}</p>
                  </div>
                ))}
            </div>

            <div className="reviewsubmit">
              <button
                onClick={() => {
                  if (!isAuthenticatedUser) {
                    // console.log("Please login first");
                    alert.error("Please login first");
                  } else {
                    submitReviewToggle();
                  }
                }}
                className="submitReview"
                // disabled={!isAuthenticatedUser}
              >
              Submit Review
                
              </button>
            </div>
          </div>
          <h3 className="reviewsHeading">Reviews</h3>
          <Dialog
            aria-labelledby="simple-dialog-title"
            open={open}
            onClose={submitReviewToggle}
          >
            <DialogTitle>Submit Review</DialogTitle>
            <DialogContent className="submitDialog">
              <Rating
                onChange={(e) => setRating(e.target.value)}
                value={rating}
                size="large"
              />

              <textarea
                className="submitDialogTextArea"
                cols="30"
                rows="5"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </DialogContent>
            <DialogActions>
              <Button onClick={submitReviewToggle} color="secondary">
                Cancel
              </Button>
              <Button onClick={reviewSubmitHandler} color="primary">
                Submit
              </Button>
            </DialogActions>
          </Dialog>

          {product1.reviews && product1.reviews[0] ? (
            <div className="reviews">
              {product1.reviews &&
                product1.reviews.map((review) => (
                  <ReviewCard key={review._id} review={review} />
                ))}
            </div>
          ) : (
            <p className="noReviews">No Reviews Yet</p>
          )}

          {/* <div className="vendor_id">
            <p>Vendor ID: {product.vendor}</p>
          </div> */}
        </>
      )}
    </>
  );
};

export default ProductDetails1;
