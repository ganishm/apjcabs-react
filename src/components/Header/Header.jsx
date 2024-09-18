import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './Header.css';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="navbar navbar-expand-lg navbar-light py-3">
        <div className="container">
          <Link className="navbar-brand fw-bold text-primary" to="/">APJ CABS</Link> {/* Home Route */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link fw-bold" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link fw-bold" to="/about">About Us</Link></li>  {/* About Route */}
              <li className="nav-item"><Link className="nav-link fw-bold" to="/services">Services</Link></li> {/* Services Route */}
              <li className="nav-item dropdown">
                <Link className="nav-link fw-bold" to="/tariff">Tariff</Link> {/* Tariff Route */}
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/car-rental">Car Rental</Link></li> {/* Car Rental Route */}
                </ul>
              </li>
              <li className="nav-item"><Link className="nav-link fw-bold" to="/clients">Clients</Link></li> {/* Clients Route */}
              <li className="nav-item"><Link className="nav-link fw-bold" to="/gallery">Gallery</Link></li> {/* Gallery Route */}
            </ul>
            <div className="d-flex align-items-center ms-3">
              <Link to="/contact" className="btn btn-primary text-left">Contact Us</Link> {/* Contact Route */}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
