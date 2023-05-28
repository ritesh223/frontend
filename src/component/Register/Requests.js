import axios from "axios";
import Metadata from "../Metadata";
import "./Requests.css";
import { useAlert } from "react-alert";
import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { requests, clearErrors } from "../../actions/userAction";

const Requests = () => {
  const alert = useAlert();
  const history = useHistory();
  // const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "",
    startDate: "",
    endDate: "",
    requirements: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true); // Start the loader

    try {
      const response = await axios.post(
        "https://budgettrip.onrender.com/api/v1/requests",
        formData
      );

      if (response.data.success) {
        alert.success(response.data.message);
history.push("/")
        // Clear the form
        setFormData({
          name: "",
          email: "",
          destination: "",
          startDate: "",
          endDate: "",
          requirements: "",
        });
      } else {
        alert.error(response.data.message);
      }
    } catch (error) {
      alert.error("Error submitting request");
    }

    setLoading(false); // Stop the loader
  };

  return (
    <>
      <Metadata title="User Requests" description="User Requests" />
      <div className="requests-container">
        <h2>Request Custom Holiday Package</h2>
        <form className="requests-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="destination">Destination:</label>
            <input
              type="text"
              id="destination"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="startDate">Start Date:</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="endDate">End Date:</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="requirements">Requirements:</label>
            <textarea
              id="requirements"
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Requests;