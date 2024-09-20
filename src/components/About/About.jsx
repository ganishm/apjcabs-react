import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./About.css";


const About = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        carType: '',
        pickupLocation: '',
        returnLocation: '',
        pickUpDate: '',
        returnDate: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:5000/send-mail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.text())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };
  return (
    <>

    <section className="about-hero-section text-center position-relative">
        <div className="banner-container">
          <div className="about-banner-image">
            <img src="/images/banner_all.png" alt="Car Banner" className="img-fluid about-hero-image"/>
          </div>
          <div className="banner-text">
            <h1>About <span>Us</span></h1>
          </div>
        </div>
      </section>

    <section className="our-company-section py-5">
        <div className="container">
            <div className="row align-items-center">
              
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h2 className="fw-bold text-dark">Our Company</h2>
                    <p className="text-muted mb-4">
                        Since its inception in 2006, APJ Cabs has charted an upward trend by consistently growing. Luxury car rental was a novel idea when APJ Cabs began, and today the market has spread to include fierce competition. Nevertheless, our experienced staff, loyal customers, and our fleet of well-maintained cars have allowed us to expand our services with the backing of our satisfied customers. Today, we provide transportation for VIPs, senior corporate personnel, sports stars, and celebrities.<br/><br/>
                        We started wedding car rentals in 2009 and have since offered 6,500 services to our customers. Bus rentals, guide services, professional chauffeurs, bouncers, tour packages, event transportation, surprise rides on occasions, and yacht rentals are some of our significant services. We pride ourselves on our wide array of services that cater to the needs of all our customers, and we promise to offer our services round the clock, if need be.
                    </p>
                    <Link to="/tariff" className="btn btn-primary mt-auto">Rent Now</Link>
                </div>
              
                <div className="col-md-6">
                    <div className="image-wrapper">
                        <img src="/images/what_we_do.jpg" alt="Our Company" className="img-fluid rounded-custom"/>
                    </div>
                </div>
            </div>
        </div>
    </section>

  

    <section className="what-we-do-section py-5">
        <div className="container">
            <div className="row align-items-center">
                
                <div className="col-md-6">
                    <div className="image-wrapper">
                        <img src="/images/our_company.jpg" alt="What We Do" className="img-fluid rounded-custom" style={{width:"500px;"}}/>
                    </div>
                </div>
              
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h2 className="fw-bold text-dark">What We Do</h2>
                    <p className="text-muted mb-4">
                        Since its inception in 2006, APJ Cabs has charted an upward trend by consistently growing. Luxury car rental was a novel idea when APJ Cabs began, and today the market has spread to include fierce competition. Nevertheless, our experienced staff, loyal customers, and our fleet of well-maintained cars have allowed us to expand our services with the backing of our satisfied customers. Today, we provide transportation for VIPs, senior corporate personnel, sports stars, and celebrities.<br/><br/>
                        We started wedding car rentals in 2009 and have since offered 6,500 services to our customers. Bus rentals, guide services, professional chauffeurs, bouncers, tour packages, event transportation, surprise rides on occasions, and yacht rentals are some of our significant services. We pride ourselves on our wide array of services that cater to the needs of all our customers, and we promise to offer our services round the clock, if need be.
                    </p>
                    <Link to="/tariff" className="btn btn-primary mt-auto">Rent Now</Link>
                </div>
                
            </div>
        </div>
    </section>
   


    <section className="why-us-section text-center py-5">
    <div className="container">
        <h2 className="section-title">- Why APJ CABS -</h2>
        <div className="row justify-content-center">
       
            <div className="col-md-4 col-sm-6 mb-4">
                <div className="service-box">
                <i class="fa fa-credit-card-alt service-icon" aria-hidden="true"></i>
                    <h4 className="service-title">Secured Payment Guarantee</h4>
                    <p className="service-description">Vestibulum at ultrices elit. Maecenas faucibus vulputate vestibulum</p>
                </div>
            </div>
            <div className="col-md-4 col-sm-6 mb-4">
                <div className="service-box">
                <i class="fa fa-headphones service-icon" aria-hidden="true"></i>
                    <h4 className="service-title">Help Center & Support 24/7</h4>
                    <p className="service-description">Vestibulum at ultrices elit. Maecenas faucibus vulputate vestibulum</p>
                </div>
            </div>
            <div className="col-md-4 col-sm-6 mb-4">
                <div className="service-box">
                    <i className="fa fa-car service-icon"></i>
                    <h4 className="service-title">Booking any ClassName Vehicles</h4>
                    <p className="service-description">Vestibulum at ultrices elit. Maecenas faucibus vulputate vestibulum</p>
                </div>
            </div>
           
            <div className="col-md-4 col-sm-6 mb-4">
                <div className="service-box">
                    <i className="fa fa-briefcase service-icon"></i>
                    <h4 className="service-title">Corporate and Business Services</h4>
                    <p className="service-description">Vestibulum at ultrices elit. Maecenas faucibus vulputate vestibulum</p>
                </div>
            </div>
            <div className="col-md-4 col-sm-6 mb-4">
                <div className="service-box">
                    <i className="fa fa-share-alt service-icon"></i>
                    <h4 className="service-title">Car Sharing Options</h4>
                    <p className="service-description">Vestibulum at ultrices elit. Maecenas faucibus vulputate vestibulum</p>
                </div>
            </div>
        </div>
    </div>
</section>


<section className="form-section py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <h2 className="form-title">Free Instant Quotes</h2>
                        <form className="form-box" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Name" id="name" value={formData.name} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Mobile Number" id="mobile" value={formData.mobile} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Email" id="email" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <select className="form-control" id="carType" value={formData.carType} onChange={handleChange} required>
                                    <option value="" disabled selected>Preferred Car Type</option>
                                    <option value="Sedan">Sedan</option>
                                    <option value="Luxury">Luxury</option>
                                    <option value="SUV">SUV</option>
                                    <option value="Premium">Premium</option>
                                    <option value="Ultra-Luxury">Ultra-Luxury</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Pickup Location" id="pickupLocation" value={formData.pickupLocation} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Return Location" id="returnLocation" value={formData.returnLocation} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <input type="date" className="form-control" id="pickUpDate" value={formData.pickUpDate} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <input type="date" className="form-control" id="returnDate" value={formData.returnDate} onChange={handleChange} required />
                            </div>
                            <button type="submit" className="btn btn-primary btn-send">Book Now</button>
                        </form>
                    </div>
                    <div className="col-lg-6">
                        <div className="car-container">
                            <img src="/images/lexus-lc.png" alt="Car Rental Image" className="img-fluid car-animation" />
                        </div>
                    </div>
                </div>
            </div>
        </section>


<div className="modal fade" id="confirmationModal" tabindex="-1" aria-labelledby="confirmationModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-body text-center">
          <h5>The car has been booked, we will contact you soon!</h5>
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
    </>
  );
};

export default About;
