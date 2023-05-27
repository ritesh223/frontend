import React, { Fragment, useEffect, useState } from "react";
import "./newProduct.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, createProduct } from "../../actions/productAction";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import Metadata from "../Metadata";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import DescriptionIcon from "@material-ui/icons/Description";
import StorageIcon from "@material-ui/icons/Storage";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import SideBar from "./Sidebar";
import { NEW_PRODUCT_RESET } from "../../constants/productConstants";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Loader from "../Loader/Loader";
const NewProduct = () => {
    const history = useHistory();
  const dispatch = useDispatch();
  const alert = useAlert();
   const { loading, error, success } = useSelector((state) => state.newProduct);
   const { vendor} = useSelector((state) => state.vendor);

const vendorid = vendor._id;

const [name,setName]= useState("");
const [description,setDescription]= useState("");
const [address,setAddress]= useState("");
const [city,setCity]= useState("");
const [state,setState]= useState("");
const [price,setPrice]= useState(0);
const [Category,setCategory]= useState("");
const [nearby,setNearby]= useState("");
const [images,setImages]= useState([]);
const [roomtype,setRoomtype]= useState([{name:"",price:""}]);
const [amenities,setAmenities]= useState([{name:""}]);
const [Stock,setStock]= useState(0);
const [imagesPreview, setImagesPreview] = useState([]);

const categories = ["deluxe", "standard", "luxury"];
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Hotel Added Successfully");
      history.push("/vendor");
      dispatch({ type: NEW_PRODUCT_RESET });
    }
  }, [dispatch, alert, error, history, success]);




 const handleInputChange = (event) => {
   const { name, value } = event.target;
   if (name === "name") setName(value);
   else if (name === "description") setDescription(value);
   else if (name === "address") setAddress(value);
   else if (name === "city") setCity(value);
   else if (name === "state") setState(value);
   else if (name === "price") setPrice(value);
   else if (name === "Category") setCategory(value);
   else if (name === "nearby") setNearby(value);
   else if (name === "Stock") setStock(value);
 };



const handleRoomTypeChange = (index, event) => {
  const { name, value } = event.target;
  const updatedRoomTypes = [...roomtype];
  updatedRoomTypes[index] = { ...updatedRoomTypes[index], [name]: value };
  setRoomtype(updatedRoomTypes);
};


 const handleAmenityChange = (index, event) => {
   const { name, value } = event.target;
   const updatedAmenities = [...amenities];
   updatedAmenities[index] = { ...updatedAmenities[index], [name]: value };
   setAmenities(updatedAmenities);
 };


 const addRoomType = () => {
   setRoomtype([...roomtype, { name: "", price: "" }]);
 };

 const deleteRoomType = (index) => {
   const updatedRoomTypes = [...roomtype];
   updatedRoomTypes.splice(index, 1);
   setRoomtype(updatedRoomTypes);
 };

 const addAmenity = () => {
   setAmenities([...amenities, { name: "" }]);
 };

 const deleteAmenity = (index) => {
   const updatedAmenities = [...amenities];
   updatedAmenities.splice(index, 1);
   setAmenities(updatedAmenities);
 };


const handleSubmit1 = (event) => {
  event.preventDefault();
   const formDataToSend = new FormData();
   formDataToSend.set("name", name);
   formDataToSend.set("description", description);
   formDataToSend.set("address", address);
   formDataToSend.set("city", city);
   formDataToSend.set("state", state);
   formDataToSend.set("price", price);
   formDataToSend.set("Category", Category);
   formDataToSend.set("nearby", nearby);
   formDataToSend.set("Stock", Stock);
   formDataToSend.set("vendor", vendorid);
   images.forEach((image) => {
     formDataToSend.append("images", image);
   });

   // Convert roomtype array to array of objects and append to form data
 const roomtypeData = roomtype.map((room) => ({
   name: room.name,
   price: room.price,
 }));

 formDataToSend.append("roomtype", JSON.stringify(roomtypeData));


   // Convert amenities array to array of objects and append to form data
   const amenitiesData = amenities.map((amenity) => ({
     name: amenity.name,
   }));
   formDataToSend.append("amenities", JSON.stringify(amenitiesData));
//  console.log("Form Data:", Object.fromEntries(formDataToSend));
  dispatch(createProduct(formDataToSend));
};

  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };



  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Fragment>
            <Metadata title="Create Hotel" />
            <div className="dashboard">
              <SideBar />
              <div className="modal-container hotelcs">
                <div className="modal-content hotelcss">
                  {/* <span className="close" onClick={closeModal}>
              &times;
            </span> */}
                  <h2>Add Hotel</h2>
                  <form
                    className="form1"
                    encType="multipart/form-data"
                    // onSubmit={handleSubmit}
                  >
                    <div>
                      {/* <SpellcheckIcon /> */}
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name of Hotel"
                        value={name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="description">Description</label>
                      <textarea
                        id="description"
                        name="description"
                        placeholder="About Hotel"
                        value={description}
                        onChange={handleInputChange}
                        required
                      ></textarea>
                    </div>

                    <div>
                      <label htmlFor="address">Address</label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        placeholder="Hotel Address"
                        value={address}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div>
                      {" "}
                      <label htmlFor="city">City</label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="City"
                        value={city}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      {" "}
                      <label htmlFor="state">State</label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        placeholder="State"
                        value={state}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div>
                      {/* <AttachMoneyIcon /> */}
                      <label htmlFor="price">Price</label>
                      <input
                        type="number"
                        id="price"
                        name="price"
                        value={price}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <small>Average Price of Hotel</small>

                    <div>
                      <label htmlFor="Category">Category</label>
                      <select
                        name="Category"
                        onChange={(e) => setCategory(e.target.value)}
                        style={{
                          padding: "0.5rem",
                          fontSize: "1rem",
                          border: "1px solid #ccc",
                          borderRadius: "4px",
                          marginTop: "0.5rem",
                          width: "100%",
                        }}
                      >
                        <option value="">Choose Category</option>
                        {categories.map((cate) => (
                          <option
                            key={cate}
                            value={cate}
                            style={{
                              fontSize: "1rem",
                            }}
                          >
                            {cate}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      {" "}
                      <label htmlFor="nearby">Nearby</label>
                      <input
                        type="text"
                        id="nearby"
                        placeholder="Nearby Destination"
                        name="nearby"
                        value={nearby}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="roomtype">Room Types</label>
                      {roomtype.map((room, index) => (
                        <div key={index}>
                          <input
                            type="text"
                            name="name"
                            placeholder="Enter Room Type"
                            value={room.name}
                            onChange={(event) =>
                              handleRoomTypeChange(index, event)
                            }
                          />
                          <input
                            type="text"
                            placeholder="Room Type Price"
                            name="price"
                            value={room.price}
                            onChange={(event) =>
                              handleRoomTypeChange(index, event)
                            }
                          />
                          <button
                            type="button"
                            onClick={() => deleteRoomType(index)}
                            style={{
                              backgroundColor: "#f44336",
                              color: "#fff",
                              border: "none",
                              padding: "5px 10px",
                              borderRadius: "4px",
                              cursor: "pointer",
                              marginLeft: "5px",
                            }}
                          >
                            Delete Room Type
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={addRoomType}
                        style={{
                          backgroundColor: "#4CAF50",
                          color: "white",
                          border: "none",
                          borderRadius: "4px",
                          padding: "8px 16px",
                          marginTop: "10px",
                          cursor: "pointer",
                          fontSize: "14px",
                        }}
                      >
                        Add Room Type
                      </button>
                    </div>
                    <div>
                      <label htmlFor="amenities">Amenities</label>
                      {amenities.map((amenity, index) => (
                        <div key={index}>
                          <input
                            type="text"
                            name="name"
                            placeholder="Ameneties provided by hotel"
                            value={amenity.name}
                            onChange={(event) =>
                              handleAmenityChange(index, event)
                            }
                          />
                          <button
                            type="button"
                            onClick={() => deleteAmenity(index)}
                            style={{
                              marginLeft: "10px",
                              backgroundColor: "#f44336",
                              color: "#fff",
                              border: "none",
                              padding: "5px 10px",
                              borderRadius: "5px",
                              cursor: "pointer",
                            }}
                          >
                            Delete Amenity
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={addAmenity}
                        style={{
                          backgroundColor: "#4CAF50",
                          color: "white",
                          padding: "10px 20px",
                          border: "none",
                          borderRadius: "4px",
                          cursor: "pointer",
                          marginTop: "10px",
                        }}
                      >
                        Add Amenity
                      </button>

                      <div>
                        <label htmlFor="stock">Stock</label>
                        <input
                          type="number"
                          id="stock"
                          name="Stock"
                          value={Stock}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <small>Total Hotel Rooms Available</small>
                    </div>

                    <div id="createProductFormFile">
                      <label htmlFor="stock">Hotel Room Images</label>
                      <input
                        type="file"
                        name="avatar"
                        accept="image/*"
                        onChange={createProductImagesChange}
                        multiple
                      />
                    </div>
                    <small>Image size less than 600kb - JPG Format Only</small>

                    <div id="createProductFormImage">
                      {imagesPreview.map((image, index) => (
                        <img key={index} src={image} alt="Product Preview" />
                      ))}
                    </div>
                    <button type="submit" onClick={handleSubmit1}>
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </Fragment>
        </>
      )}
    </>
  );
};

export default NewProduct;


//  const [formData, setFormData] = useState({
//    name: "",
//    description: "",
//    address: "",
//    city: "",
//    state: "",
//    price: 0,
//    Category: "",
//    nearby: "",
//    images: [],
//    roomtype: [{ name: "", price: "" }],
//    amenities: [{ name: "" }],
//    Stock: 0,
//  });


//  const createProductImagesChange = (e) => {
//    const files = Array.from(e.target.files);
//    const imagePreviews = [];
//    const selectedImages = [];

//    files.forEach((file) => {
//      const reader = new FileReader();

//      reader.onload = () => {
//        if (reader.readyState === 2) {
//          imagePreviews.push(reader.result);
//          selectedImages.push(file);
//          setFormData((prevFormData) => ({
//            ...prevFormData,
//            images: selectedImages, // Set the "images" field in formData state
//          }));
//          setImagesPreview(imagePreviews);
//        }
//      };

//      reader.readAsDataURL(file);
//    });
//  };

// const handleSubmit = (event) => {
//   event.preventDefault();
//   const formDataToSend = new FormData();

//   // Append form fields to formDataToSend
//   Object.entries(formData).forEach(([key, value]) => {
   
//       formDataToSend.append(key, value);
    
//   });

  
//   formData.images.forEach((image) => {
//     formDataToSend.append("images", image);
//   });

  

// console.log(formData);
// // dispatch(createProduct(formData,vendor._id));
// };
//  const handleRoomTypeChange = (index, event) => {
//    const { name, value } = event.target;
//    setFormData((prevFormData) => {
//      const roomtype = [...prevFormData.roomtype];
//      roomtype[index] = { ...roomtype[index], [name]: value };
//      return { ...prevFormData, roomtype };
//    });
//  };
// const handleAmenityChange = (index, event) => {
//   const { name, value } = event.target;
// //   console.log(`Changing amenity at index ${index}: ${name} - ${value}`);
//   setFormData((prevFormData) => {
//     const amenities = [...prevFormData.amenities];
//     amenities[index] = { ...amenities[index], [name]: value };
//     return { ...prevFormData, amenities };
//   });
// };
//  const addRoomType = () => {
//    setFormData((prevFormData) => ({
//      ...prevFormData,
//      roomtype: [...prevFormData.roomtype, { name: "", price: "" }],
//    }));
//  };

//  const deleteRoomType = (index) => {
//    setFormData((prevFormData) => {
//      const roomtype = [...prevFormData.roomtype];
//      roomtype.splice(index, 1);
//      return { ...prevFormData, roomtype };
//    });
//  };
//  const addAmenity = () => {
//    setFormData((prevFormData) => ({
//      ...prevFormData,
//      amenities: [...prevFormData.amenities, { name: "" }],
//    }));
//  };

//  const deleteAmenity = (index) => {
//    setFormData((prevFormData) => {
//      const amenities = [...prevFormData.amenities];
//      amenities.splice(index, 1);
//      return { ...prevFormData, amenities };
//    });
//  };

//  const [images, setImages] = useState([]);
//  const handleInputChange = (event) => {
//    setFormData((prevFormData) => ({
//      ...prevFormData,
//      [event.target.name]: event.target.value,
//    }));
//  };