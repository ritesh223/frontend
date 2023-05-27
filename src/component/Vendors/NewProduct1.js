import React, { Fragment, useEffect, useState } from "react";
import "./newProduct.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, createProduct1 } from "../../actions/product1Action";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import Metadata from "../Metadata";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import DescriptionIcon from "@material-ui/icons/Description";
import StorageIcon from "@material-ui/icons/Storage";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import SideBar from "./Sidebar";
import { NEW_PRODUCT1_RESET } from "../../constants/Product1Constants"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Loader from "../Loader/Loader";
const NewProduct1 = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, error, success } = useSelector((state) => state.newProduct1);
  const { vendor } = useSelector((state) => state.vendor);

  const vendorid = vendor._id;

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [days, setDays] = useState("");
  const [nights, setNights] = useState("");
  const [city, setCity] = useState("");
  const [from, setFrom] = useState("");
  const [state, setState] = useState("");
  const [price, setPrice] = useState(0);
  const [Category, setCategory] = useState("");
//   const [nearby, setNearby] = useState("");
  const [images, setImages] = useState([]);
  const [dayplans, setDayplans] = useState([{ day: "", summary: "" }]);
  const [activities, setActivities] = useState([{ name: "" }]);
  const [Stock, setStock] = useState(0);
  const [imagesPreview, setImagesPreview] = useState([]);
const categories = [
  "deluxe",
  "budget",
  "luxury",
  
];
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Hotel Added Successfully");
      history.push("/vendor");
      dispatch({ type: NEW_PRODUCT1_RESET });
    }
  }, [dispatch, alert, error, history, success]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") setName(value);
    else if (name === "description") setDescription(value);
    else if (name === "days") setDays(value);
    else if (name === "nights") setNights(value);
    else if (name === "city") setCity(value);
    else if (name === "from") setFrom(value);
    else if (name === "state") setState(value);
    else if (name === "price") setPrice(value);
    else if (name === "Category") setCategory(value);
    // else if (name === "nearby") setNearby(value);
    else if (name === "Stock") setStock(value);
  };

  const handleDayTypeChange = (index, event) => {
    const { name, value } = event.target;
    const updatedDayTypes = [...dayplans];
    updatedDayTypes[index] = { ...updatedDayTypes[index], [name]: value };
    setDayplans(updatedDayTypes);
  };

  const handleActivityChange = (index, event) => {
    const { name, value } = event.target;
    const updatedActivities = [...activities];
    updatedActivities[index] = { ...updatedActivities[index], [name]: value };
    setActivities(updatedActivities);
  };

  const addDayType = () => {
    setDayplans([...dayplans, { day: "", summary: "" }]);
  };

  const deleteDayType = (index) => {
    const updatedDayTypes = [...dayplans];
    updatedDayTypes.splice(index, 1);
    setDayplans(updatedDayTypes);
  };

  const addActivity = () => {
    setActivities([...activities, { name: "" }]);
  };

  const deleteActivity = (index) => {
    const updatedActivities = [...activities];
    updatedActivities.splice(index, 1);
    setActivities(updatedActivities);
  };

  const handleSubmit1 = (event) => {
    event.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.set("name", name);
    formDataToSend.set("description", description);
    formDataToSend.set("days", days);
    formDataToSend.set("nights", nights);
    formDataToSend.set("city", city);
    formDataToSend.set("state", state);
    formDataToSend.set("from", from);
    formDataToSend.set("price", price);
    formDataToSend.set("Category", Category);
    // formDataToSend.set("nearby", nearby);
    formDataToSend.set("Stock", Stock);
    formDataToSend.set("vendor", vendorid);
    images.forEach((image) => {
      formDataToSend.append("images", image);
    });

    // Convert roomtype array to array of objects and append to form data
    const daytypeData = dayplans.map((d) => ({
      day: d.day,
      summary: d.summary,
    }));

    formDataToSend.append("dayplans", JSON.stringify(daytypeData));

    // Convert amenities array to array of objects and append to form data
    const activitiesData = activities.map((activity) => ({
      name: activity.name,
    }));
    formDataToSend.append("activities", JSON.stringify(activitiesData));
    //  console.log("Form Data:", Object.fromEntries(formDataToSend));
    dispatch(createProduct1(formDataToSend));
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
            <Metadata title="Create Package" />
            <div className="dashboard">
              <SideBar />
              <div className="modal-container hotelcs">
                <div className="modal-content hotelcss">
                  {/* <span className="close" onClick={closeModal}>
              &times;
            </span> */}
                  <h2>Add Holiday Package</h2>
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
                        placeholder="Name of Package"
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
                        value={description}
                        placeholder="About Package"
                        onChange={handleInputChange}
                        required
                      ></textarea>
                    </div>

                    <div>
                      <label htmlFor="address">No of Days</label>
                      <input
                        type="text"
                        id="days"
                        name="days"
                        placeholder="No of Days"
                        value={days}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="address">No of Nights</label>
                      <input
                        type="text"
                        id="nights"
                        name="nights"
                        placeholder="No of Nights"
                        value={nights}
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
                        placeholder="Where to"
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
                      {" "}
                      <label htmlFor="state">From</label>
                      <input
                        type="text"
                        id="from"
                        name="from"
                        placeholder="From where"
                        value={from}
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
                        placeholder=""
                        value={price}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <small>Price of Package</small>

                    <div>
                      {" "}
                      <label htmlFor="Category">Category</label>
                      {/* <input
                  type="text"
                  id="Category"
                  name="Category"
                  value={Category}
                  onChange={handleInputChange}
                  required
                /> */}
                      <select
                        name="Category"
                        onChange={(e) => setCategory(e.target.value)}
                        style={{
                          padding: "8px",
                          fontSize: "16px",
                          borderRadius: "4px",
                          border: "1px solid #ccc",
                          backgroundColor: "#f8f8f8",
                          width: "100%",
                          marginBottom: "10px",
                        }}
                      >
                        <option value="">Choose Category</option>
                        {categories.map((cate) => (
                          <option key={cate} value={cate}>
                            {cate}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="dayplans">Days Plans</label>
                      {dayplans.map((d, index) => (
                        <div key={index}>
                          <input
                            type="text"
                            name="day"
                            placeholder="Day Number"
                            value={d.day}
                            onChange={(event) =>
                              handleDayTypeChange(index, event)
                            }
                          />
                          <input
                            type="text"
                            name="summary"
                            placeholder="Day summary"
                            value={d.summary}
                            onChange={(event) =>
                              handleDayTypeChange(index, event)
                            }
                          />
                          <button
                            type="button"
                            onClick={() => deleteDayType(index)}
                            style={{
                              backgroundColor: "#ff0000",
                              color: "#ffffff",
                              border: "none",
                              borderRadius: "5px",
                              padding: "5px 10px",
                              cursor: "pointer",
                            }}
                          >
                            Delete Day Plan
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={addDayType}
                        style={{
                          background: "#007bff",
                          color: "#fff",
                          border: "none",
                          padding: "8px 16px",
                          borderRadius: "4px",
                          cursor: "pointer",
                          marginTop: "10px",
                        }}
                      >
                        Add Day Plan
                      </button>
                    </div>
                    <div>
                      <label htmlFor="amenities">Activities</label>
                      {activities.map((activity, index) => (
                        <div key={index}>
                          <input
                            type="text"
                            name="name"
                            placeholder="Activity Name"
                            value={activity.name}
                            onChange={(event) =>
                              handleActivityChange(index, event)
                            }
                          />
                          <button
                            type="button"
                            onClick={() => deleteActivity(index)}
                            style={{
                              backgroundColor: "#ff0000",
                              color: "#ffffff",
                              padding: "5px 10px",
                              border: "none",
                              borderRadius: "3px",
                              cursor: "pointer",
                            }}
                          >
                            Delete Activity
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={addActivity}
                        style={{
                          backgroundColor: "#f5f5f5",
                          color: "#333",
                          padding: "8px 16px",
                          border: "none",
                          borderRadius: "4px",
                          cursor: "pointer",
                          marginTop: "10px",
                          fontSize: "14px",
                        }}
                      >
                        Add Activities
                      </button>

                      <div>
                        <label htmlFor="stock">Stock</label>
                        <input
                          type="number"
                          id="stock"
                          name="Stock"
                          placeholder=""
                          value={Stock}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <small>Total Package Stocks</small>
                    </div>

                    <div id="createProductFormFile">
                      <label htmlFor="stock">Holiday Package Images</label>
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

export default NewProduct1;

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
