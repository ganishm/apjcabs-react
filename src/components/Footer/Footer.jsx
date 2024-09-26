import React from 'react';
import './Footer.css';

import Facebook3D from '/icons/facebook.png';
import Twitter3D from '/icons/x.png';
import Instagram3D from '/icons/insta.png';
import LinkedIn3D from '/icons/linkedin.png';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-content row">
          {/* Company Info */}
          <div className="company-info col-md-4 col-12 mb-2">
            <h2>APJ CABS</h2>
            <p>A.P.J CABS is an ISO 9001-2008 certified car rental company established in the year 2006 to provide
              impeccable quality of rental car services for corporate travel.</p>
          </div>

          {/* Contact Info */}
          <div className="contact-info col-md-4 col-12 mb-2">
            <h3>Contact</h3>

            <p><img src="img/google-maps.png" style={{ paddingRight: "10px" }} />No 2/11, 51st Street, <br /> Ashok Nagar, Chennai - 600 083</p>
            <p><img src="img/telephone-call.png" style={{ paddingRight: "10px" }} /> +91 9677 111 999 | 91-44-48598677</p>
            <p><img src="img/gmail.png" style={{ paddingRight: "10px" }} /> cars@apjcabs.com</p>

            <p><img src="/icons/google-maps.png" style={{ paddingRight: "10px" }} /> No 2/11, 51st Street, <br /> Ashok Nagar, Chennai - 600 083</p>
            <p><img src="/icons/telephone-call.png" style={{ paddingRight: "10px" }} /> +91 9677 111 999 | 91-44-48598677</p>
            <p><img src="/icons/gmail.png" style={{ paddingRight: "10px" }} /> cars@apjcabs.com</p>

          </div>

          {/* Useful Links */}
          <div className="useful-links col-md-4 col-12 mb-2">
            <h3>Useful Links</h3>
            <ul className="footer-menu">

              <li><img src='img/house.png' style={{ paddingRight: "10px", width: "35px" }} /><a href="/">Home</a></li>
              <li><img src="img/info.png" style={{ paddingRight: "10px" }} /><a href="/about">About Us</a></li>
              <li><img src="img/settings.png" style={{ paddingRight: "10px", width: "32px" }} /><a href="/services">Services</a></li>
              <li><img src="img/budgeting.png" style={{ paddingRight: "10px", width: "35px" }} /><a href="/tariff">Tariff</a></li>
              <li><img src="img/client.png" style={{ paddingRight: "10px" }} /><a href="/clients">Clients</a></li>
              <li><img src="img/list.png" style={{ paddingRight: "10px", width: "32px" }} /><a href="/car-rental">Car Lists</a></li>
              <li><img src="img/gallery.png" style={{ paddingRight: "10px" }} /><a href="/gallery">Gallery</a></li>
              <li><img src="img/contact.png" style={{ paddingRight: "10px" }} /><a href="/contact">Contact Us</a></li>

              <li><img src="/icons/house.png" style={{ paddingRight: "10px", width: "35px" }} /><a href="/">Home</a></li>
              <li><img src="/icons/info.png" style={{ paddingRight: "10px" }} /><a href="/about">About Us</a></li>
              <li><img src="/icons/settings.png" style={{ paddingRight: "10px", width: "32px" }} /><a href="/services">Services</a></li>
              <li><img src="/icons/budgeting.png" style={{ paddingRight: "10px", width: "35px" }} /><a href="/tariff">Tariff</a></li>
              <li><img src="/icons/client.png" style={{ paddingRight: "10px" }} /><a href="/clients">Clients</a></li>
              <li><img src="/icons/list.png" style={{ paddingRight: "10px", width: "32px" }} /><a href="/car-rental">Car Lists</a></li>
              <li><img src="/icons/gallery.png" style={{ paddingRight: "10px" }} /><a href="/gallery">Gallery</a></li>
              <li><img src="/icons/contact.png" style={{ paddingRight: "10px" }} /><a href="/contact">Contact Us</a></li>

            </ul>
          </div>
        </div>

        {/* Social Media Links (Vertical, Left-Side) */}
        <div className="social-media-links-vertical">

          <a href="https://www.facebook.com/bridalcarrentalinchennai/" target="_blank" rel="noreferrer">
            <img src="img/facebook.png" alt="Facebook" className="social-icon-vertical" />
          </a>
          <a href="https://x.com/apjcabs1?s=21" target="_blank" rel="noreferrer">
            <img src="img/x.png" alt="Twitter" className="social-icon-vertical" />
          </a>
          <a href="https://www.instagram.com/apj_cabs_luxury_car_rental/" target="_blank" rel="noreferrer">
            <img src="img/insta.png" alt="Instagram" className="social-icon-vertical" />
          </a>
          <a href="https://www.linkedin.com/company/apj-cabs-car-rental-company/" target="_blank" rel="noreferrer">
            <img src="img/linkedin.png" alt="LinkedIn" className="social-icon-vertical" />
            </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <img src={LinkedIn3D} alt="LinkedIn" className="social-icon-vertical" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <img src={Twitter3D} alt="Twitter" className="social-icon-vertical" />
          </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <img src={Instagram3D} alt="Instagram" className="social-icon-vertical" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <img src={Facebook3D} alt="Facebook" className="social-icon-vertical" />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="column col-md-6 col-sm-12 col-xs-12">
              <div className="copyright">Copyright @ 2018. All Rights Reserved by Apj Cabs.</div>
            </div>
            <div className="column col-md-5 col-sm-12 col-xs-12">
              <div className="copyright">
                Designed & Developed By <a style={{ textDecoration: "none", color: "inherit" }} target="_blank" rel="noreferrer" href="https://www.greenmainfotech.com">Greenma Infotech</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;