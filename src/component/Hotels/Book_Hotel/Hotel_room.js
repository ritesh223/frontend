import React from 'react'
// import Carousel from './Carousel'
import './hotel_room.css'
import Review from './Review'
import Carousel from 'react-material-ui-carousel'
// import { Carousel } from "react-material-ui-carousel";
import { useSelector, useDispatch } from "react-redux";
import ReactStars from "react-rating-stars-component"

import {
  clearErrors,
  getProductDetails,
} from '../../../actions/productAction';
import { useParams } from "react-router-dom";
import { useEffect } from 'react';

const Hotel_romm = ({ match }) => {

  const options = {

    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "orange",
    size: window.innerWidth < 600 ? 20 : 25,
    // value: product.ratings,
    readOnly: true,
    precision: 0.5,
  }
  // const { params } = useParams();
  const [params] = useParams();

  const dispatch = useDispatch();
  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );
  useEffect(() => {
    if (error) {
      // alert.error(error);
      alert(error);

      dispatch(clearErrors());
    }
    dispatch(getProductDetails(params.id));
  }, [dispatch,params.id, error])
  return (
    <>
      <div className="room_detail"> <p><ReactStars {...options} /></p>
        <h6><strong> Mariners Bay |1 BHK Pool Apartment </strong><br /> Calangute</h6>
        <p>Book for 5 and pay for 4 Night - CTB5G1</p>
      </div>
      <div className="room_img">
        {/* <Carousel /> */}
        
          <Carousel>
            {product.images && product.images.map((item, i) => (
              <img
                key={item.url}
                className="CarouselImage"
                src={item.url}
                alt={`${i} Slide`}
              />
            ))}
          </Carousel>

        
      </div>

    </>
  )
}

export default Hotel_romm;


// const Hotel_romm = ({match}) => {
//   const options = {
    
//     edit: false,
//     color: "rgba(20,20,20,0.1)",
//     activeColor: "orange",
//     size: window.innerWidth < 600 ? 20 : 25,
//     value: product.ratings,
//     readOnly: true,
//     precision: 0.5,
//   }
//   const { params } = useParams();
//   const dispatch = useDispatch();
//   const { product, loading, error } = useSelector(
//     (state) => state.productDetails
//   );
//   useEffect(() => {
//     if (error) {
//       // alert.error(error);
//       alert(error);
      
//       dispatch(clearErrors());
//     }
//     dispatch(getProductDetails(match.params.id));
//   }, [dispatch,match,params.id, error])
//   const roomTypes = [
//     { name: "Deluxe Room", price: "₹2,347" },
//     { name: "Superior Room", price: "₹3,599" },
//     { name: "Suite Room", price: "₹5,799" },
//   ];
//   const vendorId = 'ABC123';
//   return (
//     <>
//       {/* intro */}
//       <h3>HERE it comes</h3>
//       <div className="room_detail">
//         <p><ReactStars {...options} /></p>
//         <h6><strong> Mariners Bay |1 BHK Pool Apartment </strong><br /> Calangute</h6>
//         <p>Book for 5 and pay for 4 Night - CTB5G1</p>
//       </div>

//       {/* img carousel */}
//       <div className="room_img">
//         {/* <Carousel /> */}
//         <Carousel>
//           {product.images.map((item, i) => (
//             <img
//               key={i}
//               className="CarouselImage"
//               src={item.url}
//               alt={`${i} Slide`}
//             />
//           ))}
//         </Carousel>
        
//       </div>
//       <div className="room_types">
//         {roomTypes.map((roomType, index) => (
//           <div key={index} className="card">
//             <h6>{roomType.name}</h6>
//             <p>{roomType.price} <small>+₹282 taxes</small></p>
//             <ul>
//               <li>Complimentary breakfast</li>
//               <li>Free Wi-Fi</li>
//               <li>Mini fridge</li>
//               <li>Hair dryer</li>
//             </ul>
//             <button className='btn' >Book {roomType.name} </button>
//           </div>
//         ))}
//       </div>

      

//       {/* review tab */}
//       <div className="display_room">

//         {/* filters settings */}
//         <div className="reviews">

//           <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "100%" }}>
//             <h6>Traveller reviews</h6>
//             <p>Verified reviews</p>
//           </div>

//           <div className="price_range" style={{ display: "flex", flexDirection: "row", justifyContent: "start", width: "100%" }}>
//             <h1 style={{ marginRight: "10px", color: "red" }}>4.5  </h1>
//             <p>Excellent <br />⭐⭐⭐⭐</p>
//           </div>

//           {/* <div>
//             <h6>What travellers rated on</h6>
//             <div className="price_range" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
//               <p>Location</p>
//               <p>⭐⭐⭐⭐</p>
//             </div>
//             <div className="price_range" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
//               <p>Sleep Quality</p>
//               <p>⭐⭐⭐⭐</p>
//             </div>
//             <div className="price_range" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
//               <p>Rooms</p>
//               <p>⭐⭐⭐⭐⭐</p>
//             </div>
//             <div className="price_range" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
//               <p>Service</p>
//               <p>⭐⭐⭐</p>
//             </div>
//             <div className="price_range" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
//               <p>Cleanliness</p>
//               <p>⭐⭐⭐⭐⭐</p>
//             </div>
//           </div> */}

//         </div>

//         <div className="horizontal" style={{ marginLeft: "10px" }}></div>

//         {/* showing all the hotels available */}
//         {/* <div className="room_to_book">
//           <Review title="Thanks to St. Laurns Staffs" stars="⭐⭐⭐⭐⭐" date="27 Feb, 2023" by="by sreetravelsblr" msg="I travel to Shirdi almost every month. Every time will stay at St.Laurns. Here we get peace of mind, especially while praying at Dwaraka Mai. The way they perform the aarthi is mind blowing. Thanks to the staffs of St. Laurns"  />
//           <Review title="Best peaceful Stay, Best care for family" stars="⭐⭐⭐⭐" date="26 Feb, 2023 " by="by 589indranilm" msg="Special Thanks Sidhhant, for great support and excellent quality food for us and specially for the young one. Thanks to Roop for excellent booking support, and Manager Abhishek for extending our stay in hotel despite having no room for few days and no booking from us. This save us from lot of hassel as young one fell sick. Young one recover quickly with hotel s doctor and appropriate care by staffs and sidhant s food. And thank you Rahul, for his guidence so we had darshan on the same day we checked in. 😀 Thanks a lot St Lauren Shirdi." />
//           <Review title="Wonderful Trip to St Laurn’s Spiritual Resort" stars="⭐⭐⭐⭐⭐" date="26 Feb, 2023 " by="by Mukhs" msg="Nice resort and nice looking good. Wonderful staying in this resort nicely cleaning for housekeeping service. Specially thanks for Mr. Sudhir Kumar for housekeeping friendly. Thank you for all staff and resort"/>
          
//         </div> */}
//       </div>
//         <div className='vendor_id'>
//           <p>Vendor ID: {vendorId}</p>
//         </div>
//     </>
//   )
// }
