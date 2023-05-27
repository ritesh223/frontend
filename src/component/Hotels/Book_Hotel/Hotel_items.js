import React from 'react'
import './hotel_items.css';
import hotelr from '../../../img/mumbai.jpg'
import { Link } from 'react-router-dom'
import ReactStars from "react-rating-stars-component"
import Metadata from '../../Metadata';
// import { Rating } from "@material-ui/lab";


export default function Hotel_items({ product }) {
  const options = {
    
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor:"orange",
    // value: 4.5,
    isHalf:true,
    size: window.innerWidth <600 ? 20:25,

    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  }
  return (
    <>
      {/* <Metadata title={}  description= {} /> */}

      <div className="hotel_item" key={product._id}>
        <img
          className="hotel_item_imgs"
          src={product.images[0].url}
          alt={product.name}
        />

        <div className="hotel_item_info" id="hotel_item_infos">
          <div
            className="rev"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <p>
              <ReactStars {...options} />
              <span> ({product.numOfReviews} Reviews)</span>
            </p>
          </div>
          <div
            className="descstate"
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              width: "100%",
            }}
          >
            <h6 style={{ width: "120%" }}>
              <strong> {product.name}</strong>
              <br /> {product.state}
            </h6>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "end",
              width: "100%",
            }}
          >
            <h6 className="h6btn">
              ₹{product.price} <br />
            </h6>
            {/* <p>{hotelitem.description}</p> */}
          </div>
          <div
            className="htbtn"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "end",
              width: "100%",
            }}
          >
            <Link to={`/product/${product._id}`}>
              <button className="btn" id="hotel-item_btn">
                View Details
              </button>
            </Link>
            {/* <button className='btn'>Book Now</button> */}
          </div>
        </div>
      </div>
    </>
  );
}

// export default function Hotel_items({ hotel_items, location }) {

//   return (
//     // <>
//     //   <div className="hotel_item">
//     //     <img src={hotelr} alt="" />

//     //     <div className="hotel_item_info">
//     //       <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
//     //         <p>⭐⭐⭐⭐⭐</p>
//     //         <span class="badge text-bg-warning" style={{ height: "min-content" }}>23% Off</span>
//     //       </div>
//     //       <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
//     //         <h6><strong> Mariners Bay |1 BHK Pool Apartment </strong><br /> {location}</h6>
//     //         <h6>₹2,347 <br /> <small>+₹282 taxes</small></h6>
//     //       </div>
//     //       <div style={{ display: "flex", flexDirection: "row", justifyContent: "end", width: "100%" }}>
//     //         <p>Book for 5 and pay for 4 Night - CTB5G1</p>
//     //       </div>
//     //       <div style={{ display: "flex", flexDirection: "row", justifyContent: "end", width: "100%" }}>
//     //         <Link to="/hotel_room"><button className='btn'>Book Now</button></Link>
//     //         {/* <button className='btn'>Book Now</button> */}
//     //       </div>
//     //     </div>
//     //   </div>
//     //   </>


    


// )}
