import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import './Home.css'; // Custom CSS
import 'owl.carousel/dist/assets/owl.carousel.css'; // Include Owl Carousel CSS
import 'owl.carousel/dist/assets/owl.theme.default.css'; // Include Owl Carousel Theme CSS

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
    {/* Hero Section */}
    <section className="hero-section-home">
                <div className="container-fluid hero-container text-center text-md-start py-5">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h1 className="display-4">
                                Your Premier Car Rental <span className="text-primary">Service</span>
                            </h1>
                            <p className="lead">
                                Explore our fleet of top-quality vehicles and enjoy a hassle-free rental experience.
                                Whether it's a business trip or weekend getaway, we've got the perfect ride for you.
                            </p>
                            <a href="#" className="btn btn-dark">Explore</a>
                        </div>
                        <div className="col-md-6 text-center">
                            <img
                                src="/images/home/banner_image.png"
                                className="luxury-car-image img-fluid"
                                alt="Luxury Car"
                            />
                        </div>
                    </div>
                </div>

                {/* Search Box */}
                <div className="search-box container shadow-lg p-4 rounded position-absolute start-50 translate-middle-x">
                    <div className="row g-2 align-items-center">
                        <div className="col-md">
                            <div className="form-group position-relative">
                                <label htmlFor="location" className="form-label">
                                    <i className="fas fa-map-marker-alt fa-lg text-primary"></i>
                                </label>
                                <input
                                    type="text"
                                    id="location"
                                    className="form-control"
                                    placeholder="Choose Location"
                                    value={location}
                                    onClick={toggleDropdown}
                                    readOnly
                                    required
                                />
                                <button
                                    type="button"
                                    className="btn btn-outline-secondary dropdown-toggle"
                                    onClick={toggleDropdown}
                                ></button>
                                <div
                                    id="location-options"
                                    className={`dropdown-menu w-100 ${showDropdown ? 'd-block' : 'd-none'}`}
                                >
                                    {['Porur', 'Velacherry', 'Marina Beach', 'Alandur', 'Tambaram'].map((loc) => (
                                        <a
                                            key={loc}
                                            className="dropdown-item-location"
                                            href="#"
                                            onClick={() => selectLocation(loc)}
                                        >
                                            {loc}
                                        </a>
                                    ))}
                                </div>
                                <div className="invalid-feedback">{error}</div>
                            </div>
                        </div>

                        <div className="col-md">
                            <div className="form-group">
                                <label htmlFor="pickup-date" className="form-label">
                                    <i className="fas fa-calendar-alt fa-lg text-primary"></i>
                                </label>
                                <input
                                    type="date"
                                    id="pickup-date"
                                    className="form-control"
                                    value={pickupDate}
                                    onChange={(e) => setPickupDate(e.target.value)}
                                    required
                                />
                                <div className="invalid-feedback">{error}</div>
                            </div>
                        </div>

                        <div className="col-md">
                            <div className="form-group">
                                <label htmlFor="return-date" className="form-label">
                                    <i className="fas fa-calendar-alt fa-lg text-primary"></i>
                                </label>
                                <input
                                    type="date"
                                    id="return-date"
                                    className="form-control"
                                    value={returnDate}
                                    onChange={(e) => setReturnDate(e.target.value)}
                                    required
                                />
                                <div className="invalid-feedback">{error}</div>
                            </div>
                        </div>

                        <div className="col-md-auto text-center">
                            <button className="btn btn-primary" id="search-btn" onClick={validateForm}>
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </section>

           
            <section className="how-it-works-section text-center">
                <div className="container" style={{ marginTop: '30px' }}>
                    <h2 className="section-title fw-bold">
                        How It <span className="highlight-text text-primary">Works</span>
                    </h2>
                    <p className="section-description">Rent With Following 3 Working Steps</p>
                    <div className="row justify-content-center">
                        <div className="col-md-3">
                            <div className="step-icon mb-3">
                                <i className="fas fa-map-marker-alt fa-4x text-primary"></i>
                            </div>
                            <h5 className="step-title fw-bold">Choose Location</h5>
                            <p className="step-description">Choose Your Location And Find Your Best Car</p>
                        </div>
                        <div className="col-md-3">
                            <div className="step-icon mb-3">
                                <i className="fas fa-calendar-alt fa-4x text-primary"></i>
                            </div>
                            <h5 className="step-title fw-bold">Pick-Up Date</h5>
                            <p className="step-description">Select Your Pickup Date And Rent Your Car</p>
                        </div>
                        <div className="col-md-3">
                            <div className="step-icon mb-3">
                                <i className="fas fa-car fa-4x text-primary"></i>
                            </div>
                            <h5 className="step-title fw-bold">Book Your Car</h5>
                            <p className="step-description">Choose Your Location And Find Your Best Car</p>
                        </div>
                    </div>
                    <a href="./tariff/tariff.html">
                        <button className="start-booking-btn btn btn-dark mt-4">Start Booking</button>
                    </a>
                </div>
            </section>

            <section className="trending-deals-section text-center my-4" style={{backgroundColor: "#E1F1F9;"}}>
    <div className="container">
        <h2 className="section-title">Trending Rental <span className="text-primary">Deals</span></h2>
        <p className="section-description text-muted">Most Popular Car Rental Deals</p>
           
        <div className="row mt-n2 wow fadeInUp" data-wow-delay="0.3s">
            <div className="col-12 text-center">
                <ul className="list-inline mb-5" id="portfolio-flters">
                    <li className="btn-category" id="all">All</li>
                    <li className="btn-category" id="luxury">Luxury</li>
                    <li className="btn-category" id="7seat">7 Seater</li>
                    <li className="btn-category" id="5seat">5 Seater</li>
                    <li className="btn-category" id="bus">Bus</li>
                    <li className="btn-category" id="yacht">Yatch</li>
                </ul>
            </div>
        </div>

       
        <div className="row">
          
            <div className="col-md-4 mb-4 5seater">
                <div className="car-card">
                    <div className="car-image">
                        <img src="/images/home/toyota_corolla_altis.png" alt="Audi"/>
                    </div>
                    <div className="d-flex justify-content-between">
                           <div  >
                            <h5 className="card-title" style={{marginBottom:"0"}}>Toyoto</h5>   
                            <h5 style={{marginTop: "0;"}}><p style={{ color: '#18B2D3', fontSize: 'small', marginTop: 0 }}>Corolla Altis</p></h5> 
                           </div>
                           <div>
                            <h5 style={{marginBottom:"0"}}>₹2000</h5>
                            <h5 style={{marginTop: "0;"}}><p style={{ color: '#18B2D3', fontSize: 'small', marginTop: 0 }}>4 Hours</p></h5>
                           </div>
                    </div>
                    <div className="car-features row justify-content-center">
                        <div className="car-feature col-md-3 mb-2 mx-1 col-3">
                            <i className="fas fa-users"></i> <br/>4 People
                        </div>
                        <div className="car-feature col-md-3 mb-2 mx-1 col-3">
                            <i className="fas fa-cog"></i> <br/>Manual
                        </div>
                        <div className="car-feature col-md-3 mb-2 mx-1 col-3">
                            <i className="fas fa-car"></i> <br/>40L
                        </div>
                    </div>
                    <a href="./tariff/tariff.html">
                        <button className="rent-btn">Rent Now</button>
                    </a>
                </div>
            </div>
            <div className="col-md-4 mb-4 5seater">
                <div className="car-card">
                    <div className="car-image">
                        <img src="/images/home/toyotocarmyhybrid.png" alt="Audi"/>
                    </div>
                    <div className="d-flex justify-content-between">
                           <div  >
                            <h5 className="card-title" style={{marginBottom:"0"}}>Toyota</h5>   
                            <h5 style={{marginTop: "0;"}}><p style={{ color: '#18B2D3', fontSize: 'small', marginTop: 0 }}>Camry Hybrid</p></h5> 
                           </div>
                           <div>
                            <h5 style={{marginBottom:"0"}}>₹4500</h5>
                            <h5 style={{marginTop: "0;"}}><p style={{ color: '#18B2D3', fontSize: 'small', marginTop: 0 }}>4 Hours</p></h5>
                           </div>
                    </div>
                    <div className="car-features row justify-content-center">
                        <div className="car-feature col-md-3 mb-2 mx-1 col-3">
                            <i className="fas fa-users"></i> <br/>4 People
                        </div>
                        <div className="car-feature col-md-3 mb-2 mx-1 col-3">
                            <i className="fas fa-cog"></i> <br/>Manual
                        </div>
                        <div className="car-feature col-md-3 mb-2 mx-1 col-3">
                            <i className="fas fa-car"></i> <br/>40L
                        </div>
                    </div>
                    <a href="./tariff/tariff.html">
                        <button className="rent-btn">Rent Now</button>
                    </a>
                </div>
            </div>
            <div className="col-md-4 mb-4 5seater">
                <div className="car-card">
                    <div className="car-image">
                        <img src="/images/home/audi_a6.png" alt="Audi"/>
                    </div>
                    <div className="d-flex justify-content-between">
                           <div  >
                            <h5 className="card-title" style={{marginBottom:"0"}}>Audi</h5>   
                            <h5 style={{marginTop: "0;"}}><p style={{ color: '#18B2D3', fontSize: 'small', marginTop: 0 }}>A6</p></h5> 
                           </div>
                           <div>
                            <h5 style={{marginBottom:"0"}}>₹6000</h5>
                            <h5 style={{marginTop: "0;"}}><p style={{ color: '#18B2D3', fontSize: 'small', marginTop: 0 }}>4 Hours</p></h5>
                           </div>
                    </div>
                    <div className="car-features row justify-content-center">
                        <div className="car-feature col-md-3 mb-2 mx-1 col-3">
                            <i className="fas fa-users"></i> <br/>4 People
                        </div>
                        <div className="car-feature col-md-3 mb-2 mx-1 col-3">
                            <i className="fas fa-cog"></i> <br/>Manual
                        </div>
                        <div className="car-feature col-md-3 mb-2 mx-1 col-3">
                            <i className="fas fa-car"></i> <br/>40L
                        </div>
                    </div>
                    <a href="./tariff/tariff.html">
                        <button className="rent-btn">Rent Now</button>
                    </a>
                </div>
            </div>
            <div className="col-md-4 mb-4 5seater">
                <div className="car-card">
                    <div className="car-image">
                        <img src="/images/home/bmw-5-series.png" alt="Audi"/>
                    </div>
                    <div className="d-flex justify-content-between">
                           <div  >
                            <h5 className="card-title" style={{marginBottom:"0"}}>BMW</h5>   
                            <h5 style={{marginTop: "0;"}}><p style={{ color: '#18B2D3', fontSize: 'small', marginTop: 0 }}>5 Series</p></h5> 
                           </div>
                           <div>
                            <h5 style={{marginBottom:"0"}}>₹6000</h5>
                            <h5 style={{marginTop: "0;"}}><p style={{ color: '#18B2D3', fontSize: 'small', marginTop: 0 }}>4 Hours</p></h5>
                           </div>
                    </div>
                    <div className="car-features row justify-content-center">
                        <div className="car-feature col-md-3 mb-2 mx-1 col-3">
                            <i className="fas fa-users"></i> <br/>4 People
                        </div>
                        <div className="car-feature col-md-3 mb-2 mx-1 col-3">
                            <i className="fas fa-cog"></i> <br/>Manual
                        </div>
                        <div className="car-feature col-md-3 mb-2 mx-1 col-3">
                            <i className="fas fa-car"></i> <br/>40L
                        </div>
                    </div>
                    <a href="./tariff/tariff.html">
                        <button className="rent-btn">Rent Now</button>
                    </a>
                </div>
            </div>
            <div className="col-md-4 mb-4 7seater">
                <div className="car-card">
                    <div className="car-image">
                        <img src="/images/home/audi-q7.png" alt="Audi"/>
                    </div>
                    <div className="d-flex justify-content-between">
                           <div  >
                            <h5 className="card-title" style={{marginBottom:"0"}}>Audi</h5>   
                            <h5 style={{marginTop: "0;"}}><p style={{ color: '#18B2D3', fontSize: 'small', marginTop: 0 }}>Q7</p></h5> 
                           </div>
                           <div>
                            <h5 style={{marginBottom:"0"}}>₹9000</h5>
                            <h5 style={{marginTop: "0;"}}><p style={{ color: '#18B2D3', fontSize: 'small', marginTop: 0 }}>4 Hours</p></h5>
                           </div>
                    </div>
                    <div className="car-features row justify-content-center">
                        <div className="car-feature col-md-3 mb-2 mx-1 col-3">
                            <i className="fas fa-users"></i> <br/>4 People
                        </div>
                        <div className="car-feature col-md-3 mb-2 mx-1 col-3">
                            <i className="fas fa-cog"></i> <br/>Manual
                        </div>
                        <div className="car-feature col-md-3 mb-2 mx-1 col-3">
                            <i className="fas fa-car"></i> <br/>40L
                        </div>
                    </div>
                    <a href="./tariff/tariff.html">
                        <button className="rent-btn">Rent Now</button>
                    </a>
                </div>
            </div>
            <div className="col-md-4 mb-4 5seater">
                <div className="car-card">
                    <div className="car-image">
                        <img src="/images/home/benzelass.png" alt="Audi"/>
                    </div>
                    <div className="d-flex justify-content-between">
                           <div  >
                            <h5 className="card-title" style={{marginBottom:"0"}}>Mercedes</h5>   
                            <h5 style={{marginTop: "0;"}}><p style={{ color: '#18B2D3', fontSize: 'small', marginTop: 0 }}>Benz E className</p></h5> 
                           </div>
                           <div>
                            <h5 style={{marginBottom:"0"}}>₹6000</h5>
                            <h5 style={{marginTop: "0;"}}><p style={{ color: '#18B2D3', fontSize: 'small', marginTop: 0 }}>4 Hours</p></h5>
                           </div>
                    </div>
                    <div className="car-features row justify-content-center">
                        <div className="car-feature col-md-3 mb-2 mx-1 col-3">
                            <i className="fas fa-users"></i> <br/>4 People
                        </div>
                        <div className="car-feature col-md-3 mb-2 mx-1 col-3">
                            <i className="fas fa-cog"></i> <br/>Manual
                        </div>
                        <div className="car-feature col-md-3 mb-2 mx-1 col-3">
                            <i className="fas fa-car"></i> <br/>40L
                        </div>
                    </div>
                    <a href="./tariff/tariff.html">
                        <button className="rent-btn">Rent Now</button>
                    </a>
                </div>
            </div>
            <div className="col-md-4 mb-4 luxury">
                <div className="car-card">
                    <div className="car-image">
                        <img src="/images/home/benz_s_class_new.png" alt="Audi"/>
                    </div>
                    <div className="d-flex justify-content-between">
                           <div  >
                            <h5 className="card-title" style={{marginBottom:"0"}}>Mercedes</h5>   
                            <h5 style={{marginTop: "0;"}}><p style={{ color: '#18B2D3', fontSize: 'small', marginTop: 0 }}>Benz S className</p></h5> 
                           </div>
                           <div>
                            <h5 style={{marginBottom:"0"}}>₹25000</h5>
                            <h5 style={{marginTop: "0;"}}><p style={{ color: '#18B2D3', fontSize: 'small', marginTop: 0 }}>8 Hours</p></h5>
                           </div>
                    </div>
                    <div className="car-features row justify-content-center">
                        <div className="car-feature col-md-3 mb-2 mx-1 col-3">
                            <i className="fas fa-users"></i> <br/>4 People
                        </div>
                        <div className="car-feature col-md-3 mb-2 mx-1 col-3">
                            <i className="fas fa-cog"></i> <br/>Manual
                        </div>
                        <div className="car-feature col-md-3 mb-2 mx-1 col-3">
                            <i className="fas fa-car"></i> <br/>40L
                        </div>
                    </div>
                    <a href="./tariff/tariff.html">
                        <button className="rent-btn">Rent Now</button>
                    </a>
                </div>
            </div>
            <div className="col-md-4 mb-4 7seater">
                <div className="car-card">
                    <div className="car-image">
                        <img src="/images/home/toyota_vellfire.png" alt="Audi"/>
                    </div>
                    <div className="d-flex justify-content-between">
                           <div  >
                            <h5 className="card-title" style={{marginBottom:"0"}}>Toyota</h5>   
                            <h5 style={{marginTop: "0;"}}><p style={{ color: '#18B2D3', fontSize: 'small', marginTop: 0 }}>Vellfire</p></h5> 
                           </div>
                           <div>
                            <h5 style={{marginBottom:"0"}}>₹22000</h5>
                            <h5 style={{marginTop: "0;"}}><p style={{ color: '#18B2D3', fontSize: 'small', marginTop: 0 }}>8 Hours</p></h5>
                           </div>
                    </div>
                    <div className="car-features row justify-content-center">
                        <div className="car-feature col-md-3 mb-2 mx-1 col-3">
                            <i className="fas fa-users"></i> <br/>5 People
                        </div>
                        <div className="car-feature col-md-3 mb-2 mx-1 col-3">
                            <i className="fas fa-cog"></i> <br/>Manual
                        </div>
                        <div className="car-feature col-md-3 mb-2 mx-1 col-3">
                            <i className="fas fa-car"></i> <br/>40L
                        </div>
                    </div>
                    <a href="./tariff/tariff.html">
                        <button className="rent-btn">Rent Now</button>
                    </a>
                </div>
            </div>
            <div className="col-md-4 mb-4 luxury">
                <div className="car-card">
                    <div className="car-image">
                        <img src="/images/home/jaguar_xf.png" alt="Audi"/>
                    </div>
                    <div className="d-flex justify-content-between">
                           <div  >
                            <h5 className="card-title" style={{marginBottom:"0"}}>Jaguar</h5>   
                            <h5 style={{marginTop: "0;"}}><p style={{ color: '#18B2D3', fontSize: 'small', marginTop: 0 }}>XF</p></h5> 
                           </div>
                           <div>
                            <h5 style={{marginBottom:"0"}}>₹7000</h5>
                            <h5 style={{marginTop: "0;"}}><p style={{ color: '#18B2D3', fontSize: 'small', marginTop: 0 }}>4 Hours</p></h5>
                           </div>
                    </div>
                    <div className="car-features row justify-content-center">
                        <div className="car-feature col-md-3 mb-2 mx-1 col-3">
                            <i className="fas fa-users"></i> <br/>4 People
                        </div>
                        <div className="car-feature col-md-3 mb-2 mx-1 col-3">
                            <i className="fas fa-cog"></i> <br/>Manual
                        </div>
                        <div className="car-feature col-md-3 mb-2 mx-1 col-3">
                            <i className="fas fa-car"></i> <br/>40L
                        </div>
                    </div>
                    <a href="./tariff/tariff.html">
                        <button className="rent-btn">Rent Now</button>
                    </a>
                </div>
            </div>
            <div className="col-md-4 mb-4 luxury">
                <div className="car-card">
                    <div className="car-image">
                        <img src="/images/home/jaguar-xjl.png" alt="Audi"/>
                    </div>
                    <div className="d-flex justify-content-between">
                           <div  >
                            <h5 className="card-title" style={{marginBottom:"0"}}>Jaguar</h5>   
                            <h5 style={{marginTop: "0;"}}><p style={{ color: '#18B2D3', fontSize: 'small', marginTop: 0 }}>XJL</p></h5> 
                           </div>
                           <div>
                            <h5 style={{marginBottom:"0"}}>₹20000</h5>
                            <h5 style={{marginTop: "0;"}}><p style={{ color: '#18B2D3', fontSize: 'small', marginTop: 0 }}>8 Hours</p></h5>
                           </div>
                    </div>
                    <div className="car-features row justify-content-center">
                        <div className="car-feature col-md-3 mb-2 mx-1 col-3">
                            <i className="fas fa-users"></i> <br/>4 People
                        </div>
                        <div className="car-feature col-md-3 mb-2 mx-1 col-3">
                            <i className="fas fa-cog"></i> <br/>Manual
                        </div>
                        <div className="car-feature col-md-3 mb-2 mx-1 col-3">
                            <i className="fas fa-car"></i> <br/>40L
                        </div>
                    </div>
                    <a href="./tariff/tariff.html">
                        <button className="rent-btn">Rent Now</button>
                    </a>
                </div>
            </div>
            <div className="col-md-4 mb-4 luxury">
                <div className="car-card">
                    <div className="car-image">
                        <img src="/images/home/rr_ghost.png" alt="Audi"/>
                    </div>
                    <div className="d-flex justify-content-between">
                           <div  >
                            <h5 className="card-title" style={{marginBottom:"0"}}>Rolls Royce</h5>   
                            <h5 style={{marginTop: "0;"}}><p style={{ color: '#18B2D3', fontSize: 'small', marginTop: 0 }}>Ghost</p></h5> 
                           </div>
                           <div>
                            <h5 style={{marginBottom:"0"}}>₹100000</h5>
                            <h5 style={{marginTop: "0;"}}><p style={{ color: '#18B2D3', fontSize: 'small', marginTop: 0 }}>8 Hours</p></h5>
                           </div>
                    </div>
                    <div className="car-features row justify-content-center">
                        <div className="car-feature col-md-3 mb-2 mx-1 col-3">
                            <i className="fas fa-users"></i> <br/>4 People
                        </div>
                        <div className="car-feature col-md-3 mb-2 mx-1 col-3">
                            <i className="fas fa-cog"></i> <br/>Manual
                        </div>
                        <div className="car-feature col-md-3 mb-2 mx-1 col-3">
                            <i className="fas fa-car"></i> <br/>40L
                        </div>
                    </div>
                    <a href="./tariff/tariff.html">
                        <button className="rent-btn">Rent Now</button>
                    </a>
                </div>
            </div>
            <div className="col-md-4 mb-4 7seater">
                <div className="car-card">
                    <div className="car-image">
                        <img src="/images/home/toyota_innova.png" alt="Audi"/>
                    </div>
                    <div className="d-flex justify-content-between">
                           <div  >
                            <h5 className="card-title" style={{marginBottom:"0"}}>Toyota</h5>   
                            <h5 style={{marginTop: "0;"}}><p style={{ color: '#18B2D3', fontSize: 'small', marginTop: 0 }}>Innova</p></h5> 
                           </div>
                           <div>
                            <h5 style={{marginBottom:"0"}}>₹2000</h5>
                            <h5 style={{marginTop: "0;"}}><p style={{ color: '#18B2D3', fontSize: 'small', marginTop: 0 }}>4 Hours</p></h5>
                           </div>
                    </div>
                    <div className="car-features row justify-content-center">
                        <div className="car-feature col-md-3 mb-2 mx-1 col-3">
                            <i className="fas fa-users"></i> <br/>4 People
                        </div>
                        <div className="car-feature col-md-3 mb-2 mx-1 col-3">
                            <i className="fas fa-cog"></i> <br/>Manual
                        </div>
                        <div className="car-feature col-md-3 mb-2 mx-1 col-3">
                            <i className="fas fa-car"></i> <br/>40L
                        </div>
                    </div>
                    <a href="./tariff/tariff.html">
                        <button className="rent-btn">Rent Now</button>
                    </a>
                </div>
            </div>
        
        <div className="col-md-4 mb-4 7seater">
            <div className="car-card">
                <div className="car-image">
                    <img src="/images/home/toyato_innova_crysta_g_model.png" alt="Audi"/>
                </div>
                <div className="d-flex justify-content-between">
                       <div  >
                        <h5 className="card-title" style={{marginBottom:"0"}}>Toyota</h5>   
                        <h5 style={{marginTop: "0;"}}><p style={{ color: '#18B2D3', fontSize: 'small', marginTop: 0 }}>Innova Crysta G Model</p></h5> 
                       </div>
                       <div>
                        <h5 style={{marginBottom:"0"}}>₹2200</h5>
                        <h5 style={{marginTop: "0;"}}><p style={{ color: '#18B2D3', fontSize: 'small', marginTop: 0 }}>4 Hours</p></h5>
                       </div>
                </div>
                <div className="car-features row justify-content-center">
                    <div className="car-feature col-md-3 mb-2 mx-1 col-3">
                        <i className="fas fa-users"></i> <br/>4 People
                    </div>
                    <div className="car-feature col-md-3 mb-2 mx-1 col-3">
                        <i className="fas fa-cog"></i> <br/>Manual
                    </div>
                    <div className="car-feature col-md-3 mb-2 mx-1 col-3">
                        <i className="fas fa-car"></i> <br/>40L
                    </div>
                </div>
                <a href="./tariff/tariff.html">
                    <button className="rent-btn">Rent Now</button>
                </a>
            </div>
        </div>
        <div className="col-md-4 mb-4 7seater">
            <div className="car-card">
                <div className="car-image">
                    <img src="/images/home/toy_inn_crysta_z_model.png" alt="Audi"/>
                </div>
                <div className="d-flex justify-content-between">
                       <div  >
                        <h5 className="card-title" style={{marginBottom:"0"}}>Toyota</h5>   
                        <h5 style={{marginTop: "0;"}}><p style={{ color: '#18B2D3', fontSize: 'small', marginTop: 0 }}>Innova Crysta Z Model</p></h5> 
                       </div>
                       <div>
                        <h5 style={{marginBottom:"0"}}>₹4800</h5>
                        <h5 style={{marginTop: "0;"}}><p style={{ color: '#18B2D3', fontSize: 'small', marginTop: 0 }}>8 Hours</p></h5>
                       </div>
                </div>
                <div className="car-features row justify-content-center">
                    <div className="car-feature col-md-3 mb-2 mx-1 col-3">
                        <i className="fas fa-users"></i> <br/>4 People
                    </div>
                    <div className="car-feature col-md-3 mb-2 mx-1 col-3">
                        <i className="fas fa-cog"></i> <br/>Manual
                    </div>
                    <div className="car-feature col-md-3 mb-2 mx-1 col-3">
                        <i className="fas fa-car"></i> <br/>40L
                    </div>
                </div>
                <a href="./tariff/tariff.html">
                    <button className="rent-btn">Rent Now</button>
                </a>
            </div>
        </div>
        <div className="col-md-4 mb-4 7seater">
            <div className="car-card">
                <div className="car-image">
                    <img src="/images/home/toy_fortuner.png" alt="Audi"/>
                </div>
                <div className="d-flex justify-content-between">
                       <div  >
                        <h5 className="card-title" style={{marginBottom:"0"}}>Toyota</h5>   
                        <h5 style={{marginTop: "0;"}}><p style={{ color: '#18B2D3', fontSize: 'small', marginTop: 0 }}>Fortuner</p></h5> 
                       </div>
                       <div>
                        <h5 style={{marginBottom:"0"}}>₹4000</h5>
                        <h5 style={{marginTop: "0;"}}><p style={{ color: '#18B2D3', fontSize: 'small', marginTop: 0 }}>4 Hours</p></h5>
                       </div>
                </div>
                <div className="car-features row justify-content-center">
                    <div className="car-feature col-md-3 mb-2 mx-1 col-3">
                        <i className="fas fa-users"></i> <br/>4 People
                    </div>
                    <div className="car-feature col-md-3 mb-2 mx-1 col-3">
                        <i className="fas fa-cog"></i> <br/>Manual
                    </div>
                    <div className="car-feature col-md-3 mb-2 mx-1 col-3">
                        <i className="fas fa-car"></i> <br/>40L
                    </div>
                </div>
                <a href="./tariff/tariff.html">
                    <button className="rent-btn">Rent Now</button>
                </a>
            </div>
        </div>
        <div className="col-md-4 mb-4 7seater">
            <div className="car-card">
                <div className="car-image">
                    <img src="/images/home/kiacarnival.png" alt="Audi"/>
                </div>
                <div className="d-flex justify-content-between">
                       <div  >
                        <h5 className="card-title" style={{marginBottom:"0"}}>KIA</h5>   
                        <h5 style={{marginTop: "0;"}}><p style={{ color: '#18B2D3', fontSize: 'small', marginTop: 0 }}>Carnival</p></h5> 
                       </div>
                       <div>
                        <h5 style={{marginBottom:"0"}}>₹5000</h5>
                        <h5 style={{marginTop: "0;"}}><p style={{ color: '#18B2D3', fontSize: 'small', marginTop: 0 }}>8 Hours</p></h5>
                       </div>
                </div>
                <div className="car-features row justify-content-center">
                    <div className="car-feature col-md-3 mb-2 mx-1 col-3">
                        <i className="fas fa-users"></i> <br/>4 People
                    </div>
                    <div className="car-feature col-md-3 mb-2 mx-1 col-3">
                        <i className="fas fa-cog"></i> <br/>Manual
                    </div>
                    <div className="car-feature col-md-3 mb-2 mx-1 col-3">
                        <i className="fas fa-car"></i> <br/>40L
                    </div>
                </div>
                <a href="./tariff/tariff.html">
                    <button className="rent-btn">Rent Now</button>
                </a>
            </div>
        </div>
        <div className="col-md-4 mb-4 bus">
            <div className="car-card">
                <div className="car-image">
                    <img src="/images/home/volvo_bus.png" alt="Audi"/>
                </div>
                <div className="d-flex justify-content-between">
                       <div  >
                        <h5 className="card-title" style={{marginBottom:"0"}}>Volvo</h5>   
                        <h5 style={{marginTop: "0;"}}><p style={{ color: '#18B2D3', fontSize: 'small', marginTop: 0 }}>Bus</p></h5> 
                       </div>
                       <div>
                        <h5 style={{marginBottom:"0"}}>₹23000</h5>
                        <h5 style={{marginTop: "0;"}}><p style={{ color: '#18B2D3', fontSize: 'small', marginTop: 0 }}>1 Day</p></h5>
                       </div>
                </div>
                <div className="car-features row justify-content-center">
                    <div className="car-feature col-md-3 mb-2 mx-1 col-3">
                        <i className="fas fa-users"></i> <br/>4 People
                    </div>
                    <div className="car-feature col-md-3 mb-2 mx-1 col-3">
                        <i className="fas fa-cog"></i> <br/>Manual
                    </div>
                    <div className="car-feature col-md-3 mb-2 mx-1 col-3">
                        <i className="fas fa-car"></i> <br/>40L
                    </div>
                </div>
                <a href="./tariff/tariff.html">
                    <button className="rent-btn">Rent Now</button>
                </a>
            </div>
        </div>
        <div className="col-md-4 mb-4 yacht">
            <div className="car-card">
                <div className="car-image">
                    <img src="/images/home/yatch.png" alt="Audi"/>
                </div>
                <div className="d-flex justify-content-between">
                       <div  >
                        <h5 className="card-title" style={{marginBottom:"0"}}>Yacht</h5>   
                        <h5 style={{marginTop: "0;"}}><p style={{ color: '#18B2D3', fontSize: 'small', marginTop: 0 }}></p></h5> 
                       </div>
                       <div>
                        <h5 style={{marginBottom:"0"}}>-</h5>
                        <h5 style={{marginTop: "0;"}}><p style={{ color: '#18B2D3', fontSize: 'small', marginTop: 0 }}>-</p></h5>
                       </div>
                </div>
                <div className="car-features row justify-content-center">
                    <div className="car-feature col-md-3 mb-2 mx-1 col-3">
                        <i className="fas fa-users"></i> <br/>-
                    </div>
                    <div className="car-feature col-md-3 mb-2 mx-1 col-3">
                        <i className="fas fa-cog"></i> <br/>-
                    </div>
                    <div className="car-feature col-md-3 mb-2 mx-1 col-3">
                        <i className="fas fa-car"></i> <br/>-
                    </div>
                </div>
                <a href="./tariff/tariff.html">
                    <button className="rent-btn">Rent Now</button>
                </a>
            </div>
        </div>
    </div>
    </div>
</section>

<section className="adventure-section py-5">
  <div className="container">
    <div className="row justify-content-between align-items-center">
      <div className="col-md-6 text-left">
        <h2 className="adventure-title">
          Dive Into Adventure: <br /> <span className="text-primary">Rent Your Dream Car Today!</span>
        </h2>
      </div>
      <div className="col-md-6 text-left" style={{ marginBottom: '35px' }}>
        <p className="adventure-description text-muted">
          Liv Exotic Rentals provides full service car rentals. We do pickup, drop off, and concierge service. We also offer discounts to people who rent their cars to go out for dinners at fancy restaurants and activities.
        </p>
        <a href="./About-us/about-us.html" className="btn btn-primary adventure-btn mt-3" style={{ marginLeft: '63px' }}>
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>

<section className="cars1 section-padding">
        <div className="container">
            <div className="row">
            </div>
            <div className="cars1-carousel owl-theme owl-carousel">
                <div className="item">
                    <div className="img"> <img src="/images/home/audiq7pic.png" alt=""/> </div>
                    <div className="con opacity-1">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="title"><a href="#">Audi Q7</a></div>
                                <div className="details"> <span><i className="omfi-door"></i> 4 Seats</span> <span><i
                                            className="omfi-transmission"></i> Auto</span>  </div>
                            </div>
                            <div className="col-md-5">
                                <div className="book">
                                    <div><a href="./car-details/audi-q7/audi-q7.html" className="btn"><span>Details</span></a></div>
                                    <div><span className="price">₹9000</span><span>4 Hours</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="img"> <img src="/images/home/bmw5seriespic.png" alt=""/> </div>
                    <div className="con opacity-1">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="title"><a href="#">BMW 5 Series</a></div>
                                <div className="details"> <span><i className="omfi-door"></i> 4 Seats</span> <span><i
                                            className="omfi-transmission"></i> Auto</span></div>
                            </div>
                            <div className="col-md-5">
                                <div className="book">
                                    <div><a href="./car-details/bmw/bmw.html" className="btn"><span>Details</span></a></div>
                                    <div><span className="price">₹6000</span><span>4 Hours</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="img"> <img src="/images/home/jaguarxfpic.png" alt=""/> </div>
                    <div className="con opacity-1">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="title"><a href="#">Jaguar XF</a></div>
                                <div className="details"> <span><i className="omfi-door"></i> 2 Seats</span> <span><i
                                            className="omfi-transmission"></i> Auto</span>
                                        </div>
                            </div>
                            <div className="col-md-5">
                                <div className="book">
                                    <div><a href="./car-details/jaguar-xf/jaguar-xf.html" className="btn"><span>Details</span></a></div>
                                    <div><span className="price">₹7000</span><span>4 Hours</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="img"> <img src="/images/home/jaguarxjlpic.png" alt=""/> </div>
                    <div className="con opacity-1">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="title"><a href="#">Jaguar XJL</a></div>
                                <div className="details"> <span><i className="omfi-door"></i> 4 Seats</span> <span><i
                                            className="omfi-transmission"></i> Auto</span> </div>
                            </div>
                            <div className="col-md-5">
                                <div className="book">
                                    <div><a href="./car-details/jagura-xjl/jaguar-xjl.html" className="btn"><span>Details</span></a></div>
                                    <div><span className="price">₹20000</span><span>8 Hours</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="img"> <img src="/images/home/rrghostpic.png" alt=""/> </div>
                    <div className="con opacity-1">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="title"><a href="#">Rolls Royce Ghost</a></div>
                                <div className="details"> <span><i className="omfi-door"></i> 4 Seats</span> <span><i
                                            className="omfi-transmission"></i> Auto</span> </div>
                            </div>
                            <div className="col-md-5">
                                <div className="book">
                                    <div><a href="./car-details/rolls-royce/rolls-royce.html" className="btn"><span>Details</span></a></div>
                                    <div><span className="price">₹100000</span><span>8 Hours</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="img"> <img src="/images/home/yatchpic.png" alt=""/> </div>
                    <div className="con opacity-1">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="title"><a href="#">Yatch</a></div>
                                <div className="details"> <span><i className="omfi-door"></i> -</span> <span><i
                                            className="omfi-transmission"></i> -</span> <span><i
                                            className="omfi-luggage"></i> -</span> <span><i className="omfi-age"></i>-</span></div>
                            </div>
                            <div className="col-md-5">
                                <div className="book">
                                    <div><a href="./car-details/yacht/yacht.html" className="btn"><span>Details</span></a></div>
                                    <div><span className="price">-</span><span>/day</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="img"> <img src="/images/home/volvopic.png" alt=""/> </div>
                    <div className="con opacity-1">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="title"><a href="#">Volvo Bus</a></div>
                                <div className="details"> <span><i className="omfi-door"></i>40 Seats</span> <span><i
                                            className="omfi-transmission"></i> Auto</span> </div>
                            </div>
                            <div className="col-md-5">
                                <div className="book">
                                    <div><a href="./car-details/volvo/volvo.html" className="btn"><span>Details</span></a></div>
                                    <div><span className="price">₹23000</span><span>/day</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="img"> <img src="/images/home/benzsclass.png" alt=""/> </div>
                    <div className="con opacity-1">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="title"><a href="#">Mercedes Benz S className</a></div>
                                <div classclass="details"> <span><i className="omfi-door"></i> 4 Seats</span> <span><i
                                            className="omfi-transmission"></i> Auto</span> </div>
                            </div>
                            <div className="col-md-5">
                                <div className="book">
                                    <div><a href="./car-details/benz-s/benz-s.html" className="btn"><span>Details</span></a></div>
                                    <div><span className="price">₹25000</span><span>8 Hours</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="why-choose-us-section py-5">
        <div className="lambo-container">
            <h2 className="section-title text-center">Why <span className="text-primary">Choose Us</span></h2>
            <div className="row align-items-center">
                <div className="col-md-5">
                    <img src="/images/home/lamborghini-aventador.png"
                        alt="Lamborghini" className="img-fluid car-image"/>
                </div>
                <div className="col-md-7">
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="feature-box d-flex align-items-center">
                                <div className="icon-box">
                                    <i className="fas fa-phone-alt"></i>
                                </div>
                                <div>
                                    <h5 className="feature-title">Customer Support</h5>
                                    <p className="feature-description">There are many variations of passages but the
                                        majority form.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="feature-box d-flex align-items-center">
                                <div className="icon-box">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div>
                                    <h5 className="feature-title">Many Locations</h5>
                                    <p className="feature-description">There are many variations of passages but the
                                        majority form.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="feature-box d-flex align-items-center">
                                <div className="icon-box">
                                    <i className="fas fa-wallet"></i>
                                </div>
                                <div>
                                    <h5 className="feature-title">Best Prices</h5>
                                    <p className="feature-description">There are many variations of passages but the
                                        majority form.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="feature-box d-flex align-items-center">
                                <div className="icon-box">
                                    <i className="fas fa-user-tie"></i>
                                </div>
                                <div>
                                    <h5 className="feature-title">Experience Driver</h5>
                                    <p className="feature-description">There are many variations of passages but the
                                        majority form.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="feature-box d-flex align-items-center">
                                <div className="icon-box">
                                    <i className="fas fa-shield-alt"></i>
                                </div>
                                <div>
                                    <h5 className="feature-title">Verified car Brand</h5>
                                    <p className="feature-description">There are many variations of passages but the
                                        majority form.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="feature-box d-flex align-items-center">
                                <div className="icon-box">
                                    <i className="fas fa-ban"></i>
                                </div>
                                <div>
                                    <h5 className="feature-title">Free Cancellation</h5>
                                    <p className="feature-description">There are many variations of passages but the
                                        majority form.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="testimonials section-padding mt-15 py-5 client_text">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center mb-30">
                    <h2 className="mb-4">What Our <span className="text-primary">Customer Say</span></h2>
                    <p className="text-muted mb-5">Testimonials</p>
                </div>
                <div className="col-md-12">
                    <div className="owl-carousel owl-theme">
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
                                <p>Fast and professional are the best words to describe the Chauffeur team, they got me to my business meeting on time and in style, looking forward to next time!</p>
                            </div>
                            <div className="info mt-30">
                                <div className="img-curv">
                                    <div className="img"> <img src="/images/home/pro-pic/unni.jpg" alt=""/> </div>
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
                                <p>They are the best in their business. Super clean and Comfortable rides throughout. Highly recommended.</p>
                            </div>
                            <div className="info mt-30">
                                <div className="img-curv">
                                    <div className="img"> <img src="/images/home/pro-pic/image17.jpg" alt=""/> </div>
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
                                <p>Wonderful colaboration with them for my wedding events. They add spice to the events in style</p>
                            </div>
                            <div className="info mt-30">
                                <div className="img-curv">
                                    <div className="img"> <img src="/images/home/pro-pic/vivek.jpeg" alt=""/> </div>
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
        </div>
    </section>

    </>

  );
};

export default HeroSection;
