import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
        <nav className="navbar navbar-expand-lg navbar-light py-3">
            <div className="container">
                <a className="navbar-brand fw-bold text-primary" href="../index.html">APJ CABS</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link fw-bold" href="#">Home</a></li>
                        <li className="nav-item"><a className="nav-link fw-bold" href="#">About us</a></li>
                        <li className="nav-item"><a className="nav-link fw-bold" href="#">Services</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link fw-bold" href="#">Tariff</a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Car Rental</a></li>
                            </ul>
                        </li>                        <li className="nav-item"><a className="nav-link fw-bold" href="#">Clients</a></li>
                        <li className="nav-item"><a className="nav-link fw-bold" href="../Gallery/gallery.html">Gallery</a></li>
                    </ul>
                    <div className="d-flex align-items-center ms-3">
                        <a href="#" className="btn btn-primary text-left">Contact Us</a>
                    </div>
                </div>
            </div>
        </nav>
    </header>
  );
};
export default Header;
