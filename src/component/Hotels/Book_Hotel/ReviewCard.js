import { Rating } from "@material-ui/lab";
import React from "react";
import PortraitIcon from "@mui/icons-material/Portrait";

import four from '../../../img/background/four.jpg';
import ReactStars from "react-rating-stars-component";
import { useSelector, useDispatch } from "react-redux";
const ReviewCard = ({ review }) => {
     const { isAuthenticatedUser,user } = useSelector(
    (state) => state.user
  );
    // const options = {
    //    edit: false,
    // color: "rgba(20,20,20,0.1)",
    // activeColor: "orange",
    // size: window.innerWidth < 600 ? 20 : 25,
    // isHalf: true,
    // precision: 0.5,
    // value: review.rating,
    // readOnly: true,
    // };
      const options = {
        value: review.rating,
        readOnly: true,
        precision: 0.5,
      };

    return (
  
      <div>
        
  <div className="reviewCard">
    {/* <img src={user.avatar.url} alt="User" /> */}
 <PortraitIcon />
    <p>{review.name}</p>
    <Rating {...options} />
    <span className="reviewCardComment">{review.comment}</span>
  </div>


      </div>
    );
};

export default ReviewCard;