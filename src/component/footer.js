//import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faYoutube, faLinkedin, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import './footer.css';
export default function Footer() {
    function Copyright() {
        const currentYear = new Date().getFullYear();
        return (
            <div>
                BUDGET<sub>TRIP</sub> &#169; {currentYear}
            </div>
        );
    }

    return (
        <div className="footer bg-dark">
            <div className="d-flex justify-content-between" id='footer_flex'>
                <div className="ftr font-monospace">
                    <ul className="list my-2">
                        <li><Link to="/faqs">Privacy Policy</Link></li>
                        <li><Link to="/faqs">User Agreement </Link></li>
                        <li><Link to="/faqs">About Us </Link></li>
                        <li><Link to="/faqs">Terms &amp; Conditions </Link></li>
                        <li><Link to="/faqs">Contact Us </Link></li>

                    </ul>
                </div>
                <div className="social d-flex justify-content-evenly fa-2x align-items-center my-5">

                    <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} id="sicon1" className="rotate"></FontAwesomeIcon></a>
                    <a href="https://twitter.com/i/flow/login"><FontAwesomeIcon icon={faTwitter} id="sicon2" className="rotate"></FontAwesomeIcon></a>
                    <a href="https://www.youtube.com/"><FontAwesomeIcon icon={faYoutube} id="sicon3" className="rotate"></FontAwesomeIcon></a>
                    <a href="https://www.linkedin.com/"><FontAwesomeIcon icon={faLinkedin} id="sicon4" className="rotate"></FontAwesomeIcon></a>
                    <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} id="sicon5" className="rotate"></FontAwesomeIcon></a>
                    <a href="https://telegram.org/"><FontAwesomeIcon icon={faTelegram} id="sicon6" className="rotate"></FontAwesomeIcon></a>
                </div>

                <div className="copy text-white font-monospace ">
                    <Copyright></Copyright>
                </div>

            </div>



        </div>

    )
}