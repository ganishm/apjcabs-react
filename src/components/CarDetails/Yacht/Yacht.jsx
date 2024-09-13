import React from 'react'
import './Yacht.css'

const Yacht = () => {
    return(
        <>
        <section className="hero-section position-relative">
        <div className="container-fluid p-0">
            <div className="banner-image">
                <img src="/images/carDetails/yat.png" className="img-fluid" alt="Banner Image"/>
            </div>
            <div className="black-overlay"></div>

            <div className="image-text position-absolute top-50 start-50 translate-middle text-center">
            <h1 className="bus-model-text">Yacht</h1>
            </div>
        </div>
    </section>

    <div className="container mt-5">

        <h1 className="text-center section-heading">Yacht Rental in Chennai</h1>

        <div className="row yacht-info">
            <div className="col-md-6">
                <h4>1st Yacht</h4>
                <p>44 footer custom built, air-conditioned saloon, bedroom, kitchenette, toilet, and an open outer deck. Capacity: 15 guests, 3 crew members.</p>
            </div>
            <div className="col-md-6">
                <h4>2nd Yacht</h4>
                <p>110 footer custom built, air-conditioned saloon, bedroom, kitchenette, toilet, and an open outer deck. Capacity: 50 guests, 6 crew members.</p>
            </div>
        </div>

        <div className="trip-inclusions">
            <h4 className="section-heading">Trip Includes:</h4>
            <ul className="list-group">
                <li className="list-group-item">Finger food (Veg/Non-Veg), soft drinks, bottled water.</li>
                <li className="list-group-item">Guest names and car numbers must be provided 3 days prior for passes.</li>
                <li className="list-group-item">Valid picture IDs required on the sail day.</li>
                <li className="list-group-item">For foreigners: Passport, visa, and entry documentation required.</li>
            </ul>
        </div>

        <div className="row mt-4">
            <div className="col-md-6">
                <h4 className="menu-title">Choose Sandwich (Veg/Non-Veg)</h4>
                <ul className="list-group">
                    <li className="list-group-item">Veg Sandwich</li>
                    <li className="list-group-item">Cheese Sandwich</li>
                    <li className="list-group-item">Chicken Sandwich</li>
                    <li className="list-group-item">Egg Sandwich</li>
                </ul>
            </div>
            <div className="col-md-6">
                <h4 className="menu-title">Choose Starter (Veg/Non-Veg)</h4>
                <ul className="list-group">
                    <li className="list-group-item">Veg Katti Roll</li>
                    <li className="list-group-item">Paneer Katti Roll</li>
                    <li className="list-group-item">Chicken Nuggets</li>
                    <li className="list-group-item">Mutton Cutlets</li>
                </ul>
            </div>
        </div>

        <div className="contact-info text-center mt-5">
            <h4 className="section-heading">Contact Us:</h4>
            <p><strong>Call:</strong> (+91) 9677111999</p>
            <p><strong>Email:</strong> cars@apjcabs.com</p>
        </div>
    </div>
        </>
    )
}

export default Yacht