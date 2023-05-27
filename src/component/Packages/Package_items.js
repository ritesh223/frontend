import React from "react";
import './Packageitems.css';
// import hotelr from "../../../img/mumbai.jpg";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import Metadata from "../Metadata";
// import { Rating } from "@material-ui/lab";

export default function Package_items({ product1 }) {

  // console.log(product1.ratings);
  // console.log(product1.name);
  // console.log("this is product1");
  // console.log(product1);
  const options = {
    // stars: [
    //   { value: 1, label: '⭐' },
    //   { value: 2, label: '⭐' },
    //   { value: 3, label: '⭐' },
    //   { value: 4, label: '⭐' },
    //   { value: 5, label: '⭐' }
    //   ]
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "orange",
    // value: 4.5,
    isHalf: true,
    size: window.innerWidth < 600 ? 20 : 25,

    value: product1 && product1.ratings ? product1.ratings : 0,
    readOnly: true,
    precision: 0.5,
  };
  
  return (
    <>
      {/* <Metadata title={}  description= {} /> */}

      <div className="package_item" key={product1._id}>
        {/* <img src={product.image[0].url} alt="image" /> */}
        {/* {product && product.image && product.image[0] && <img src={product.image[0].url} alt="image" />} */}
        {product1 && product1.images && product1.images.length > 0 && (
          <img src={product1.images[0].url} alt={product1.name} />
        )}

        <div className="package_item_info">
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
              <span> ({product1 && product1.numOfReviews} Reviews)</span>
            </p>
            <span
              className="badge text-bg-warning"
              style={{ height: "min-content" }}
            >
              23% Off
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <h6>
              <strong> {product1 && product1.name}</strong>
              <br /> {product1 && product1.city}
            </h6>
            <h6>
              ₹{product1 && product1.price} <br />
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
            {/* <p>{hotelitem.description}</p> */}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "end",
              width: "100%",
            }}
          >
            {product1 && product1._id && (
              <Link to={`/package/${product1._id}`}>
                <button className="btn " id="package_btn">View Details</button>
              </Link>
            )}
            {/* <button className='btn'>Book Now</button> */}
          </div>
        </div>
      </div>
    </>
  );
}

// export default function package_items({ package_items, location }) {

//   return (
//     // <>
//     //   <div className="package_item">
//     //     <img src={hotelr} alt="" />

//     //     <div className="package_item_info">
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
//     //         <Link to="/package_room"><button className='btn'>Book Now</button></Link>
//     //         {/* <button className='btn'>Book Now</button> */}
//     //       </div>
//     //     </div>
//     //   </div>
//     //   </>

// )}
