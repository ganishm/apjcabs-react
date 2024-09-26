import React, { useState } from 'react';
import axios from 'axios';
import './Tariff.css'

const Tariff = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    carType: '',
    pickUpDate: '',
    returnDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send booking data to the server
    axios.post('http://localhost:5000/send-booking', formData)
      .then(response => {
        console.log(response.data);
        
        // Show the confirmation modal on successful submission
        const confirmationModal = new window.bootstrap.Modal(document.getElementById('confirmationModal'));
        confirmationModal.show();
        
        // Optionally reset the form after submission
        setFormData({
          name: '',
          email: '',
          mobile: '',
          carType: '',
          pickUpDate: '',
          returnDate: '',
        });
      })
      .catch(error => {
        console.error('There was an error sending the booking!', error);
      });
  };
    return (

        <>
 
        <section className="tariff-hero-section text-center position-relative">
      <div className="banner-container">
        <div className="tariff-banner-image">
          <img src="/images/banner_all.png" alt="Car Banner" className="img-fluid hero-image"/>
        </div>
        <div className="banner-text">
          <h1> <span>Tariff</span></h1>
        </div>
      </div>
    </section>

<section className="tariff-section py-5">
  <div className="container">
    <div className="table-responsive">
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Car Name</th>
            <th>Package</th>
            <th>Price</th>
            <th>Extra Above 8 km</th>
            <th>Extra per km</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src="images/tariff/altis.jpg" alt="Toyota Corolla Altis" className="tariff-car-image"/>
              <br/>Toyota Corolla Altis
            </td>
            <td>4 Hours and 40 Kms</td>
            <td>2000 / Day</td>
            <td>500 / Hour</td>
            <td>30 / km</td>
            <td><button className="btn btn-tariff" data-bs-toggle="modal" data-bs-target="#bookingModal">Book Now</button></td>
          </tr>
          <tr>
            <td>
              <img src="images/tariff/camry.jpg" alt="Toyota Camry Hybrid" className="tariff-car-image"/>
              <br/>Toyota Camry Hybrid
            </td>
            <td>4 Hours and 40 Kms</td>
            <td>4500 / Day</td>
            <td>1000 / Hour</td>
            <td>90 / km</td>
            <td><button className="btn btn-tariff" data-bs-toggle="modal" data-bs-target="#bookingModal">Book Now</button></td>
          </tr>
          <tr>
            <td>
              <img src="images/tariff/audia6.jpg" alt="Audi A6" className="tariff-car-image"/>
              <br/>Audi A6
            </td>
            <td>4 Hours and 40 Kms</td>
            <td>6000 / Day</td>
            <td>1200 / Hour</td>
            <td>120/ km</td>
            <td><button className="btn btn-tariff" data-bs-toggle="modal" data-bs-target="#bookingModal">Book Now</button></td>
          </tr>
          <tr>
            <td>
              <img src="images/tariff/bmw5series.jpg" alt="BMW 5 Series" className="tariff-car-image"/>
              <br/>BMW 5 Series
            </td>
            <td>4 Hours and 40 Kms</td>
            <td>6000 / Day</td>
            <td>1200 / Hour</td>
            <td>120/ km</td>
            <td><button className="btn btn-tariff" data-bs-toggle="modal" data-bs-target="#bookingModal">Book Now</button></td>
          </tr>
          <tr>
            <td>
              <img src="images/tariff/audiq7.jpg" alt="Audi Q7" className="tariff-car-image"/>
              <br/>Audi Q7
            </td>
            <td>4 Hours and 40 Kms</td>
            <td>9000 / Day</td>
            <td>1800 / Hour</td>
            <td>150 / km</td>
            <td><button className="btn btn-tariff" data-bs-toggle="modal" data-bs-target="#bookingModal">Book Now</button></td>
          </tr>
          <tr>
            <td>
              <img src="images/tariff/mercedes_benz_e_class.jpg" alt="Mercedes Benz E className" className="tariff-car-image"/>
              <br/>Mercedes Benz E className
            </td>
            <td>4 Hours and 40 Kms</td>
            <td>6000 / Day</td>
            <td>1200 / Hour</td>
            <td>120/ km</td>
            <td><button className="btn btn-tariff" data-bs-toggle="modal" data-bs-target="#bookingModal">Book Now</button></td>
          </tr>
          <tr>
            <td>
              <img src="images/tariff/mercedes_benz_s_class.jpg" alt="Mercedes Benz S className" className="tariff-car-image"/>
              <br/>Mercedes Benz S className
            </td>
            <td>8 Hour and 80 Kms</td>
            <td>25000 / Day</td>
            <td>2500 / Hour</td>
            <td>250 / km</td>
            <td><button className="btn btn-tariff" data-bs-toggle="modal" data-bs-target="#bookingModal">Book Now</button></td>
          </tr>
          <tr>
            <td>
              <img src="images/tariff/toyota-vellfire.jpg" alt="Toyota Vellfire" className="tariff-car-image"/>
              <br/>Toyota Vellfire
            </td>
            <td>8 Hour and 80 Kms</td>
            <td>22000 / Day</td>
            <td>2200 / Hour</td>
            <td>220 / km</td>
            <td><button className="btn btn-tariff" data-bs-toggle="modal" data-bs-target="#bookingModal">Book Now</button></td>
          </tr>
          <tr>
            <td>
              <img src="images/tariff/Jaguar_XF.jpg" alt="Jaguar XF" className="tariff-car-image"/>
              <br/>Jaguar XF
            </td>
            <td>4 Hours and 40 Kms</td>
            <td>7000 / Day</td>
            <td>1200 / Hour</td>
            <td>120 / km</td>
            <td><button className="btn btn-tariff" data-bs-toggle="modal" data-bs-target="#bookingModal">Book Now</button></td>
          </tr>
          <tr>
            <td>
              <img src="images/tariff/Jaguar_XJL.jpg" alt="Jaguar XJL" className="tariff-car-image"/>
              <br/>Jaguar XJL
            </td>
            <td>8 Hour and 80 Kms</td>
            <td>20000 / Day</td>
            <td>1600 / Hour</td>
            <td>160 / km</td>
            <td><button className="btn btn-tariff" data-bs-toggle="modal" data-bs-target="#bookingModal">Book Now</button></td>
          </tr>
          <tr>
            <td>
              <img src="images/tariff/Rolls_Royce_Ghost.jpg" alt="Rolls Royce Ghost" className="tariff-car-image"/>
              <br/>Rolls Royce Ghost
            </td>
            <td>8 Hour and 80 Kms</td>
            <td>100000 / Day</td>
            <td>10000 / Hour</td>
            <td>800 / km</td>
            <td><button className="btn btn-tariff" data-bs-toggle="modal" data-bs-target="#bookingModal">Book Now</button></td>
          </tr>
          <tr>
            <td>
              <img src="images/tariff/Toyota_Innova.jpg" alt="Toyota Innova" className="tariff-car-image"/>
              <br/>Toyota Innova
            </td>
            <td>4 Hours and 40 Kms</td>
            <td>2000 / Day</td>
            <td>450 / Hour</td>
            <td>18 / km</td>
            <td><button className="btn btn-tariff" data-bs-toggle="modal" data-bs-target="#bookingModal">Book Now</button></td>
          </tr>
          <tr>
            <td>
              <img src="images/tariff/Toyota_Innova_Crysta.jpg" alt="Toyota Innova Crysta G Model" className="tariff-car-image"/>
              <br/>Toyota Innova Crysta G Model
            </td>
            <td>4 Hours and 40 Kms</td>
            <td>2200 / Day</td>
            <td>550 / Hour</td>
            <td>24 / km</td>
            <td><button className="btn btn-tariff" data-bs-toggle="modal" data-bs-target="#bookingModal">Book Now</button></td>
          </tr>
          <tr>
            <td>
              <img src="images/tariff/Toyota_Innova_Crysta.jpg" alt="Toyota Innova Crysta Z Model" className="tariff-car-image"/>
              <br/>Toyota Innova Crysta Z Model
            </td>
            <td>8 Hours and 80 Kms</td>
            <td>4800 / Day</td>
            <td>600 / Hour</td>
            <td>30 / km</td>
            <td><button className="btn btn-tariff" data-bs-toggle="modal" data-bs-target="#bookingModal">Book Now</button></td>
          </tr>
          <tr>
            <td>
              <img src="images/tariff/Toyota_Fortuner.jpg" alt="Toyota Fortuner" className="tariff-car-image"/>
              <br/>Toyota Fortuner
            </td>
            <td>4 Hours and 40 Kms</td>
            <td>4000 / Day</td>
            <td>700 / Hour</td>
            <td>70 / km</td>
            <td><button className="btn btn-tariff" data-bs-toggle="modal" data-bs-target="#bookingModal">Book Now</button></td>
          </tr>
          <tr>
            <td>
              <img src="images/tariff/carnival.jpg" alt="KIA Carnival" className="tariff-car-image"/>
              <br/>KIA Carnival
            </td>
            <td>8 Hours and 80 Kms</td>
            <td>5000 / Day</td>
            <td>500 / Hour</td>
            <td>50 / km</td>
            <td><button className="btn btn-tariff" data-bs-toggle="modal" data-bs-target="#bookingModal">Book Now</button></td>
          </tr>
          <tr>
            <td>
              <img src="images/tariff/Volvo_Bus.jpg" alt="Volvo Bus" className="tariff-car-image"/>
              <br/>Volvo Bus
            </td>
            <td>1 day With in Chennai 300 kms</td>
            <td>23000 / Day</td>
            <td>-</td>
            <td>100 / km</td>
            <td><button className="btn btn-tariff" data-bs-toggle="modal" data-bs-target="#bookingModal">Book Now</button></td>
          </tr>
          {/* <tr>
            <td>
              <img src="images/tariff/yatch.jpg" alt="Yacht" className="tariff-car-image"/>
              <br/>Yacht
            </td>
            <td>Customized On Request</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td><button className="btn btn-tariff" data-bs-toggle="modal" data-bs-target="#bookingModal">Book Now</button></td>
          </tr> */}
          <tr>
            <td>
<<<<<<< HEAD
              <img src="images/carRentals/hycrosshybrid.png" alt="Yacht" className="tariff-car-image"/>
              <br/>Toyota Innova Hycross Hybrid
            </td>
            <td>Customized On Request</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td><button className="btn btn-tariff" data-bs-toggle="modal" data-bs-target="#bookingModal">Book Now</button></td>
          </tr>
          <tr>
            <td>
              <img src="images/carRentals/hycrosspetrol.png" alt="Yacht" className="tariff-car-image"/>
              <br/>Toyota Innova Hycross
            </td>
            <td>Customized On Request</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td><button className="btn btn-tariff" data-bs-toggle="modal" data-bs-target="#bookingModal">Book Now</button></td>
          </tr>
          <tr>
            <td>
              <img src="images/carRentals/commuter.png" alt="Yacht" className="tariff-car-image"/>
              <br/>Toyota Commuter
            </td>
            <td>Customized On Request</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td><button className="btn btn-tariff" data-bs-toggle="modal" data-bs-target="#bookingModal">Book Now</button></td>
          </tr>
          <tr>
            <td>
              <img src="images/carRentals/gls450d.png" alt="Yacht" className="tariff-car-image"/>
              <br/>Mercedes Benz GLS 450D
            </td>
            <td>Customized On Request</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td><button className="btn btn-tariff" data-bs-toggle="modal" data-bs-target="#bookingModal">Book Now</button></td>
          </tr>
          <tr>
            <td>
              <img src="images/carRentals/vclass.png" alt="Yacht" className="tariff-car-image"/>
              <br/>Mercedes Benz V Class
            </td>
            <td>Customized On Request</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td><button className="btn btn-tariff" data-bs-toggle="modal" data-bs-target="#bookingModal">Book Now</button></td>
          </tr>
          <tr>
            <td>
              <img src="images/carRentals/7series.png" alt="Yacht" className="tariff-car-image"/>
              <br/>BMW 7 Series
            </td>
            <td>Customized On Request</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td><button className="btn btn-tariff" data-bs-toggle="modal" data-bs-target="#bookingModal">Book Now</button></td>
          </tr>
          <tr>
            <td>
              <img src="images/carRentals/tempo.png" alt="Yacht" className="tariff-car-image"/>
              <br/>Tempo Traveller
            </td>
            <td>Customized On Request</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td><button className="btn btn-tariff" data-bs-toggle="modal" data-bs-target="#bookingModal">Book Now</button></td>
          </tr>
          <tr>
            <td>
              <img src="images/carRentals/urbania.png" alt="Yacht" className="tariff-car-image"/>
              <br/>Urbania
            </td>
            <td>Customized On Request</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td><button className="btn btn-tariff" data-bs-toggle="modal" data-bs-target="#bookingModal">Book Now</button></td>
          </tr>
          <tr>
            <td>
              <img src="images/carRentals/benz_26.png" alt="Yacht" className="tariff-car-image"/>
              <br/>Benz Bus
            </td>
            <td>Customized On Request</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td><button className="btn btn-tariff" data-bs-toggle="modal" data-bs-target="#bookingModal">Book Now</button></td>
          </tr>
          <tr>
            <td>
              <img src="images/carRentals/leyland_34.png" alt="Yacht" className="tariff-car-image"/>
              <br/>Leyland Bus
            </td>
            <td>Customized On Request</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td><button className="btn btn-tariff" data-bs-toggle="modal" data-bs-target="#bookingModal">Book Now</button></td>
          </tr>
          <tr>
            <td>
              <img src="images/carRentals/leyland40.png" alt="Yacht" className="tariff-car-image"/>
              <br/>Leyland Bus
            </td>
            <td>Customized On Request</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td><button className="btn btn-tariff" data-bs-toggle="modal" data-bs-target="#bookingModal">Book Now</button></td>
          </tr>
          <tr>
            <td>
              <img src="images/carRentals/bell.png" alt="Yacht" className="tariff-car-image"/>
              <br/>Helicoptor Bell
            </td>
            <td>Customized On Request</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td><button className="btn btn-tariff" data-bs-toggle="modal" data-bs-target="#bookingModal">Book Now</button></td>
          </tr>
          <tr>
            <td>
              <img src="images/carRentals/augusta.png" alt="Yacht" className="tariff-car-image"/>
              <br/>Helicoptor Augusta
            </td>
            <td>Customized On Request</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td><button className="btn btn-tariff" data-bs-toggle="modal" data-bs-target="#bookingModal">Book Now</button></td>
          </tr>
          <tr>
            <td>
              <img src="images/carRentals/hawker.png" alt="Yacht" className="tariff-car-image"/>
              <br/>Private Jet Hawker
=======
              <img src="images/tariff/yatch.jpg" alt="Yacht" className="tariff-car-image"/>
              <br/>Yacht
>>>>>>> 9a489bc7feb133706a14f3ed8f304b73cb2a4ff5
            </td>
            <td>Customized On Request</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td><button className="btn btn-tariff" data-bs-toggle="modal" data-bs-target="#bookingModal">Book Now</button></td>
          </tr>
          
        </tbody>
      </table>
    </div>
  </div>
</section>

{/* Booking Form Modal */}
<div className="modal fade" id="bookingModal" tabIndex="-1" aria-labelledby="bookingModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="bookingModalLabel">Book Your Car</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
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
                <div className="mb-3">
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
                <div className="mb-3">
                  <input
                    type="mobile"
                    className="form-control"
                    placeholder="Mobile Number"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <select
                    className="form-control"
                    name="carType"
                    value={formData.carType}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Preferred Car Type</option>
                    <option value="luxury">Luxury</option>
                    <option value="7seater">7 Seater</option>
                    <option value="5seater">5 Seater</option>
                    <option value="bus">Bus</option>
                    <option value="yacht">Yacht</option>
                  </select>
                </div>
                <div className="mb-3">
                  <input
                    type="date"
                    className="form-control"
                    name="pickUpDate"
                    value={formData.pickUpDate}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="date"
                    className="form-control"
                    name="returnDate"
                    value={formData.returnDate}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">Book Now</button>
              </form>
            </div>
          </div>
        </div>
      </div>

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

        </>

    )
};

export default Tariff