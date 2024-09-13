import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (

    <>
    <div className="footer">
        <div className="footer-content row">
            <div className="company-info col-md-4 col-12 mb-2">
                <h2>APJ CABS</h2>
                <p>A.P.J CABS is an ISO 9001-2008 certified car rental company established in the year 2006 to provide
                    impeccable quality of rental car services for corporate travel. Our formidable fleet comprises
                    Sedan, Luxury, SUV, Premium, and Ultra-Luxury Cars along with Volvo Bus.</p>
            </div>
            <div className="contact-info col-md-4 col-12 mb-2">
                <div>
                <h3>Contact</h3>
                <p><img src="/icons/google-maps.png" style={{ paddingRight: "10px" }}/> No 2/11, 51st Street, <br/> Ashok Nagar, Chennai - 600 083</p>
                <p><img src="/icons/telephone-call.png" style={{ paddingRight: "10px" }}/> +91 9677 111 999 | 91-44-48598677</p>
                <p><img src="/icons/gmail.png" style={{ paddingRight: "10px" }}/> cars@apjcabs.com</p>
            </div>
            </div>
            <div className="useful-links col-md-4 col-12 mb-2">
                <div>
                <h3>Useful Links</h3>
                <ul className="footer-menu">
                    <li><img src="/icons/house.png" style={{paddingRight: "10px", width: "35px"}}/><a href="../index.html">Home</a></li>
                    <li><img src="/icons/info.png" style={{paddingRight: "10px"}}/><a href="../About-us/about-us.html">About Us</a></li>
                    <li><img src="/icons/settings.png" style={{paddingRight: "10px", width: "32px"}}/><a href="../services/services.html">Services</a></li>
                    <li><img src="/icons/budgeting.png" style={{paddingRight: "10px", width: "35px"}}/><a href="../tariff/tariff.html">Tariff</a></li>
                    <li><img src="/icons/client.png" style={{paddingRight: "10px"}}/><a href="./clients.html">Clients</a></li>
                    <li><img src="/icons/list.png" style={{paddingRight: "10px", width: "32px"}}/><a href="../car-rental/car-rental.html">Car Lists</a></li>
                    <li><img src="/icons/gallery.png" style={{paddingRight: "10px"}}/><a href="../Gallery/gallery.html">Gallery</a></li>
                    <li><img src="/icons/contact.png" style={{paddingRight: "10px"}}/><a href="../contact-us/contact-us.html">Contact Us</a></li>
                </ul>
            </div>
            </div>
        </div>
    </div>

<div className="footer-bottom">
    <div className="auto-container">
        <div className="row clearfix">
            <div className="column col-md-6 col-sm-12 col-xs-12">
                <div className="copyright">Copyright @ 2018.All Rights Recerved by Apj Cabs.
</div>
            </div>
            <div className="column col-md-5 col-sm-12 col-xs-12">
                <div className="copyright"> 
                    Designed & Developed By <a style={{textDecoration: "none", color: "inherit"}} target="_blank" href="https://www.greenmainfotech.com">Greenma Infotech</a></div>
            </div>
        </div>
    </div>
</div>

</>
    
  );
};

export default Footer;
