import React, { Fragment, useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "./hotel_room.css";
import ReactStars from "react-rating-stars-component";
import ReviewCard from "./ReviewCard";
import Loader from "../../Loader/Loader";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Metadata from "../../Metadata";
import { useAlert } from "react-alert";
import { clearErrors, getProductDetails ,newReview } from "../../../actions/productAction";
import { addItemsToCart } from "../../../actions/cartAction";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { NEW_REVIEW_RESET } from "../../../constants/productConstants";
const ProductDetails = () => {
  const alert = useAlert();
  const history = useHistory();
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );
  const { isAuthenticatedUser,user } = useSelector(
    (state) => state.user
  );
const { success, error: reviewError } = useSelector((state) => state.newReview);

  const params = useParams();
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
   dispatch({ type: NEW_REVIEW_RESET });
 }

    dispatch(getProductDetails(params.id));
  }, [dispatch, params.id, error,alert,reviewError,success]);
  // const options = {
  //   edit: false,
  //   color: "rgba(20,20,20,0.1)",
  //   activeColor: "orange",
  //   size: window.innerWidth < 600 ? 20 : 25,
  //   isHalf: true,
  //   precision: 0.5,
  //   value: product.ratings,
  //   readOnly: true,
  // };
  const options = {
    size: "large",
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  //  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState({});
  const increaseQuantity = (roomtype) => {
    if (product.Stock <= quantity[roomtype]) return;

    const qty = quantity[roomtype] ? quantity[roomtype] + 1 : 1;
    setQuantity((prevQuantity) => ({ ...prevQuantity, [roomtype]: qty }));
  };

  const decreaseQuantity = (roomtype) => {
    if (1 >= quantity[roomtype]) return;

    const qty = quantity[roomtype] ? quantity[roomtype] - 1 : 0;
    setQuantity((prevQuantity) => ({ ...prevQuantity, [roomtype]: qty }));
  };

 const addToCartHandler = (roomtype) => {
   if (!quantity[roomtype] || quantity[roomtype] <= 0) {
     alert.error("Please add rooms to book");
     return;
   }

   const item = {
     productId: params.id,
     quantity: quantity[roomtype],
     roomType: roomtype,
     price: product.roomtype.find((rt) => rt.name === roomtype)?.price || 0,
    
   };

   dispatch(
     addItemsToCart(item.productId, item.quantity, item.roomType, item.price)
   );
   alert.success("Item Added To Cart");
  //  if(isAuthenticatedUser){
  //   history.push("/cart");
  //  }
 };


  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

const reviewSubmitHandler = () => {
  const myForm = new FormData();

  myForm.set("rating", rating);
  myForm.set("comment", comment);
  myForm.set("productId",params.id);
myForm.set("userId", user._id);
myForm.set("name", user.name);
// myForm.set("user", user);

  dispatch(newReview(myForm));

  setOpen(false);
};

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Metadata title={`${product.name}`} />
          <div className="room_detail">
            <p>
              <Rating {...options} />({product.numOfReviews} reviews)
            </p>
            <h6>
              <strong> {product.name}</strong>
              <br />
              {product.city},{product.state}
            </h6>
            <p>{product.address}</p>
            {/* <p>Book for 5 and pay for 4 Night - CTB5G1</p> */}
          </div>
          <div className="room_img">
            <Carousel>
              {product.images &&
                product.images.map((item, i) => (
                  <img
                    key={item.url}
                    className="CarouselImage"
                    src={item.url}
                    alt={`${i} Slide`}
                  />
                ))}
            </Carousel>
          </div>

          <div className="room_types">
            {product.roomtype &&
              product.roomtype.map((roomtype, index) => (
                <div key={index} className="card">
                  <h6>{roomtype.name}</h6>
                  <p>
                    ₹ {roomtype.price} <sub>+₹282 taxes</sub>
                  </p>
                  <ul>
                    {product.ammeneties &&
                      product.ammeneties.map((amenity, i) => (
                        <li key={i}>{amenity.name}</li>
                      ))}
                  </ul>
                  <div className="inputbtn">
                    <button
                      className="btn"
                      onClick={() => decreaseQuantity(roomtype.name)}
                    >
                      -
                    </button>
                    <input
                      className="noofrooms"
                      value={quantity[roomtype.name] || 0}
                      readOnly
                      type="number"
                    />
                    <button
                      className="btn"
                      onClick={() => increaseQuantity(roomtype.name)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="btn"
                    disabled={product.Stock < 1 ? true : false}
                    onClick={() => addToCartHandler(roomtype.name)}
                  >
                    Add To Cart
                  </button>
                </div>
              ))}
          </div>

        
          <div className="room_info">
            <h5>Description</h5>
            {product.description}
            <p>Nearby : {product.nearby}</p>
          </div>
          <div className="stockstats">
            <p>
              Status:
              <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                {product.Stock < 1 ? " OutOfStock" : " InStock"}
              </b>
            </p>
          </div>
          <div className="stockstats">
            <p>InStock Qty : {product.Stock}</p>
          </div>

          <div className="reviewsubmit">
            <button
              onClick={() => {
                if (!isAuthenticatedUser) {
                  alert.error("Please login first");
                } else {
                  submitReviewToggle();
                }
              }}
              className="submitReview"
            
            >
              Submit Review
            </button>
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

          {product.reviews && product.reviews[0] ? (
            <div className="reviews">
              {product.reviews &&
                product.reviews.map((review) => (
                  <ReviewCard key={review._id} review={review} />
                ))}
            </div>
          ) : (
            <p className="noReviews">No Reviews Yet</p>
          )}

        </>
      )}
    </>
  );
};

export default ProductDetails;
