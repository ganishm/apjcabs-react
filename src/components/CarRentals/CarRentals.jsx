import React from 'react'
import { Link } from 'react-router-dom';
import './CarRentals.css'


const CarRentals = () => {
  return (
   <>
   
   <section className="-rental-hero-section text-center position-relative">
        <div className="banner-container">
          <div className="rental-banner-image">
            <img src="images/banner_all.png" alt="Car Banner" className="img-fluid hero-image"/>
          </div>
          <div className="banner-text">
            <h1>Car <span>Lists</span></h1>
          </div>
        </div>
      </section>
      
    <section className="bg-light py-5">
        <div className="container">
            <div className="row">
               
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="car-rental-card custom-card h-100 border-0 shadow-sm">
                    <Link to="/corolla">
                    <img src="images/carRentals/altis.jpg" className="card-img-top" alt="Cadillac Limousine XTS"/>
                    </Link>
                        <div className="card-body custom-body text-center">
                            <h5 className="card-title">Toyota Corolla Altis</h5>
                            <p className="card-text">4 Hour and 40 Kms Rs 2000 <br/> 8 Hour and 80 Kms Rs 4000</p>
                            <ul className="list-unstyled d-flex justify-content-center mb-3">
                                <li className="mx-2 feature-box"><i className="fa fa-user"></i> 4 seats</li>
                                <li className="mx-2 feature-box"><i className="fa fa-gas-pump"></i> Diesel</li>
                                <li className="mx-2 feature-box"><i className="fa fa-cogs"></i> Mechanic</li>
                            </ul>
                        </div>
                        <div className="card-footer custom-footer d-flex justify-content-center align-items-center">
                        <Link to="/corolla" className="btn btn-primary">View Details</Link>
                        </div>
                    </div>
                </div>
    
               
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="car-rental-card custom-card h-100 border-0 shadow-sm">
                        <Link to="/corolla">
                        <img src="images/carRentals/camry.jpg" className="card-img-top" alt="Mercedes Benz E-className"/>
                        </Link>
                        <div className="card-body custom-body text-center">
                            <h5 className="card-title">Toyota Camry Hybrid</h5>
                            <p className="card-text">4 Hour and 40 Kms Rs 4500 <br/> 8 Hour and 80 Kms Rs 9000</p>
                            <ul className="list-unstyled d-flex justify-content-center mb-3">
                                <li className="mx-2 feature-box"><i className="fa fa-user"></i> 4 seats</li>
                                <li className="mx-2 feature-box"><i className="fa fa-gas-pump"></i> Petrol</li>
                                <li className="mx-2 feature-box"><i className="fa fa-cogs"></i> Auto</li>
                            </ul>
                        </div>
                        <div className="card-footer custom-footer d-flex justify-content-center align-items-center">
                        <Link to="/camry" className="btn btn-primary">View Details</Link>
                        </div>
                    </div>
                </div>
    
                
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="car-rental-card custom-card h-100 border-0 shadow-sm">
                    <Link to="/audia6">
                            <img src="images/carRentals/audia6.jpg" className="card-img-top" alt="Range Rover Sport 5.5"/>
                            </Link>
                        <div className="card-body custom-body text-center">
                            <h5 className="card-title">Audi A6</h5>
                            <p className="card-text">4 Hour and 40 Kms Rs 6000 <br/> 8 Hour and 80 Kms Rs 12000</p>
                            <ul className="list-unstyled d-flex justify-content-center mb-3">
                                <li className="mx-2 feature-box"><i className="fa fa-user"></i> 5 seats</li>
                                <li className="mx-2 feature-box"><i className="fa fa-gas-pump"></i> Petrol</li>
                                <li className="mx-2 feature-box"><i className="fa fa-cogs"></i> Auto</li>
                            </ul>
                        </div>
                        <div className="card-footer custom-footer d-flex justify-content-center align-items-center">
                        <Link to="/audia6" className="btn btn-primary">View Details</Link>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="car-rental-card custom-card h-100 border-0 shadow-sm">
                    <Link to="/bmw">
                            <img src="images/carRentals/bmw5series.jpg" className="card-img-top" alt="Cadillac Limousine XTS"/>
                            </Link>
                        <div className="card-body custom-body text-center">
                            <h5 className="card-title">BMW 5 Series</h5>
                            <p className="card-text">4 Hour and 40 Kms Rs 6000 <br/> 8 Hour and 80 Kms Rs 12000</p>
                            <ul className="list-unstyled d-flex justify-content-center mb-3">
                                <li className="mx-2 feature-box"><i className="fa fa-user"></i> 4 seats</li>
                                <li className="mx-2 feature-box"><i className="fa fa-gas-pump"></i> Diesel</li>
                                <li className="mx-2 feature-box"><i className="fa fa-cogs"></i> Mechanic</li>
                            </ul>
                        </div>
                        <div className="card-footer custom-footer d-flex justify-content-center align-items-center">
                        <Link to="/bmw" className="btn btn-primary">View Details</Link>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="car-rental-card custom-card h-100 border-0 shadow-sm">
                    <Link to="/audiq7">
                            <img src="images/carRentals/audiq7.jpg" className="card-img-top" alt="Cadillac Limousine XTS"/>
                        </Link>
                        <div className="card-body custom-body text-center">
                            <h5 className="card-title">Audi Q7</h5>
                            <p className="card-text">4 Hour and 40 Kms Rs 9000 <br/> 8 Hour and 80 Kms Rs 18000</p>
                            <ul className="list-unstyled d-flex justify-content-center mb-3">
                                <li className="mx-2 feature-box"><i className="fa fa-user"></i> 4 seats</li>
                                <li className="mx-2 feature-box"><i className="fa fa-gas-pump"></i> Diesel</li>
                                <li className="mx-2 feature-box"><i className="fa fa-cogs"></i> Mechanic</li>
                            </ul>
                        </div>
                        <div className="card-footer custom-footer d-flex justify-content-center align-items-center">
                        <Link to="/audiq7" className="btn btn-primary">View Details</Link>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="car-rental-card custom-card h-100 border-0 shadow-sm">
                    <Link to="/benze">
                            <img src="images/carRentals/mercedes_benz_e_class.jpg" className="card-img-top" alt="Cadillac Limousine XTS"/>
                        </Link>
                        <div className="card-body custom-body text-center">
                            <h5 className="card-title">Mercedes Benz E className</h5>
                            <p className="card-text">4 Hour and 40 Kms Rs 6000 <br/> 8 Hour and 80 Kms Rs 12000</p>
                            <ul className="list-unstyled d-flex justify-content-center mb-3">
                                <li className="mx-2 feature-box"><i className="fa fa-user"></i> 4 seats</li>
                                <li className="mx-2 feature-box"><i className="fa fa-gas-pump"></i> Diesel</li>
                                <li className="mx-2 feature-box"><i className="fa fa-cogs"></i> Mechanic</li>
                            </ul>
                        </div>
                        <div className="card-footer custom-footer d-flex justify-content-center align-items-center">
                        <Link to="/benze" className="btn btn-primary">View Details</Link>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="car-rental-card custom-card h-100 border-0 shadow-sm">
                    <Link to="/benzs">
                            <img src="images/carRentals/mercedes_benz_s_class.jpg" className="card-img-top" alt="Cadillac Limousine XTS"/>
                        </Link>
                        <div className="card-body custom-body text-center">
                            <h5 className="card-title">Mercedes Benz S className New</h5>
                            <p className="card-text">8 Hour and 80 Kms Rs 25000</p>
                            <ul className="list-unstyled d-flex justify-content-center mb-3">
                                <li className="mx-2 feature-box"><i className="fa fa-user"></i> 4 seats</li>
                                <li className="mx-2 feature-box"><i className="fa fa-gas-pump"></i> Diesel</li>
                                <li className="mx-2 feature-box"><i className="fa fa-cogs"></i> Mechanic</li>
                            </ul>
                        </div>
                        <div className="card-footer custom-footer d-flex justify-content-center align-items-center">
                        <Link to="/benzs" className="btn btn-primary">View Details</Link>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="car-rental-card custom-card h-100 border-0 shadow-sm">
                    <Link to="/velfire">
                            <img src="images/carRentals/toyota-vellfire.jpg" className="card-img-top" alt="Cadillac Limousine XTS"/>
                        </Link>
                        <div className="card-body custom-body text-center">
                            <h5 className="card-title">Toyota Vellfire</h5>
                            <p className="card-text">8 Hour and 80 Kms Rs 22000</p>
                            <ul className="list-unstyled d-flex justify-content-center mb-3">
                                <li className="mx-2 feature-box"><i className="fa fa-user"></i> 4 seats</li>
                                <li className="mx-2 feature-box"><i className="fa fa-gas-pump"></i> Diesel</li>
                                <li className="mx-2 feature-box"><i className="fa fa-cogs"></i> Mechanic</li>
                            </ul>
                        </div>
                        <div className="card-footer custom-footer d-flex justify-content-center align-items-center">
                        <Link to="/velfire" className="btn btn-primary">View Details</Link>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="car-rental-card custom-card h-100 border-0 shadow-sm">
                    <Link to="/jaguarxf">
                            <img src="images/carRentals/Jaguar_XF.jpg" className="card-img-top" alt="Cadillac Limousine XTS"/>
                        </Link>
                        <div className="card-body custom-body text-center">
                            <h5 className="card-title">Jaguar XF</h5>
                            <p className="card-text">4 Hour and 40 Kms Rs 7000 <br/>
                                8 Hour and 80 Kms Rs 13000</p>
                            <ul className="list-unstyled d-flex justify-content-center mb-3">
                                <li className="mx-2 feature-box"><i className="fa fa-user"></i> 4 seats</li>
                                <li className="mx-2 feature-box"><i className="fa fa-gas-pump"></i> Diesel</li>
                                <li className="mx-2 feature-box"><i className="fa fa-cogs"></i> Mechanic</li>
                            </ul>
                        </div>
                        <div className="card-footer custom-footer d-flex justify-content-center align-items-center">
                        <Link to="/jaguarxf" className="btn btn-primary">View Details</Link>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="car-rental-card custom-card h-100 border-0 shadow-sm">
                    <Link to="/jaguarxlj">
                            <img src="images/carRentals/Jaguar_XJL.jpg" className="card-img-top" alt="Cadillac Limousine XTS"/>
                        </Link>
                        <div className="card-body custom-body text-center">
                            <h5 className="card-title">Jaguar XJL</h5>
                            <p className="card-text">8 Hour and 80 Kms Rs 20000</p>
                            <ul className="list-unstyled d-flex justify-content-center mb-3">
                                <li className="mx-2 feature-box"><i className="fa fa-user"></i> 4 seats</li>
                                <li className="mx-2 feature-box"><i className="fa fa-gas-pump"></i> Diesel</li>
                                <li className="mx-2 feature-box"><i className="fa fa-cogs"></i> Mechanic</li>
                            </ul>
                        </div>
                        <div className="card-footer custom-footer d-flex justify-content-center align-items-center">
                        <Link to="/jaguarxlj" className="btn btn-primary">View Details</Link>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="car-rental-card custom-card h-100 border-0 shadow-sm">
                    <Link to="/carnival">
                            <img src="images/carRentals/carnival.jpg" className="card-img-top" alt="Cadillac Limousine XTS"/>
                        </Link>
                        <div className="card-body custom-body text-center">
                            <h5 className="card-title">KIA Carnival</h5>
                            <p className="card-text">8 Hour and 80 Kms Rs 5000</p>
                            <ul className="list-unstyled d-flex justify-content-center mb-3">
                                <li className="mx-2 feature-box"><i className="fa fa-user"></i> 4 seats</li>
                                <li className="mx-2 feature-box"><i className="fa fa-gas-pump"></i> Diesel</li>
                                <li className="mx-2 feature-box"><i className="fa fa-cogs"></i> Mechanic</li>
                            </ul>
                        </div>
                        <div className="card-footer custom-footer d-flex justify-content-center align-items-center">
                        <Link to="/carnival" className="btn btn-primary">View Details</Link>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="car-rental-card custom-card h-100 border-0 shadow-sm">
                    <Link to="/rollsroyce">
                            <img src="images/carRentals/Rolls_Royce_Ghost.jpg" className="card-img-top" alt="Cadillac Limousine XTS"/>
                        </Link>
                        <div className="card-body custom-body text-center">
                            <h5 className="card-title">Rolls Royce Ghost</h5>
                            <p className="card-text">8 Hour and 80 Kms Rs 100000</p>
                            <ul className="list-unstyled d-flex justify-content-center mb-3">
                                <li className="mx-2 feature-box"><i className="fa fa-user"></i> 4 seats</li>
                                <li className="mx-2 feature-box"><i className="fa fa-gas-pump"></i> Diesel</li>
                                <li className="mx-2 feature-box"><i className="fa fa-cogs"></i> Mechanic</li>
                            </ul>
                        </div>
                        <div className="card-footer custom-footer d-flex justify-content-center align-items-center">
                        <Link to="/rollsroyce" className="btn btn-primary">View Details</Link>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="car-rental-card custom-card h-100 border-0 shadow-sm">
                    <Link to="/innova">
                            <img src="images/carRentals/Toyota_Innova.jpg" className="card-img-top" alt="Cadillac Limousine XTS"/>
                        </Link>
                        <div className="card-body custom-body text-center">
                            <h5 className="card-title">Toyota Innova</h5>
                            <p className="card-text">4 Hour and 40 Kms Rs 1800 <br/>
                                8 Hour and 80 Kms Rs 3600</p>
                            <ul className="list-unstyled d-flex justify-content-center mb-3">
                                <li className="mx-2 feature-box"><i className="fa fa-user"></i> 4 seats</li>
                                <li className="mx-2 feature-box"><i className="fa fa-gas-pump"></i> Diesel</li>
                                <li className="mx-2 feature-box"><i className="fa fa-cogs"></i> Mechanic</li>
                            </ul>
                        </div>
                        <div className="card-footer custom-footer d-flex justify-content-center align-items-center">
                        <Link to="/innova" className="btn btn-primary">View Details</Link>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="car-rental-card custom-card h-100 border-0 shadow-sm">
                    <Link to="/crystag">
                            <img src="images/carRentals/Toyota_Innova_Crysta.jpg" className="card-img-top" alt="Cadillac Limousine XTS"/>
                        </Link>
                        <div className="card-body custom-body text-center">
                            <h5 className="card-title">Toyota Innova Crysta G Model</h5>
                            <p className="card-text">4 Hour and 40 Kms Rs 2200 <br/>
                                8 Hour and 80 Kms Rs 4400</p>
                            <ul className="list-unstyled d-flex justify-content-center mb-3">
                                <li className="mx-2 feature-box"><i className="fa fa-user"></i> 4 seats</li>
                                <li className="mx-2 feature-box"><i className="fa fa-gas-pump"></i> Diesel</li>
                                <li className="mx-2 feature-box"><i className="fa fa-cogs"></i> Mechanic</li>
                            </ul>
                        </div>
                        <div className="card-footer custom-footer d-flex justify-content-center align-items-center">
                        <Link to="/crystag" className="btn btn-primary">View Details</Link>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="car-rental-card custom-card h-100 border-0 shadow-sm">
                    <Link to="/crystaz">
                            <img src="images/carRentals/Toyota_Innova_Crysta.jpg" className="card-img-top" alt="Cadillac Limousine XTS"/>
                        </Link>
                        <div className="card-body custom-body text-center">
                            <h5 className="card-title">Toyota Innova Crysta Z Model</h5>
                            <p className="card-text">8 Hour and 80 Kms Rs 4800</p>
                            <ul className="list-unstyled d-flex justify-content-center mb-3">
                                <li className="mx-2 feature-box"><i className="fa fa-user"></i> 4 seats</li>
                                <li className="mx-2 feature-box"><i className="fa fa-gas-pump"></i> Diesel</li>
                                <li className="mx-2 feature-box"><i className="fa fa-cogs"></i> Mechanic</li>
                            </ul>
                        </div>
                        <div className="card-footer custom-footer d-flex justify-content-center align-items-center">
                        <Link to="/crystaz" className="btn btn-primary">View Details</Link>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="car-rental-card custom-card h-100 border-0 shadow-sm">
                    <Link to="/fortuner">
                            <img src="images/carRentals/Toyota_Fortuner.jpg" className="card-img-top" alt="Cadillac Limousine XTS"/>
                        </Link>
                        <div className="card-body custom-body text-center">
                            <h5 className="card-title">Toyota Fortuner</h5>
                            <p className="card-text">4 Hour and 40 Kms Rs 4000 <br/>
                                8 Hour and 80 Kms Rs 8000</p>
                            <ul className="list-unstyled d-flex justify-content-center mb-3">
                                <li className="mx-2 feature-box"><i className="fa fa-user"></i> 4 seats</li>
                                <li className="mx-2 feature-box"><i className="fa fa-gas-pump"></i> Diesel</li>
                                <li className="mx-2 feature-box"><i className="fa fa-cogs"></i> Mechanic</li>
                            </ul>
                        </div>
                        <div className="card-footer custom-footer d-flex justify-content-center align-items-center">
                        <Link to="/fortuner" className="btn btn-primary">View Details</Link>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="car-rental-card custom-card h-100 border-0 shadow-sm">
                    <Link to="/volvo">
                            <img src="images/carRentals/Volvo_Bus.jpg" className="card-img-top" alt="Cadillac Limousine XTS"/>
                        </Link>
                        <div className="card-body custom-body text-center">
                            <h5 className="card-title">Volvo Bus</h5>
                            <p className="card-text">1 day Out of chennai With 300 kms 23500 <br/>
                                1 day With in Chennai 150 kms 21000</p>
                            <ul className="list-unstyled d-flex justify-content-center mb-3">
                                <li className="mx-2 feature-box"><i className="fa fa-user"></i> 4 seats</li>
                                <li className="mx-2 feature-box"><i className="fa fa-gas-pump"></i> Diesel</li>
                                <li className="mx-2 feature-box"><i className="fa fa-cogs"></i> Mechanic</li>
                            </ul>
                        </div>
                        <div className="card-footer custom-footer d-flex justify-content-center align-items-center">
                        <Link to="/volvo" className="btn btn-primary">View Details</Link>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="car-rental-card custom-card h-100 border-0 shadow-sm">
                    <Link to="/yacht">
                            <img src="images/carRentals/yatch.jpg" className="card-img-top" alt="Cadillac Limousine XTS"/>
                        </Link>
                        <div className="card-body custom-body text-center">
                            <h5 className="card-title">Yacht</h5>
                            <p className="card-text">Customized On Request</p>
                            <ul className="list-unstyled d-flex justify-content-center mb-3">
                                <li className="mx-2 feature-box"><i className="fa fa-user"></i> 4 seats</li>
                                <li className="mx-2 feature-box"><i className="fa fa-gas-pump"></i> Diesel</li>
                                <li className="mx-2 feature-box"><i className="fa fa-cogs"></i> Mechanic</li>
                            </ul>
                        </div>
                        <div className="card-footer custom-footer d-flex justify-content-center align-items-center">
                        <Link to="/yacht" className="btn btn-primary">View Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   </>
  )
}

export default CarRentals
