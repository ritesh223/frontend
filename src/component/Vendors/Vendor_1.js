import React, { useState } from 'react';
import './Vendor_1.css';
import { Link } from 'react-router-dom';
const Vendor_1 = () => {
   const [formData, setFormData] = useState({
     name: "",
     description: "",
     address: "",
     city: "",
     state: "",
     price: "",
     Category: "",
     nearby: "",
     images: [],
     roomTypes: [{ name: "", price: "" }],
     amenities: [{ name: "" }],
     Stock: "",
   });
   const [showModal, setShowModal] = useState(false);

   const openModal = () => {
     setShowModal(true);
   };

   const closeModal = () => {
     setShowModal(false);
   };

   const handleAddHotel = () => {
     openModal();
   };

   const handleInputChange = (event) => {
     setFormData((prevFormData) => ({
       ...prevFormData,
       [event.target.name]: event.target.value,
     }));
   };

   const handleImageUpload = (event) => {
     const files = Array.from(event.target.files);
     const imagePromises = files.map((file) => {
       return new Promise((resolve, reject) => {
         const reader = new FileReader();
         reader.onload = (event) => {
           resolve({
             public_id: file.name,
             url: event.target.result,
           });
         };
         reader.onerror = (error) => reject(error);
         reader.readAsDataURL(file);
       });
     });

     Promise.all(imagePromises)
       .then((images) => {
         setFormData((prevFormData) => ({
           ...prevFormData,
           images: [...prevFormData.images, ...images],
         }));
       })
       .catch((error) => {
         console.log("Image upload error:", error);
       });
   };

 const handleRoomTypeChange = (index, event) => {
   const { name, value } = event.target;
   console.log(`Changing room type at index ${index}: ${name} - ${value}`);

   setFormData((prevFormData) => {
     const roomTypes = prevFormData.roomTypes.map((roomType, idx) => {
       if (idx === index) {
         return { ...roomType, [name]: value };
       }
       return roomType;
     });
     return { ...prevFormData, roomTypes };
   });
 };
const handleAmenityChange = (index, event) => {
     const { name, value } = event.target;
       console.log(`Changing amenity at index ${index}: ${name} - ${value}`);
     setFormData((prevFormData) => {
       const amenities = [...prevFormData.amenities];
       amenities[index] = { ...amenities[index], [name]: value };
       return { ...prevFormData, amenities };
     });
   };





   const addRoomType = () => {
     setFormData((prevFormData) => ({
       ...prevFormData,
       roomTypes: [...prevFormData.roomTypes, { name: "", price: "" }],
     }));
   };

   const deleteRoomType = (index) => {
     setFormData((prevFormData) => {
       const roomTypes = [...prevFormData.roomTypes];
       roomTypes.splice(index, 1);
       return { ...prevFormData, roomTypes };
     });
   };

   
   const addAmenity = () => {
     setFormData((prevFormData) => ({
       ...prevFormData,
       amenities: [...prevFormData.amenities, { name: "" }],
     }));
   };

   const deleteAmenity = (index) => {
     setFormData((prevFormData) => {
       const amenities = [...prevFormData.amenities];
       amenities.splice(index, 1);
       return { ...prevFormData, amenities };
     });
   };

   const handleSubmit = (event) => {
     event.preventDefault();
     console.log(formData);
   };

  return (
    <div className="vend">
      <h1>Welcome back!</h1>
      <h2>What would you like to do?</h2>
      <div className="vendb">
        <button onClick={handleAddHotel}>
          <i className="fa-sharp fa-solid fa-hotel"></i> Add Hotel
        </button>
        <button
        // onClick={handleAddPackage}
        >
          <i className="fa-sharp fa-solid fa-plane"></i> Add Package
        </button>
        <Link to="/reg">
          <button>
            <i className="fa-solid fa-address-card"></i> View Your Profile
          </button>
        </Link>
      </div>

      {showModal && (
        <div className="modal-container hotelcs">
          <div className="modal-content hotelcss">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Add Hotel</h2>
            <form
              className="form1"
              encType="multipart/form-data"
              onSubmit={handleSubmit}
            >
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
              ></textarea>

              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="state">State</label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="price">Price</label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="Category">Category</label>
              <input
                type="text"
                id="Category"
                name="Category"
                value={formData.Category}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="nearby">Nearby</label>
              <input
                type="text"
                id="nearby"
                name="nearby"
                value={formData.nearby}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="images">Images</label>
              <input
                type="file"
                id="images"
                name="images"
                multiple
                onChange={handleImageUpload}
              />

              <h3>Room Types</h3>
              {formData.roomTypes.map((roomType, index) => (
                <div key={index}>
                  <label htmlFor={`roomType-${index}-name`}>Name</label>
                  <input
                    type="text"
                    id={`roomType-${index}-name`}
                    name={`roomTypes[${index}].name`}
                    value={roomType.name}
                    onChange={(event) => handleRoomTypeChange(index, event)}
                  />

                  <label htmlFor={`roomType-${index}-price`}>Price</label>
                  <input
                    type="number"
                    id={`roomType-${index}-price`}
                    name={`roomTypes[${index}].price`}
                    value={roomType.price}
                    onChange={(event) => handleRoomTypeChange(index, event)}
                  />

                  {index > 0 && (
                    <button type="button" onClick={() => deleteRoomType(index)}>
                      Delete
                    </button>
                  )}
                </div>
              ))}

              <button type="button" onClick={addRoomType}>
                Add Room Type
              </button>

              <h3>Amenities</h3>
              <label htmlFor="amenities">Amenities</label>
              {formData.amenities.map((amenity, index) => (
                <div key={index}>
                  <input
                    type="text"
                    name="name"
                    value={amenity.name}
                    onChange={(event) => handleAmenityChange(index, event)}
                  />
                  <button onClick={() => deleteAmenity(index)}>X</button>
                </div>
              ))}
              <button onClick={addAmenity}>Add Amenity</button>

              <label htmlFor="stock">Stock</label>
              <input
                type="number"
                id="stock"
                name="Stock"
                value={formData.Stock}
                onChange={handleInputChange}
                required
              />

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Vendor_1;







//  {showpackageModal && (
//           <div className="modal-container hotelcs">
//             <div className="modal-content hotelcss">
//               <span className="close" onClick={closepackageModal}>
//                 &times;
//               </span>
//               <h2>Add Package</h2>
//               <form className="form1" onSubmit={handleSubmit}>
//                 <label htmlFor="name">Name</label>
//                 <input type="text" id="name" name="name" />

//                 <label htmlFor="description">Description</label>
//                 <textarea id="description" name="description"></textarea>

//                 <label htmlFor="days">Days</label>
//                 <input type="number" id="days" name="days" />

//                 <label htmlFor="nights">Nights</label>
//                 <input type="number" id="nights" name="nights" />

//                 <label htmlFor="state">State</label>
//                 <input type="text" id="state" name="state" />

//                 <label htmlFor="city">City</label>
//                 <input type="text" id="city" name="city" />

//                 <label htmlFor="price">Price</label>
//                 <input type="number" id="price" name="price" />

//                 <label htmlFor="category">Category</label>
//                 <select id="category" name="category">
//                   <option value="budget">--select--</option>
//                   <option value="budget">Budget</option>
//                   <option value="luxury">Luxury</option>
//                   <option value="boutique">Deluxe</option>
//                 </select>

//                 <label htmlFor="daytypes">DaysPlan</label>
//                 <button
//                   type="button"
//                   onClick={addDayType}
//                   style={{
//                     backgroundColor: "green",
//                     color: "white",
//                     padding: "5px 10px",
//                     borderRadius: "5px",
//                     border: "none",
//                     width: "auto",
//                   }}
//                 >
//                   <strong>Add Day</strong>
//                 </button>
//                 <div id="daytypes">
//                   {dayTypes.map((dayType, index) => (
//                     <div key={index} className="daytype">
//                       <input
//                         type="number"
//                         name="day"
//                         value={dayType.type}
//                         placeholder={`Day ${index + 1}`}
//                         onChange={(event) => handleDayTypeChange(event, index)}
//                       />
//                       <input
//                         type="text"
//                         name="summary"
//                         value={dayType.summary}
//                         placeholder="Summary"
//                         onChange={(event) => handleDayTypeChange(event, index)}
//                       />
//                       <button
//                         type="button"
//                         onClick={() => deleteDayType(index)}
//                         style={{
//                           backgroundColor: "#f44336",
//                           color: "white",
//                           border: "none",
//                           padding: "5px 10px",
//                           borderRadius: "5px",
//                           margin: "1vh",
//                         }}
//                       >
//                         <strong>Delete</strong>
//                       </button>
//                     </div>
//                   ))}
//                 </div>

//                 <label htmlFor="amenities">Activities</label>
//                 <button
//                   style={{
//                     backgroundColor: "green",
//                     color: "white",
//                     padding: "5px 10px",
//                     borderRadius: "5px",
//                     cursor: "pointer",
//                     border: "none",
//                   }}
//                   onClick={() => {
//                     setActivities([...activities, { name: "" }]);
//                   }}
//                 >
//                   <strong>Add More</strong>
//                 </button>

//                 <div id="activities">
//                   {activities.map((activity, index) => (
//                     <div className="activity" key={index}>
//                       <input
//                         type="text"
//                         name="activity[]"
//                         value={activity.name}
//                         placeholder="Activity"
//                         onChange={(e) => {
//                           const newActivities = [...activities];
//                           newActivities[index] = { name: e.target.value };
//                           setActivities(newActivities);
//                         }}
//                       />
//                       {index >= 0 && (
//                         <button
//                           style={{
//                             backgroundColor: "#f44336",
//                             color: "white",
//                             border: "none",
//                             borderRadius: "5px",
//                             padding: "5px 10px",
//                             cursor: "pointer",
//                           }}
//                           onClick={() => {
//                             const newActivities = [...activities];
//                             newActivities.splice(index, 1);
//                             setActivities(newActivities);
//                           }}
//                         >
//                           <strong>Delete</strong>
//                         </button>
//                       )}
//                     </div>
//                   ))}
//                 </div>

//                 <hr />
//                 <label htmlFor="images">Images</label>
//                 <input
//                   type="file"
//                   id="images"
//                   name="images"
//                   accept="image/*"
//                   multiple
//                 />

//                 {/* <label htmlFor="stocks">Stocks</label>
//                             <input type="number" id="stocks" name="stocks" /> */}

//                 <button type="submit">Submit</button>
//               </form>
//             </div>
//           </div>
//         )

//         }




{/* <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  // value={name}
                  placeholder="Enter Hotel Name"
                  name="name"
                />

                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  placeholder="About Hotel"
                  // value={description}
                  name="description"
                ></textarea>

                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  // value={address}
                  placeholder="Address Of Hotel"
                  name="address"
                />

                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  // value={city}
                  placeholder="Enter City Of Hotel"
                  name="city"
                />
                <label htmlFor="city">State</label>
                <input
                  type="text"
                  id="state"
                  // value={state}
                  placeholder="Enter State Of Hotel"
                  name="state"
                />

                <label htmlFor="nearby">Nearby attractions</label>
                <textarea
                  id="nearby"
                  placeholder="Enter Nearby Place"
                  name="nearby"
                  // value={nearby}
                ></textarea>

                <label htmlFor="category">Category</label>
                <select id="category" placeholder="" name="category" 
                // value={Category}
                >
                  <option>--select--</option>
                  <option value="standard">Standard</option>
                  <option value="luxury">Luxury</option>
                  <option value="deluxe">Deluxe</option>
                </select>
                <label htmlFor="price">Price</label>
                <input
                  type="number"
                  placeholder="Enter Average Hotel Room Price"
                  // value={price}
                  id="price"
                  name="price"
                />
                <label htmlFor="roomtypes">Room types with prices</label>
                <button
                  type="button"
                  onClick={addRoomType}
                  style={{
                    backgroundColor: "green",
                    color: "white",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    border: "none",
                    width: "auto",
                  }}
                >
                  <strong>Add Room</strong>
                </button>
                <div id="roomtypes">
                  {roomTypes.map((roomType, index) => (
                    <div key={index} className="roomtype">
                      <input
                        type="text"
                        name="type"
                        value={roomType.type}
                        placeholder="Room type"
                        onChange={(event) => handleRoomTypeChange(event, index)}
                      />
                      <input
                        type="number"
                        name="price"
                        value={roomType.price}
                        placeholder="Price"
                        onChange={(event) => handleRoomTypeChange(event, index)}
                      />
                      <button
                        type="button"
                        onClick={() => deleteRoomType(index)}
                        style={{
                          backgroundColor: "#f44336",
                          color: "white",
                          border: "none",
                          padding: "5px 10px",
                          borderRadius: "5px",
                          margin: "1vh",
                        }}
                      >
                        <strong>Delete</strong>
                      </button>
                    </div>
                  ))}
                </div>

                <label htmlFor="amenities">Amenities</label>
                <button
                  style={{
                    backgroundColor: "green",
                    color: "white",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    border: "none",
                  }}
                  onClick={() => {
                    setAmenities([...amenities, { name: "" }]);
                  }}
                >
                  <strong>Add More</strong>
                </button>

                <div id="amenities">
                  {amenities.map((amenity, index) => (
                    <div className="amenity" key={index}>
                      <input
                        type="text"
                        name="amenity[]"
                        value={amenity.name}
                        placeholder="Amenity"
                        onChange={(e) => {
                          const newAmenities = [...amenities];
                          newAmenities[index] = { name: e.target.value };
                          setAmenities(newAmenities);
                        }}
                      />
                      {index >= 0 && (
                        <button
                          style={{
                            backgroundColor: "#f44336",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            padding: "5px 10px",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            const newAmenities = [...amenities];
                            newAmenities.splice(index, 1);
                            setAmenities(newAmenities);
                          }}
                        >
                          <strong>Delete</strong>
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                <hr />
                <label htmlFor="images">Images</label>
                <input
                  type="file"
                  id="images"
                  name="images"
                  accept="image/*"
                  multiple
                />

                <label htmlFor="stocks">Stocks</label>
                <input
                  type="number"
                  placeholder="Enter No Of Total Rooms Available In Hotel"
                  id="stocks"
                  name="stocks"
                  // value={Stock}
                />

                <button type="submit">Submit</button> */}



                
  // const [showpackageModal, setShowpackageModal] = useState(false);

  // const openpackageModal = () => {
  //     setShowpackageModal(true);
  // };

  // const closepackageModal = () => {
  //     setShowpackageModal(false);
  // };

  // const handleAddPackage = () => {
  //     openpackageModal();
  // };


  //handleaddroom

  // const [dayTypes, setDayTypes] = useState([
  //     { type: "", summary: "" },
  // ]);

  // const addRoomType = () => {
  //     setRoomTypes([...roomTypes, { type: "", price: "" }]);
  // };
  // const addDayType = () => {
  //     setDayTypes([...dayTypes, { type: "", summary: "" }]);
  // };
  // const handleRoomTypeChange = (event, index) => {
  //   const { name, value } = event.target;
  //   const newRoomTypes = [...roomTypes];
  //   newRoomTypes[index][name] = value;
  //   setRoomTypes(newRoomTypes);
  // };
  // const deleteRoomType = (index) => {
  //     const newRoomTypes = [...roomTypes];
  //     newRoomTypes.splice(index, 1);
  //     setRoomTypes(newRoomTypes);
  // };
  // const deleteDayType = (index) => {
  //     const newDayTypes = [...dayTypes];
  //     newDayTypes.splice(index, 1);
  //     setDayTypes(newDayTypes);
  // };


  // const handleDayTypeChange = (event, index) => {
  //     const { name, value } = event.target;
  //     const newDayTypes = [...dayTypes];
  //     newDayTypes[index][name] = value;
  //     setDayTypes(newDayTypes);
  // };
  // const [amenities, setAmenities] = useState([{ name: '' }]);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const myForm = new FormData(event.target);

  //   const formValues = Object.fromEntries(myForm.entries());
  //   console.log(formValues);

  //   // handle form submission
  // };

  //  const handleSubmit = (event) => {
  //    event.preventDefault();
  //    // handle form submission
  //    const myForm = new FormData(event.target);
  //    setFormData(myForm);
  //    console.log([...myForm]);
  //  };

  // const [activities, setActivities] = useState([{ name: '' }]);
