import React from 'react'
import Activity_Item from './Activity_Item'
import './book_activity.css'
import { useAlert } from "react-alert";
import UnsplashImages from '../../UnsplashImages';
import axios from "axios";
import NearMeIcon from "@mui/icons-material/NearMe";
import Metadata from "../../Metadata";
import Loader from "../../Loader/Loader";
import { useParams } from "react-router-dom";
import { useLocation  } from "react-router-dom";
import rafting from "../../../img/rafting.jpg";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import "./activity_item.css";
export default function Book_Activity() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const checkin = query.get("checkin");
  const alert = useAlert();
  const { keyword } = useParams();
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
let i=0;
  useEffect(() => {
    const fetchData = async () => {

       const geocodingResponse = await axios.get(
         `https://api.opencagedata.com/geocode/v1/json?q=${keyword}&key=5a1b748d8c3e4899983594854c8554b8`
       );
       const { lat, lng } = geocodingResponse.data.results[0].geometry;
      try {
        const response = await axios.get(
          "https://api.opentripmap.com/0.1/en/places/radius",
          {
            params: {
              lon: `${lng}`,
              lat: `${lat}`,
              radius: "10000",
              k: "activity",
              format: "json",
              apikey:
                "5ae2e3f221c38a28845f05b66f5058a7d70cc80f77b9aa10ef829805",
              limit: 30,
            },
          }
        );
        setActivities(response.data);
        const totalresult = response.data.length;
       
        setLoading(false);
      } catch (error) {
        // console.error(error);
        alert.error(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
   const handleGetThere = (activity) => {
     const lat = activity.point.lat;
     const lng = activity.point.lon;
     window.open(
       `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`
     );
   };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Metadata title={`Activities - ${keyword}`} description="Activity" />
      <div className="activitycon">
        <h1>Activities in {keyword}</h1>
        {activities && activities.length > 0 ? (
          <div>
            {activities.map(
              (activity) =>
                activity.name && (
                  <div className="card" key={activity.xid}>
                    <UnsplashImages name={activity.kinds.split(",")[0]} />
                    <h4>Name : {activity.name}</h4>
                    <h5> Type : {activity.kinds.split(",")[0]}</h5>
                    <button onClick={() => handleGetThere(activity)}>
                      <strong style={{color:"black"}}>Get There :</strong> <NearMeIcon color="secondary" />
                    </button>
                  </div>
                )
            )}
          </div>
        ) : (
          <div>No activities in Current Region</div>
        )}
      </div>
    </>
  );
}
