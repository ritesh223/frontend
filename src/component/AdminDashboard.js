import React, { useState, useEffect } from "react";
import axios from "axios";
import "./admindash.css";
import { useAlert } from "react-alert";
import Welcome from "./Welcome";
import Loader from "../component/Loader/Loader";
import NotFound from "./Not Found/NotFound"
const AdminDashboard = () => {
  const [collections, setCollections] = useState([]);
  const [selectedCollection, setSelectedCollection] = useState("");
  const [collectionData, setCollectionData] = useState([]);
const alert = useAlert();
  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await axios.get(
          "https://budgettrip1.onrender.com/collections"
        );
        setCollections(response.data);
      } catch (error) {
        console.error("Error fetching collections:", error);
      }
    };

    fetchCollections();
  }, []);
const deleteRecord = async (collection, dataId) => {
  try {
    // Make an API request to delete the record with the provided collection and ID
    const response = await fetch(
      `https://budgettrip1.onrender.com/deleteRecord/${collection}/${dataId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    
    if (response.ok) {
        alert.success("Deleted Successfully")

      const updatedData = collectionData.filter((data) => data._id !== dataId);

      setCollectionData(updatedData);
    } else {
      alert.error("Error deleting the record:", response.status);

    }
  } catch (error) {
    alert.error("Error deleting the record:", error); 
  }
};
  const fetchCollectionData = async (collection) => {
    try {
      const response = await axios.get(
        `https://budgettrip1.onrender.com/collections/${collection}`
      );
      setCollectionData(response.data);
      setSelectedCollection(collection);
    } catch (error) {
      console.error(
        `Error fetching data from collection ${collection}:`,
        error
      );
    }
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Admin Dashboard</h1>
      <h2 style={{ textAlign: "center" }}>BUDGETtrip Insights </h2>
      <div className="admin-dashboard">
        <div className="ad1">
          <h3>Insights</h3>
          {collections.length > 0 ? (
            <ul
              className="collection-list"
              style={{ listStyleType: "none", padding: 0 }}
            >
              {collections.map((collection, index) => (
                <button
                  key={index}
                  onClick={() => fetchCollectionData(collection)}
                  className="collection-button"
                  style={{
                    display: "flex",
                    padding: "0.5rem",
                    width: "10vmax",
                    margin: "5px",
                    textAlign: "center",
                    alignItems: "center",
                  }}
                >
                  {collection}
                </button>
              ))}
            </ul>
          ) : (
            <Loader />
          )}
        </div>

        <div className="ad2" style={{ width: "100%", height: "100%" }}>
          {selectedCollection ? (
            <div className="collection-data">
              <h1>Choosed Insights: {selectedCollection}</h1>
              <div className="ad3">
                {collectionData.length > 0 ? (
                  <div>
                    {selectedCollection === "users" ? (
                      <div className="admin1">
                        {collectionData.map((data, index) => (
                          <div key={index} className="admin-card">
                            <p>
                              <strong>Name:</strong> {data.name}
                            </p>
                            <p>
                              <img src={`${data.avatar.url}`} alt="" />
                            </p>
                            <p>
                              <strong>MobileNumber:</strong> {data.MobileNumber}
                            </p>

                            <p>
                              <strong>CreatedAt:</strong> {data.createdAt}
                            </p>

                            <p>
                              <strong>Email:</strong> {data.email}
                            </p>

                            <p>
                              <strong>Role:</strong> {data.role}
                            </p>
                            <p>
                              <strong>Id:</strong> {data._id}
                            </p>

                            <button
                              onClick={() =>
                                deleteRecord(selectedCollection, data._id)
                              }
                            >
                              Delete
                            </button>
                          </div>
                        ))}
                      </div>
                    ) : selectedCollection === "guides" ? (
                      <div className="admin1">
                        {collectionData.map((data, index) => (
                          <div key={index} className="admin-card ">
                            <p>
                              <strong>Name:</strong> {data.name}
                            </p>
                            <p>
                              <img src={`${data.avatar.url}`} alt="" />
                            </p>
                            <p>
                              <strong>MobileNumber:</strong> {data.MobileNumber}
                            </p>

                            <p>
                              <strong>CreatedAt:</strong> {data.createdAt}
                            </p>
                            <p>
                              <strong>Email:</strong> {data.email}
                            </p>

                            <p>
                              <strong>Role:</strong> {data.role}
                            </p>
                            <p>
                              <strong>Id:</strong> {data._id}
                            </p>
                            <button
                              onClick={() =>
                                deleteRecord(selectedCollection, data._id)
                              }
                            >
                              Delete
                            </button>
                          </div>
                        ))}
                      </div>
                    ) : selectedCollection === "orders" ? (
                      <div className="admin1">
                        {collectionData.map((data, index) => (
                          <div key={index} className="admin-card ">
                            <p>
                              <strong>Id:</strong> {data._id}
                            </p>
                            <p>
                              <strong>Name:</strong> {data.orderItems[0].name}
                            </p>
                            <p>
                              <strong>Price:</strong> {data.orderItems[0].price}
                            </p>
                            <p>
                              <strong>Type:</strong> {data.orderItems[0].type}
                            </p>
                            <p>
                              <strong>Order Status:</strong> {data.orderStatus}
                            </p>
                            <p>
                              <strong>Payment Status:</strong>{" "}
                              {data.paymentInfo.status}
                            </p>
                            <p>
                              <strong>User:</strong> {data.user}
                            </p>
                            <button
                              onClick={() =>
                                deleteRecord(selectedCollection, data._id)
                              }
                            >
                              Delete
                            </button>
                          </div>
                        ))}
                      </div>
                    ) : selectedCollection === "vendors" ? (
                      <div className="admin1">
                        {collectionData.map((data, index) => (
                          <div key={index} className="admin-card ">
                            <p>
                              <strong>Name:</strong> {data.name}
                            </p>
                            <p>
                              <img src={`${data.avatar.url}`} alt="" />
                            </p>
                            <p>
                              <strong>MobileNumber:</strong> {data.MobileNumber}
                            </p>

                            <p>
                              <strong>CreatedAt:</strong> {data.createdAt}
                            </p>

                            <p>
                              <strong>Email:</strong> {data.email}
                            </p>

                            <p>
                              <strong>Role:</strong> {data.role}
                            </p>
                            <p>
                              <strong>Id:</strong> {data._id}
                            </p>
                            <button
                              onClick={() =>
                                deleteRecord(selectedCollection, data._id)
                              }
                            >
                              Delete
                            </button>
                          </div>
                        ))}
                      </div>
                    ) : selectedCollection === "product1" ? (
                      <div className="admin1">
                        {collectionData.map((data, index) => (
                          <div key={index} className="admin-card ">
                            <div>
                              <p>
                                <strong>Id : </strong>
                                {data._id}
                              </p>

                              <p>
                                <strong>Name : </strong>
                                {data.name}
                              </p>

                              <p>
                                <strong>Created at : </strong>
                                {data.createdAt}
                              </p>

                              <p>
                                <strong>Price : </strong>₹ {data.price}
                              </p>

                              <p>
                                <strong>Type : </strong>
                                {data.type}
                              </p>

                              <p>
                                <strong>Vendor : </strong>
                                {data.vendor}
                              </p>
                            </div>

                            <button
                              onClick={() =>
                                deleteRecord(selectedCollection, data._id)
                              }
                            >
                              Delete
                            </button>
                          </div>
                        ))}
                      </div>
                    ) : selectedCollection === "products" ? (
                      <div className="admin1">
                        {collectionData.map((data, index) => (
                          <div key={index} className="admin-card ">
                            <div>
                              <p>
                                <strong>Id : </strong>
                                {data._id}
                              </p>

                              <p>
                                <strong>Name : </strong>
                                {data.name}
                              </p>

                              <p>
                                <strong>Created at : </strong>
                                {data.createdAt}
                              </p>

                              <p>
                                <strong>Price : </strong>₹ {data.price}
                              </p>

                              <p>
                                <strong>Type : </strong>
                                {data.type}
                              </p>

                              <p>
                                <strong>Vendor : </strong>
                                {data.vendor}
                              </p>
                            </div>
                            <button
                              onClick={() =>
                                deleteRecord(selectedCollection, data._id)
                              }
                            >
                              Delete
                            </button>
                          </div>
                        ))}
                      </div>
                    ) : selectedCollection === "trips" ? (
                      <div className="admin1">
                        {collectionData.map((data, index) => (
                          <div key={index} className="admin-card ">
                            <div>
                              <p>
                                <strong>Id : </strong>
                                {data._id}
                              </p>

                              <p>
                                <strong>Name : </strong>
                                {data.name}
                              </p>

                              <p>
                                <strong>email : </strong>
                                {data.email}
                              </p>

                              <p>
                                <strong>Destination : </strong>₹ {data.destination}
                              </p>

                              <p>
                                <strong>StartDate : </strong>
                                {data.startDate}
                              </p>

                              <p>
                                <strong>EndDate : </strong>
                                {data.endDate}
                              </p>
                              <p>
                                <strong>Requirements : </strong>
                                {data.requirements}
                              </p>
                              <p>
                                <strong>CreatedAt : </strong>
                                {data.createdAt}
                              </p>
                            </div>
                            <button
                              onClick={() =>
                                deleteRecord(selectedCollection, data._id)
                              }
                            >
                              Delete
                            </button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      

                      <NotFound />
                    )}
                  </div>
                ) : (
                  <NotFound />
                )}
              </div>
            </div>
          ) : (
            <Welcome />
          )}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
