import React from 'react';
import './Contact.css';


const Contact = () => {
    return (
        <>

            <section className="contact-hero-section text-center position-relative">
                <div className="banner-container">
                    <div className="contact-banner-image">
                        <img src="/images/banner_all.png" alt="Car Banner" className="img-fluid hero-image" />
                    </div>
                    <div className="contact-banner-text">
                        <p>GET IN TOUCH</p>
                        <h1>Contact <span>Us</span></h1>
                    </div>
                </div>
            </section>


            {/* Contact Boxes Section */}
            <section className="contact-banner position-relative contact_list" style={{ backgroundColor: 'aliceblue' }}>
                <div className="container">
                    <div className="row" style={{ position: 'relative', marginTop: '-100px', marginBottom: '0px' }}>
                        <div className="col-lg-3 col-md-6 mb-3">
                            <div className="contact-box p-4 text-center">
                                <i className="fa fa-envelope icon"></i>
                                <h5>Email us</h5>
                                <p>cars@apjcabs.com</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-3">
                            <div className="contact-box p-4 text-center">
                                <i className="fa fa-map-marker icon"></i>
                                <h5>Our address</h5>
                                <p>No: 2/11, 51st Street, Ashok Nagar, Chennai - 600 083</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-3">
                            <div className="contact-box p-4 text-center">
                                <i className="fa fa-clock-o icon"></i>
                                <h5>Opening Hours</h5>
                                <p>Mon-Sun: 8 AM - 7 PM</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-3">
                            <div className="contact-box p-4 text-center">
                                <i className="fa fa-phone icon"></i>
                                <h5>Call us</h5>
                                <p>+91 9677 111 999</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form & Map Section */}
            <section className="map-section" style={{ backgroundColor: 'aliceblue' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 contact-form">
                            <h2>Get in touch</h2>
                            <form>
                                <div className="contact-form-group">
                                    <input type="text" placeholder="Your Name *" required />
                                    <input type="email" placeholder="Your Email *" required />
                                </div>
                                <div className="contact-form-group">
                                    <input type="tel" placeholder="Your Number *" required />
                                    <input type="text" placeholder="Subject *" required />
                                </div>
                                <textarea placeholder="Message *" required></textarea>
                                <button type="submit" className="btn btn-primary" style={{ marginTop: '15px' }}>Send Message</button>
                            </form>
                        </div>
                        <div className="col-lg-6 col-md-12 contact-map">
                            <h2>Location</h2>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31096.017176655838!2d80.216834!3d13.035535!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266e26db5aa2d%3A0x5e83c72c4b5dd3a0!2sAPJ%20Cabs!5e0!3m2!1sen!2sus!4v1725542393196!5m2!1sen!2sus"
                                width="100%"
                                height="350"
                                style={{ border: '0' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
          
        </>
    );
}

export default Contact;
