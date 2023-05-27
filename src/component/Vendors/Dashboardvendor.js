import React ,{useEffect} from "react";
import Sidebar from "./Sidebar.js";
import "./Dashboardvendor.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Chart } from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import { getVendorProduct, getVendorProduct1 } from "../../actions/productAction.js";
import {
  getAllOrders,
  clearErrors,
  deleteOrder,
} from "../../actions/orderAction";

import Metadata from "../Metadata.js";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min.js";
import {
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  LineElement,
} from "chart.js";

const Dashboardvendor = () => {
  const { vendor } = useSelector((state) => state.vendor);
const { error, orders } = useSelector((state) => state.allOrders);
  const { vproducts } = useSelector((state) => state.vendorproducts);
  const { vproducts1 } = useSelector((state) => state.vendorproducts1);
  
  const dispatch = useDispatch();
  let outOfStock = 0;
  let outOfStock1 = 0;
  let totalAmount = 0;
  orders &&
    orders.forEach((item) => {
      totalAmount += item.itemsPrice;
    });



vproducts &&
  vproducts.forEach((item) => {
    if (item.Stock === 0) {
      outOfStock += 1;
    }
  });
vproducts1 &&
  vproducts1.forEach((item) => {
    if (item.Stock === 0) {
      outOfStock1 += 1;
    }
  });

 useEffect(() => {
   dispatch(getVendorProduct(vendor._id));
   dispatch(getVendorProduct1(vendor._id));
    dispatch(getAllOrders(vendor._id));
   
 }, [dispatch]);


  const lineState = {
    labels: ["Initial Amount", "Amount Earned"],
    datasets: [
      {
        label: "TOTAL AMOUNT",
        backgroundColor: ["tomato"],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        data: [0, totalAmount],
      },
    ],
  };
  

  const doughnutState = {
    labels: ["Out of Stock", "In Stock"],
    datasets: [
      {
        backgroundColor: ["#00A6B4", "#6800B4"],
        hoverBackgroundColor: ["#4B5000", "#35014F"],
        data: [outOfStock, vproducts ? vproducts.length - outOfStock : 0],
      },
    ],
  };

  const doughnutState1 = {
    labels: ["Out of Stock", "In Stock"],
    datasets: [
      {
        backgroundColor: ["#00A6B4", "#6800B4"],
        hoverBackgroundColor: ["#4B5000", "#35014F"],
        data: [outOfStock1,vproducts1 ? vproducts1.length - outOfStock1 : 0],
      },
    ],
  };


  const chartOptions = {
   
                      
    scales: {
      x: {
        type: "category",
      },  
      y: {
        type: "linear",
      },
    },
    elements: {
      point: {
        // Customize point element options
      },
      arc: {
        // Customize arc element options
      },
      line: {
        // Customize line element options
      },
    },
  };

  Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    ArcElement,
    LineElement
  );

  return (
    <div className="dashboard">
      <Metadata title="Dashboard - Vendor Panel" />
      <Sidebar />

      <div className="dashboardContainer">
        <Typography component="h1">Dashboard</Typography>

        <div className="dashboardSummary">
          <div>
            <p>
              Total Amount <br /> ₹{totalAmount}
            </p>
          </div>
          <div className="dashboardSummaryBox2">
            <Link>
              <p>Hotels</p>
              <p>{vproducts ? vproducts.length : 0}</p>
            </Link>
            <Link>
              <p>Packages</p>
              <p>{vproducts1 ? vproducts1.length : 0}</p>
            </Link>
            <Link>
              <p>Orders</p>
              <p>{orders ? orders.length : 0}</p>
            </Link>
          </div>
        </div>

        <div className="lineChart">
          <Line
            style={{ height: "600px", width: "600px" }}
            data={lineState}
            options={chartOptions}
          />
        </div>

        <div className="doughnutChart">
          {vproducts.length > 0 && (
            <div className="doughinfo">
              <h6>Hotels Rooms</h6>
              <p>
                Out of Stock: {outOfStock} <br />
              </p>
              In Stock: {vproducts.length - outOfStock}{" "}
              <Doughnut data={doughnutState} />
            </div>
          )}

          {vproducts1.length > 0 && (
            <div className="doughinfo">
              <h6>Holiday Packages</h6>
              <p>
                Out of Stock: {outOfStock1} <br />
              </p>
              In Stock: {vproducts1.length - outOfStock1}{" "}
              <Doughnut data={doughnutState1} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboardvendor;
