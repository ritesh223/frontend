import React, { useState, useEffect } from "react";
import axios from "axios";
import './Restshow.css';
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import Metadata from "../Metadata";
import NearMeIcon from "@mui/icons-material/NearMe";
function Restshow() {
    // API_KEY=fsq30UmKQ17liqUA+KyidH/IV8yR/Rs2gJT64kl/7rSc6xk
    const [loading , setloading] = useState(true);
      const { keyword } = useParams();

const [restaurants, setRestaurants] = useState([]);


useEffect(() => {
  const fetchRestaurants = async () => {

    // Get latitude and longitude of city
    const geocodingResponse = await axios.get(
      `https://api.opencagedata.com/geocode/v1/json?q=${keyword}&key=5a1b748d8c3e4899983594854c8554b8`
    );
    const { lat, lng } = geocodingResponse.data.results[0].geometry;
    const response = await axios.get(
      `https://api.geoapify.com/v2/places?categories=catering.restaurant,catering.cafe&filter=circle:${lng},${lat},15000&bias=proximity:${lng},${lat}&lang=en&limit=100&apiKey=9845f449ffb944ee8b13fe8d39e9924f`
    );
    setloading(false);
    setRestaurants(response.data.features);
  };

  fetchRestaurants();
}, []);
const handleGetThere = (restaurant) => {
  const lat = restaurant.geometry.coordinates[1];
  const lng = restaurant.geometry.coordinates[0];
  window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`);
};
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Metadata title={`Restaurants - ${keyword}`} description="Book Hotel" />
          <div className="card-containerrest">
            <h1>Restaurants in {keyword}</h1>
            <hr />

            <div className="restcard">
              {restaurants.map((restaurant) => {
                if (restaurant.properties && restaurant.properties.name) {
                  return (
                    <div key={restaurant.properties.place_id} className="card">
                      <h2>{restaurant.properties.name}</h2>
                      <p><strong>Address :</strong> {restaurant.properties.address_line2}</p>

                      <p>
                        <strong>Type : </strong>{restaurant.properties.datasource.raw.amenity}
                      </p>
                      <p>
                        <strong>Email :</strong> {restaurant.properties.datasource.raw.email}
                      </p>
                      <p>
                        <strong>Mobile-Number :</strong>{" "}
                        {restaurant.properties.datasource.raw.phone}
                      </p>
                      <p>
                        <strong>Opening Hours :</strong>{" "}
                        {restaurant.properties.datasource.raw.opening_hours}
                      </p>
                      <button onClick={() => handleGetThere(restaurant)}>
                        <strong style={{color:"black"}}>Get There :</strong> <NearMeIcon color="secondary" />
                      </button>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Restshow;
