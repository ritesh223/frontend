import axios from "axios";
import React, { useState, useEffect, Fragment } from "react";
// import "./UserRequests.css";
import Sidebar from "../Vendors/Sidebar";
import { DataGrid } from "@mui/x-data-grid";
import { useAlert } from "react-alert";

const UserRequests = () => {
  const alert = useAlert();
  const [response, setResponse] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchUserRequests = async () => {
      try {
        const res = await axios.get(
          "https://budgettrip1.onrender.com/api/v1/requests1"
        );
       

        if (res.data.success) {
          setResponse(res.data.trips);
          setTotalPages(Math.ceil(res.data.totalCount / 6));
        } else {
          alert.error("Failed to fetch user requests");
        }
      } catch (error) {
        alert.error("Error fetching user requests:", error);
      }
    };

    fetchUserRequests();
  }, []);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const renderRequests = () => {
    const startIndex = (currentPage - 1) * 6;
    const endIndex = startIndex + 6;

    const rows = response.slice(startIndex, endIndex).map((request) => ({
      id: request._id,
      name: request.name,
      email: request.email,
      destination: request.destination,
      startDate: request.startDate,
      endDate: request.endDate,
      requirements: request.requirements,
    }));

    const columns = [
      { field: "name", headerName: "Name", width: 150 },
      { field: "email", headerName: "Email", width: 220 },
      { field: "destination", headerName: "Destination", width: 200 },
      { field: "startDate", headerName: "Start Date", width: 110 },
      { field: "endDate", headerName: "End Date", width: 110 },
      { field: "requirements", headerName: "Requirements", width:550 },
    ];

    return (
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid rows={rows} columns={columns} pageSize={6} />
      </div>
    );
  };

  return (
    <Fragment>
      <div className="dashboard">
        <Sidebar />
        <div>
          <h2 style={{ textAlign: "center" }}>User Requests</h2>
          <div className="user-requests-container">{renderRequests()}</div>
          {/* <div className="pagination">
            <button
              className="pagination-btn"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>{" "}
            <span> {currentPage} </span>{" "}
            <button
              className="pagination-btn"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div> */}
        </div>
      </div>
    </Fragment>
  );
};

export default UserRequests;
