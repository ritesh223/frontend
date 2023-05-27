
// import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture, faMoneyBill1Wave, faPhone } from '@fortawesome/free-solid-svg-icons';

import './whybook.css';

export default function Book() {
    return (
        <div className="book" style={{ height: "auto" }}>
            <div className="d-flex align-items-center h-100" id='whybook_flex' style={{ backgroundColor: "#26282A" }}>

                <div className="flex-grow-1 ms-4 text-center" style={{ fontSize: "20px", color: "white", fontFamily: "cursive" }}>
                    <strong>Why Book With Us?</strong>
                </div>
                <div className="vl mx-2" id='whybook_line' style={{ border: "1px solid aliceblue", height: "90px" }}></div>
                <div className="fa-3x mx-4">
                    <FontAwesomeIcon icon={faPlaneDeparture} id="sicon1" className="rotate" style={{ color: "#7bd6de" }}></FontAwesomeIcon>
                </div>
                <div className="flex-grow-1 ms-3" style={{ fontSize: "20px", color: "white", fontFamily: "cursive" }}>
                    <strong>
                        Easy Bookings

                    </strong>
                </div>
                <div className="fa-3x">
                    <FontAwesomeIcon icon={faMoneyBill1Wave} id="sicon1" className="rotate" style={{ color: "#a7ce38" }}></FontAwesomeIcon>

                </div>
                <div className="flex-grow-1 ms-3" style={{ fontSize: "20px", color: "white", fontFamily: "cursive" }}>
                    <strong>
                        Low Prices

                    </strong>
                </div>
                <div className="fa-3x">
                    <FontAwesomeIcon icon={faPhone} id="sicon1" className="rotate" style={{ color: "#ef4c50" }}></FontAwesomeIcon>

                </div>
                <div className="flex-grow-1 ms-3" style={{ fontSize: "20px", color: "white", fontFamily: "cursive" }}>
                    <strong>
                        24 x 7 Support

                    </strong>
                </div>
            </div>
        </div>

    )
}