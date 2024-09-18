import React, { useState } from 'react';
import axios from 'axios';
import "./Services.css";
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

const Services = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        pickUpTime: '',
        returnTime: '',
        vehicleType: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        axios.post('http://localhost:5000/send-booking', formData)
          .then(response => {
            console.log(response.data);
            
            // Show the confirmation modal on successful submission
            const confirmationModal = new window.bootstrap.Modal(document.getElementById('confirmationModal'));
            confirmationModal.show();
            
            // Optionally reset the form after submission
            setFormData({
              name: '',
              phone: '',
              email: '',
              pickUpTime: '',
              returnTime: '',
              vehicleType: '',
            });
          })
          .catch(error => {
            console.error('There was an error sending the booking!', error);
          });
      };
  return (
    <>
    <Header />
      
    <section className="service-hero-section text-center position-relative">
        <div className="banner-container">
          <div className="service-banner-image">
            <img src="/images/banner_all.png" alt="Car Banner" className="img-fluid hero-image" />
          </div>
          <div className="banner-text">
            <h1>Our <span>Services</span></h1>
          </div>
        </div>
      </section>

    
<div id="scrollTopBtn" className="scroll-top d-flex justify-content-center align-items-center">
    <i className="fas fa-arrow-up"></i>
</div>

    

    <section className="stats-section py-5">
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-md-3 col-sm-6 mb-3">
                    <div className="stat-box text-center">
                        <h5 className="stat-title">Years Expertise</h5>
                        <p className="stat-number">10<span className="plus-sign">+</span></p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 mb-3">
                    <div className="stat-box text-center">
                        <h5 className="stat-title">Rentals</h5>
                        <p className="stat-number">35000<span className="plus-sign">+</span></p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 mb-3">
                    <div className="stat-box text-center">
                        <h5 className="stat-title">Customers</h5>
                        <p className="stat-number">21765<span className="plus-sign">+</span></p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 mb-3">
                    <div className="stat-box text-center">
                        <h5 className="stat-title">Completed Wedding</h5>
                        <p className="stat-number">7000<span className="plus-sign">+</span></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    

 

    <section className="landing-section py-5">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <img src="/images/services/corporate_car_hire.jpg" alt="Landing Image" className="img-fluid" style={{width: "450px;"}} />
                </div>
                <div className="col-lg-6 text-content">
                    <h6 className="text-uppercase" style={{ fontSize: '2rem', marginBottom: '20px' }}>Corporate Car Hire</h6>
                    
                    <p className="text-muted">
                        Long hours of work warrant comfort while travelling and our cars are apt to make big entrances during informal occasions too. Our luxury cars are often used by high-ranking business personnel. Some of our customers have been with us for years and we would love the opportunity to serve many more. Visit our Clients page to take a peek at our clientele.
                    </p>
                    <div className="buttons">
                        <a href="../tariff/tariff.html">
                            <button className="btn btn-primary my-btn">Rent Now</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="row align-items-center" style={{marginTop: "30px;"}}>
                <div className="col-lg-6 text-content">
                    <h6 className="text-uppercase" style={{ fontSize: '2rem', marginBottom: '20px' }}>Wedding Cars</h6>
                    
                    <p className="text-muted">
                        We started wedding cars in 2009 and have successfully provided over 6500 services since then. We realize that it is a special day for more than the couple involved and everything has to go well especially transporting the bride and groom around. With courteous and understanding chauffeurs, our cars are completely equipped to comfortably transport the wedding party. Special floral decorations can be arranged, on request, so that the married couple can travel happily and lavishly.                    </p>
                    <div className="buttons">
                        <a href="../tariff/tariff.html">
                            <button className="btn btn-primary my-btn">Rent Now</button>
                        </a>
                    </div>
                </div>
                <div className="col-lg-6">
                    <img src="/images/services/wedding_cars.jpg" alt="Landing Image" className="img-fluid" style={{width: "450px;"}}/>
                </div>
            </div>
            <div className="row align-items-center" style={{marginTop: "30px;"}}>
                <div className="col-lg-6">
                    <img src="/images/services/event_transportation.jpg" alt="Landing Image" className="img-fluid" style={{width: "450px;"}}/>
                </div>
                <div className="col-lg-6 text-content">
                    <h6 className="text-uppercase" style={{ fontSize: '2rem', marginBottom: '20px' }}>Event Transportation</h6>
                   
                    <p className="text-muted">
                        Actors, VIPs and celebrities are frequent travelers who move around for work and leisure. They require nothing less than the best luxury transportation to take them to and from the airport or destinations within a city in accordance to their schedules. APJ cabs is the perfect pick for such requirements. Our staff is trained to cater to the demands of celebrities while on the move as their lifestyles demand attention to detail in everything. With safety, punctuality, courtesy and luxury in mind, we provide the best celebrity rides in Chennai.                    </p>
                    <div className="buttons">
                        <a href="../tariff/tariff.html">
                            <button className="btn btn-primary my-btn">Rent Now</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="row align-items-center" style={{marginTop: "30px;"}}>
                <div className="col-lg-6 text-content">
                    <h6 className="text-uppercase" style={{ fontSize: '2rem', marginBottom: '20px' }}>VIP Transportation</h6>
                 
                    <p className="text-muted">
                        Celebrities, famous personalities and all VIPs seek luxury and comfort when they travel as they travel a lot. Our aim is to give them the best while on the road. Whether it is work related or leisure travel, we have cars and transport facilities for all events. We offer convoy cars for protocol visits along with bouncers to accompany VVIPs on business tours. Our professional chauffeurs are well-trained and multilingual. They are adept at fulfilling our customers’ every request. All you have to do is sit back and relax.                    </p>
                    <div className="buttons">
                        <a href="../tariff/tariff.html">
                            <button className="btn btn-primary my-btn">Rent Now</button>
                        </a>
                    </div>
                </div>
                <div className="col-lg-6">
                    <img src="images/services/vip.jpg" alt="Landing Image" className="img-fluid" style={{width: "450px;"}}/>
                </div>
            </div>
            <div className="row align-items-center" style={{marginTop: "30px;"}}>
                <div className="col-lg-6">
                    <img src="images/services/bus.jpg" alt="Landing Image" className="img-fluid" style={{width: "450px;"}}/>
                </div>
                <div className="col-lg-6 text-content">
                    <h6 className="text-uppercase" style={{ fontSize: '2rem', marginBottom: '20px' }}>Bus /Coach Transportation</h6>
                    
                    <p className="text-muted">
                        We know that it is better to hire buses rather than multiple cars when it comes to transporting a large crowd. That is why APJ cabs offer bus rentals. There are several occasions when one might want to transport large groups of people on multiple rides. We are prepared to handle the crowds and offer safe and convenient bus rides. Contact us to discuss your requirements so can offer you the best ride.                    </p>
                    <div className="buttons">
                        <a href="../tariff/tariff.html">
                            <button className="btn btn-primary my-btn">Rent Now</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="row align-items-center" style={{marginTop: "30px;"}}>
                <div className="col-lg-6 text-content">
                    <h6 className="text-uppercase" style={{ fontSize: '2rem', marginBottom: '20px' }}>Surprise Rides</h6>
                   
                    <p className="text-muted">
                        Special occasions come once in awhile and if you are looking to impress your loved ones, there is no better way than to give them a splendid ride in one of our luxury cars. Whether it is a birthday or an anniversary, this surprise is sure to overwhelm anyone. If you were looking for a unique idea to surprise someone, I think we just gave it to you.                    </p>
                    <div className="buttons">
                        <a href="../tariff/tariff.html">
                            <button className="btn btn-primary my-btn">Rent Now</button>
                        </a>
                    </div>
                </div>
                <div className="col-lg-6">
                    <img src="images/services/surprise.jpg" alt="Landing Image" className="img-fluid" style={{width: "450px;"}}/>
                </div>
            </div>
            <div className="row align-items-center" style={{marginTop: "30px;"}}>
                <div className="col-lg-6">
                    <img src="images/services/yacht.jpg" alt="Landing Image" className="img-fluid" style={{width: "450px;"}}/>
                </div>
                <div className="col-lg-6 text-content">
                    <h6 className="text-uppercase" style={{ fontSize: '2rem', marginBottom: '20px' }}>Yacht Rentals</h6>
                
                    <p className="text-muted">
                        Yachts are synonymous with luxury and they are often seen as the play toy for the uber rich. Take it for a personal spin or throw a private party for your special guests. If you want to hire an exquisite yacht, we can set you up with a beautiful one.                    </p>
                    <div className="buttons">
                        <a href="../tariff/tariff.html">
                            <button className="btn btn-primary my-btn">Rent Now</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="row align-items-center" style={{marginTop: "30px;"}}>
                <div className="col-lg-6 text-content">
                    <h6 className="text-uppercase" style={{ fontSize: '2rem', marginBottom: '20px' }}>Airport Car Rental In Chennai</h6>
                  
                    <p className="text-muted">
                        It is often tiresome to find reliable airport car rental services in Chennai considering the traffic, peak hours and a host of other problems. Being experienced cab providers, we understand how timing matters while travelling to and from the airport. With our experienced drivers, concern for punctuality and the goal to get our customers to their destinations safely, we may be the best cab service when you need to catch a flight.                    </p>
                    <div className="buttons">
                        <a href="../tariff/tariff.html">
                            <button className="btn btn-primary my-btn">Rent Now</button>
                        </a>
                    </div>
                </div>
                <div className="col-lg-6">
                    <img src="images/services/airport_car_rental.jpg" alt="Landing Image" className="img-fluid" style={{width: "450px;"}}/>
                </div>
            </div>
            
        </div>
    </section>

    <section className="booking-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2>Use our <span className="highlight">quick booking form</span> to get a vehicle</h2>
              <p>
                Fill out the form to quickly book a vehicle for your journey. Choose your preferred vehicle type and time for a smooth experience.
              </p>
              <p className="contact-info">
                <i className="fa fa-phone"></i> Call for booking: <strong>(+91) 9677111999</strong>
              </p>
            </div>
            <div className="col-lg-6">
              <div className="form-background p-4">
                <form onSubmit={handleSubmit} id="bookingForm">
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="datetime-local"
                      className="form-control"
                      name="pickUpTime"
                      value={formData.pickUpTime}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="datetime-local"
                      className="form-control"
                      name="returnTime"
                      value={formData.returnTime}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <select
                      className="form-control"
                      name="vehicleType"
                      value={formData.vehicleType}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>Select Vehicle Type</option>
                      <option value="Luxury">Luxury</option>
                      <option value="7 Seater">7 Seater</option>
                      <option value="5 Seater">5 Seater</option>
                      <option value="Bus">Bus</option>
                      <option value="Yacht">Yacht</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">Book Now</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Confirmation Modal */}
      <div className="modal fade" id="confirmationModal" tabIndex="-1" aria-labelledby="confirmationModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <h5>The car has been booked, we will contact you soon!</h5>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
  <Footer/>
    </>
  );
};

export default Services;
