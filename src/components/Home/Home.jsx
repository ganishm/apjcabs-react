import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import './Home.css'; // Custom CSS
import 'owl.carousel/dist/assets/owl.carousel.css'; // Include Owl Carousel CSS
import 'owl.carousel/dist/assets/owl.theme.default.css'; // Include Owl Carousel Theme CSS
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [location, setLocation] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [error, setError] = useState('');

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const selectLocation = (loc) => {
    setLocation(loc);
    setShowDropdown(false);
  };

  const validateForm = () => {
    if (!location) {
      setError('Please choose a location.');
    } else if (!pickupDate) {
      setError('Please select a pickup date.');
    } else if (!returnDate) {
      setError('Please select a return date.');
    } else {
      setError('');
      // Form is valid, proceed with your logic (e.g., search for cars)
      alert(`Searching cars at ${location} from ${pickupDate} to ${returnDate}`);
    }
  };

  

  return (
    <>

    <Header/>

    <section className="hero-section">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 banner-content text-center">
            <h1>Your Premier Car Rental <span className="text-primary">Service</span></h1>
            <p>Explore our fleet of top-quality vehicles and enjoy a hassle-free rental experience. Whether it's
              a business trip or weekend getaway, we've got the perfect ride for you.</p>
            <a href="#" className="btn btn-dark">Explore</a>
          </div>
          <div className="col-lg-6 col-md-12">
            <img src="./images/banner.png" alt="Banner Image" className="luxury-car-image"/>
          </div>
        </div>
      </div>
    </section>




    <section className="how-it-works odd_bg">
      <div className="container">
        <h2>How It <span className="text-primary">Works</span></h2>
        <p>Rent With Following 3 Working Steps</p>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 column">
            <i className="fa-solid fa-4x text-primary fa-location-dot"></i>
            <h3>Choose Location</h3>
            <p className="description">Choose Your Location And Find Your Best Car</p>
          </div>
          <div className="col-lg-4 col-md-6 col-12 column">
            <i className="fa-solid fa-4x text-primary fa-calendar-alt"></i>
            <h3>Pick-Up Date</h3>
            <p className="description">Select Your Pickup Date And Rent Your Car</p>
          </div>
          <div className="col-lg-4 col-md-6 col-12 column">
            <i className="fa-solid fa-4x text-primary fa-car"></i>
            <h3>Book Your Car</h3>
            <p className="description">Choose Your Location And Find Your Best Car</p>
          </div>
        </div>
        <a href="#" className="btn btn-dark">Start Booking</a>
      </div>
    </section>




    <section className="trending even_bg">
        <div className="container">

            <h2>Trending Rental <span className="text-primary">Deals</span></h2>

            <p>Most Popular Car Rental Deals</p>

            <div className="tabs-wrapper">
                <div className="tabs">
                    <button className="tab active" data-filter="all">All</button>
                    <button className="tab" data-filter="luxury">Luxury</button>
                    <button className="tab" data-filter="seven_seater">7 Seater</button>
                    <button className="tab" data-filter="five_seater">5 Seater</button>
                    <button className="tab" data-filter="bus">Bus</button>
                    <button className="tab" data-filter="yatch">Yatch</button>
                </div>
            </div>


            <div className="car-list">
                <div className="car-item suv">
                    <img src="./images/cars/toyoto.png" alt="Car 1" className="car-image" />
                    <div className="car-info">
                        <div className="left-info">
                            <h3 className="car-name">Toyoto</h3>
                            <p className="car-model">Corolla Altis</p>
                        </div>
                        <div className="right-info">
                            <p className="car-price">₹2000</p>
                            <p className="car-hours">4 Hours</p>
                        </div>
                    </div>
                    <div className="car-features">
                        <div className="feature">
                            <i className="fas fa-users"></i>
                            <p>4 People</p>
                        </div>
                        <div className="feature">
                            <i className="fas fa-users"></i>
                            <p>Manual</p>
                        </div>
                        <div className="feature">
                            <i className="fas fa-car"></i>
                            <p>40L</p>
                        </div>
                    </div>
                    <button className="rent-button">Rent Now</button>
                </div>
                <div className="car-item suv">
                    <img src="./images/cars/toyoto.png" alt="Car 1" className="car-image" />
                    <div className="car-info">
                        <div className="left-info">
                            <h3 className="car-name">Toyoto</h3>
                            <p className="car-model">Corolla Altis</p>
                        </div>
                        <div className="right-info">
                            <p className="car-price">₹2000</p>
                            <p className="car-hours">4 Hours</p>
                        </div>
                    </div>
                    <div className="car-features">
                        <div className="feature">
                            <i className="fas fa-users"></i>
                            <p>4 People</p>
                        </div>
                        <div className="feature">
                            <i className="fas fa-users"></i>
                            <p>Manual</p>
                        </div>
                        <div className="feature">
                            <i className="fas fa-car"></i>
                            <p>40L</p>
                        </div>
                    </div>
                    <button className="rent-button">Rent Now</button>
                </div>
                <div className="car-item suv">
                    <img src="./images/cars/toyoto.png" alt="Car 1" className="car-image" />
                    <div className="car-info">
                        <div className="left-info">
                            <h3 className="car-name">Toyoto</h3>
                            <p className="car-model">Corolla Altis</p>
                        </div>
                        <div className="right-info">
                            <p className="car-price">₹2000</p>
                            <p className="car-hours">4 Hours</p>
                        </div>
                    </div>
                    <div className="car-features">
                        <div className="feature">
                            <i className="fas fa-users"></i>
                            <p>4 People</p>
                        </div>
                        <div className="feature">
                            <i className="fas fa-users"></i>
                            <p>Manual</p>
                        </div>
                        <div className="feature">
                            <i className="fas fa-car"></i>
                            <p>40L</p>
                        </div>
                    </div>
                    <button className="rent-button">Rent Now</button>
                </div>
                <div className="car-item suv">
                    <img src="./images/cars/toyoto.png" alt="Car 1" className="car-image" />
                    <div className="car-info">
                        <div className="left-info">
                            <h3 className="car-name">Toyoto</h3>
                            <p className="car-model">Corolla Altis</p>
                        </div>
                        <div className="right-info">
                            <p className="car-price">₹2000</p>
                            <p className="car-hours">4 Hours</p>
                        </div>
                    </div>
                    <div className="car-features">
                        <div className="feature">
                            <i className="fas fa-users"></i>
                            <p>4 People</p>
                        </div>
                        <div className="feature">
                            <i className="fas fa-users"></i>
                            <p>Manual</p>
                        </div>
                        <div className="feature">
                            <i className="fas fa-car"></i>
                            <p>40L</p>
                        </div>
                    </div>
                    <button className="rent-button">Rent Now</button>
                </div>
                <div className="car-item suv">
                    <img src="./images/cars/toyoto.png" alt="Car 1" className="car-image" />
                    <div className="car-info">
                        <div className="left-info">
                            <h3 className="car-name">Toyoto</h3>
                            <p className="car-model">Corolla Altis</p>
                        </div>
                        <div className="right-info">
                            <p className="car-price">₹2000</p>
                            <p className="car-hours">4 Hours</p>
                        </div>
                    </div>
                    <div className="car-features">
                        <div className="feature">
                            <i className="fas fa-users"></i>
                            <p>4 People</p>
                        </div>
                        <div className="feature">
                            <i className="fas fa-users"></i>
                            <p>Manual</p>
                        </div>
                        <div className="feature">
                            <i className="fas fa-car"></i>
                            <p>40L</p>
                        </div>
                    </div>
                    <button className="rent-button">Rent Now</button>
                </div>
                <div className="car-item suv">
                    <img src="./images/cars/toyoto.png" alt="Car 1" className="car-image" />
                    <div className="car-info">
                        <div className="left-info">
                            <h3 className="car-name">Toyoto</h3>
                            <p className="car-model">Corolla Altis</p>
                        </div>
                        <div className="right-info">
                            <p className="car-price">₹2000</p>
                            <p className="car-hours">4 Hours</p>
                        </div>
                    </div>
                    <div className="car-features">
                        <div className="feature">
                            <i className="fas fa-users"></i>
                            <p>4 People</p>
                        </div>
                        <div className="feature">
                            <i className="fas fa-users"></i>
                            <p>Manual</p>
                        </div>
                        <div className="feature">
                            <i className="fas fa-car"></i>
                            <p>40L</p>
                        </div>
                    </div>
                    <button className="rent-button">Rent Now</button>
                </div>
            </div>
        </div>
    </section>
 

    <section className="adventure odd_bg">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-12">
                    <h2 className="adventure_title">
                        Dive Into Adventure:<br /><span className="text-primary">Rent Your Dream Car Today!</span>
                    </h2>
                </div>
                <div className="col-md-6 col-12">
                    <p>Liv Exotic Rentals provides full service car rentals. We do pickup, drop off, and concierge
                        service. We also offer discounts to people who rent their cars to go out for dinners at fancy
                        restaurants and activities.</p>
                    <a href="#" className="btn btn-primary">Learn More</a>
                </div>
            </div>
        </div>
        <div className="owl-carousel mt-4">
            <div className="item">
                <a href="#">
                    <img src="./images/car_slider/audi.png" alt="" />
                    <div className="inner">
                        <a href="#">Audi</a>
                    </div>
                </a>
            </div>
            <div className="item black">
                <a href="#">
                    <img src="./images/car_slider/benz.png" alt="" />
                    <div className="inner">
                        <a href="#">Benz</a>
                    </div>
                </a>
            </div>
            <div className="item">
                <a href="#">
                    <img src="./images/car_slider/bmw.png" alt="" />
                    <div className="inner">
                        <a href="#">BMW</a>
                    </div>
                </a>
            </div>
            <div className="item black">
                <a href="#">
                    <img src="./images/car_slider/jaguar.png" alt="" />
                    <div className="inner">
                        <a href="#">Jaguar</a>
                    </div>
                </a>
            </div>
            <div className="item">
                <a href="#">
                    <img src="./images/car_slider/rollsroyce.png" alt="" />
                    <div className="inner">
                        <a href="#">Rolls Royce</a>
                    </div>
                </a>
            </div>
            <div className="item black">
                <a href="#">
                    <img src="./images/car_slider/volvo.png" alt="" />
                    <div className="inner">
                        <a href="#">Volvo</a>
                    </div>
                </a>
            </div>
            <div className="item black">
                <a href="#">
                    <img src="./images/car_slider/yatch.png" alt="" />
                    <div className="inner">
                        <a href="#">Yatch</a>
                    </div>
                </a>
            </div>
        </div>
    </section>

    <section className="choose_us odd_bg">
        <div className="container-fluid">

            <h2>Why <span className="text-primary">Choose US</span></h2>

            <div className="row">
                <div className="col-md-5 col-12">
                    <div className="choose_us_bg">
                        <img src="./images/choose_us.png" alt="choose us" />
                    </div>
                </div>
                <div className="col-md-7 col-12 text_section">
                    <div className="row">

                        <div className="col-md-6 d-flex align-items-center mb-4">
                            <div className="icon me-3">
                                <i className="fas fa-phone"></i>
                            </div>
                            <div className="items">
                                <div className="item-title">Customer Support</div>
                                <div className="item-description">There are many variations of passages but the majority
                                    form.</div>
                            </div>
                        </div>
                      
                        <div className="col-md-6 d-flex align-items-center mb-4">
                            <div className="icon me-3">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div className="items">
                                <div className="item-title">Many Locations</div>
                                <div className="item-description">There are many variations of passages but the majority
                                    form.</div>
                            </div>
                        </div>
                        
                        <div className="col-md-6 d-flex align-items-center mb-4">
                            <div className="icon me-3">
                                <i className="fas fa-wallet"></i>
                            </div>
                            <div className="items">
                                <div className="item-title">Best Prices</div>
                                <div className="item-description">There are many variations of passages but the majority
                                    form.</div>
                            </div>
                        </div>
              
                        <div className="col-md-6 d-flex align-items-center mb-4">
                            <div className="icon me-3">
                                <i className="fas fa-user-tie"></i>
                            </div>
                            <div className="items">
                                <div className="item-title">Experience Driver</div>
                                <div className="item-description">There are many variations of passages but the majority
                                    form.</div>
                            </div>
                        </div>
                   
                        <div className="col-md-6 d-flex align-items-center mb-4">
                            <div className="icon me-3">
                                <i className="fas fa-shield-alt"></i>
                            </div>
                            <div className="items">
                                <div className="item-title">Verified car Brand</div>
                                <div className="item-description">There are many variations of passages but the majority
                                    form.</div>
                            </div>
                        </div>
                       
                        <div className="col-md-6 d-flex align-items-center mb-4">
                            <div className="icon me-3">
                                <i className="fas fa-ban"></i>
                            </div>
                            <div className="items">
                                <div className="item-title">Free Cancellation</div>
                                <div className="item-description">There are many variations of passages but the majority
                                    form.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>





    <section className="customer_say even_bg">
        <div className="container">
      
            <h2>What Our <span className="text-primary">Customer Say</span></h2>
    
            <p>Testimonials</p>

            <div className="row">
                <div className="testimonials owl-carousel owl-theme">
                    <div className="item">
                        <div className="stars"> <span className="rate">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </span>
                            <div className="shap-left-top">
                                <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    className="w-11 h-11">
                                    <path
                                        d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                                        fill="#E1F1F9"></path>
                                </svg>
                            </div>
                            <div className="shap-right-bottom">
                                <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    className="w-11 h-11">
                                    <path
                                        d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                                        fill="#E1F1F9"></path>
                                </svg>
                            </div>
                        </div> <i className="fa-solid fa-quote-left"></i>
                        <div className="text">
                            <p>Fast and professional are the best words to describe the Chauffeur team, they got me to
                                my business meeting on time and in style, looking forward to next time!</p>
                        </div>
                        <div className="info mt-30">
                            <div className="img-curv">
                                <div className="img"> <img src="./images/customers/unni.jpg" alt=""/> </div>
                                <div className="shap-left-top">
                                    <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        className="w-11 h-11">
                                        <path
                                            d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                                            fill="#E1F1F9"></path>
                                    </svg>
                                </div>
                                <div className="shap-right-bottom">
                                    <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        className="w-11 h-11">
                                        <path
                                            d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                                            fill="#E1F1F9"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="ml-30">
                                <h6>Unni Nair</h6>
                                <p>Excel HR Facilities & Services Ltd</p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="stars"> <span className="rate">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </span>
                            <div className="shap-left-top">
                                <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    className="w-11 h-11">
                                    <path
                                        d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                                        fill="#E1F1F9"></path>
                                </svg>
                            </div>
                            <div className="shap-right-bottom">
                                <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    className="w-11 h-11">
                                    <path
                                        d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                                        fill="#E1F1F9"></path>
                                </svg>
                            </div>
                        </div> <i className="fa-solid fa-quote-left"></i>
                        <div className="text">
                            <p>They are the best in their business. Super clean and Comfortable rides throughout. Highly
                                recommended.</p>
                        </div>
                        <div className="info mt-30">
                            <div className="img-curv">
                                <div className="img"> <img src="./images/customers/suyash.jpg" alt=""/> </div>
                                <div className="shap-left-top">
                                    <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        className="w-11 h-11">
                                        <path
                                            d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                                            fill="#E1F1F9"></path>
                                    </svg>
                                </div>
                                <div className="shap-right-bottom">
                                    <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        className="w-11 h-11">
                                        <path
                                            d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                                            fill="#E1F1F9"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="ml-30">
                                <h6>Suyash Suhas Bartar</h6>
                                <p>Head Sales and Marketing at Executive Comfort</p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="stars"> <span className="rate">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </span>
                            <div className="shap-left-top">
                                <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    className="w-11 h-11">
                                    <path
                                        d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                                        fill="#E1F1F9"></path>
                                </svg>
                            </div>
                            <div className="shap-right-bottom">
                                <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    className="w-11 h-11">
                                    <path
                                        d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                                        fill="#E1F1F9"></path>
                                </svg>
                            </div>
                        </div> <i className="fa-solid fa-quote-left"></i>
                        <div className="text">
                            <p>Wonderful colaboration with them for my wedding events. They add spice to the events in
                                style</p>
                        </div>
                        <div className="info mt-30">
                            <div className="img-curv">
                                <div className="img"> <img src="./images/customers/vivek.jpeg" alt=""/> </div>
                                <div className="shap-left-top">
                                    <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        className="w-11 h-11">
                                        <path
                                            d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                                            fill="#E1F1F9"></path>
                                    </svg>
                                </div>
                                <div className="shap-right-bottom">
                                    <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        className="w-11 h-11">
                                        <path
                                            d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                                            fill="#E1F1F9"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="ml-30">
                                <h6>Vivekanandh</h6>
                                <p>Head Of Business Operations at Epic Weddings</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
<Footer/>
    </>

  );
};

export default HeroSection;
