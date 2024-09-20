import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="navbar navbar-expand-lg navbar-light py-3">
        <div className="container">
          <a className="navbar-brand fw-bold text-primary" href="/">APJ CABS</a> {/* Home Route */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-a fw-bold" href="/">Home</a></li>
              <li className="nav-item"><a className="nav-a fw-bold" href="/about">About Us</a></li>  {/* About Route */}
              <li className="nav-item"><a className="nav-a fw-bold" href="/services">Services</a></li> {/* Services Route */}
              <li className="nav-item dropdown">
                <a className="nav-a fw-bold" href="/tariff">Tariff</a> {/* Tariff Route */}
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/car-rental">Car Rental</a></li> {/* Car Rental Route */}
                </ul>
              </li>
              <li className="nav-item"><a className="nav-a fw-bold" href="/clients">Clients</a></li> {/* Clients Route */}
              <li className="nav-item"><a className="nav-a fw-bold" href="/gallery">Gallery</a></li> {/* Gallery Route */}
            </ul>
            <div className="d-flex align-items-center ms-3">
              <a href="/contact" className="btn btn-primary text-left">Contact Us</a> {/* Contact Route */}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
