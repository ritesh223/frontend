import React, { Fragment, useState } from "react";
import "./Shipping.css";
import { useSelector, useDispatch } from "react-redux";
import { saveShippingInfo } from "../actions/cartAction";
import Metadata from "./Metadata";
import PinDropIcon from "@material-ui/icons/PinDrop";
import HomeIcon from "@material-ui/icons/Home";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import PublicIcon from "@material-ui/icons/Public";
import PhoneIcon from "@material-ui/icons/Phone";
import TransferWithinAStationIcon from "@material-ui/icons/TransferWithinAStation";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Country, State } from "country-state-city";
import { useAlert } from "react-alert";
import CheckoutSteps from "./Carts/CheckoutSteps";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Shipping = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const history = useHistory();
  const { shippingInfo } = useSelector((state) => state.cart);

  const [address, setAddress] = useState(shippingInfo.address);
  const [city, setCity] = useState(shippingInfo.city);
  const [state, setState] = useState(shippingInfo.state);
  const [country, setCountry] = useState(shippingInfo.country);
  const [pinCode, setPinCode] = useState(shippingInfo.pinCode);
  const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);
  const [datetravel, setDatetravel] = useState('');
  const [datetravels, setDatetravels] = useState('');

  const shippingSubmit = (e) => {
    e.preventDefault();

    if (phoneNo.length < 10 || phoneNo.length > 10) {
      alert.error("Phone Number should be 10 digits Long");
      return;
    }
   
    dispatch(
      saveShippingInfo({ address, city, state, country, pinCode, phoneNo , datetravel ,datetravels})
    );
    history.push("/order/confirm");
  };

  return (
    <Fragment>
      <Metadata title="Shipping Details" />

      <CheckoutSteps activeStep={0} />

      <div className="shippingContainer">
        <div className="shippingBox">
          <h2 className="shippingHeading">Your Info</h2>

          <form
            className="shippingForm"
            encType="multipart/form-data"
            onSubmit={shippingSubmit}
          >
            <div>
              <HomeIcon />
              <input
                type="text"
                placeholder="Address"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div>
              <LocationCityIcon />
              <input
                type="text"
                placeholder="City"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div>
              <PinDropIcon />
              <input
                type="number"
                placeholder="Pin Code"
                required
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
              />
            </div>

            <div>
              <PhoneIcon />
              <input
                type="number"
                placeholder="Phone Number"
                required
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                size="10"
              />
            </div>

            <div>
              <PublicIcon />

              <select
                required
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="">Country</option>
                {Country &&
                  Country.getAllCountries().map((item) => (
                    <option key={item.isoCode} value={item.isoCode}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>

            {country && (
              <div>
                <TransferWithinAStationIcon />

                <select
                  required
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                >
                  <option value="">State</option>
                  {State &&
                    State.getStatesOfCountry(country).map((item) => (
                      <option key={item.isoCode} value={item.isoCode}>
                        {item.name}
                      </option>
                    ))}
                </select>
              </div>
            )}
            <p>Enter Stay Dates</p>
            <small>From:</small>
            <div>
              <CalendarTodayIcon />

              <input
                type="date"
                placeholder="Date"
                required
                value={datetravel}
                onChange={(e) => setDatetravel(e.target.value)}
              />
            </div>
            <small>To:</small>
            <div>
              <CalendarTodayIcon />
              <input
                type="date"
                placeholder="Date"
                required
                value={datetravels}
                onChange={(e) => {
                  if (e.target.value >= datetravel) {
                    setDatetravels(e.target.value);
                  }
                }}
              />
            </div>

            <input
              type="submit"
              value="Continue"
              className="shippingBtn"
              disabled={state ? false : true}
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Shipping;
