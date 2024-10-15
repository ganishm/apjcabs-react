import React, { useEffect } from 'react';
import './Header.css';

const Header = () => {
  useEffect(() => {
    const loadGoogleTranslateScript = () => {
      const existingScript = document.getElementById('google-translate-script');
      if (!existingScript) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.id = 'google-translate-script'; // Give the script a unique ID
        document.body.appendChild(script);
      }
    };

    const initializeGoogleTranslate = () => {
      window.googleTranslateElementInit = function () {
        new window.google.translate.TranslateElement({
          pageLanguage: 'en', // Default language
          includedLanguages: 'af,ar,hy,az,eu,be,bg,bn,bs,ca,hr,cs,da,nl,en,eo,et,tl,fi,fr,ga,gd,gl,ka,de,el,gu,ht,ha,he,hi,hu,is,id,it,ja,jw,kn,km,ko,ku,ky,la,lv,lt,lb,mk,ml,mn,mi,mt,no,or,pl,pt,pa,ro,ru,sm,sn,sd,si,sk,sl,so,es,su,sw,sv,ta,te,th,tk,tl,tr,ug,uk,ur,vi,xh,yi,zu',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        }, 'google_translate_element');
      };
    };

    loadGoogleTranslateScript();
    initializeGoogleTranslate();

    return () => {
      // Optionally cleanup logic if needed
    };
  }, []); // Empty dependency array to run only once

  return (
    <header className="bg-white shadow-sm">
      <nav className="navbar navbar-expand-lg navbar-light py-3">
        <div className="container">
          <a className="navbar-brand fw-bold text-primary" href="/">APJ CABS</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link fw-bold" href="/">Home</a></li>
              <li className="nav-item"><a className="nav-link fw-bold" href="/about">About Us</a></li>
              <li className="nav-item"><a className="nav-link fw-bold" href="/services">Services</a></li>
              <li className="nav-item dropdown">
                <a className="nav-link fw-bold" href="/tariff">Tariff</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/car-rental">Car Rental</a></li>
                  <li><a className="dropdown-item" href="/self-drive">Self Drive</a></li>
                </ul>
              </li>
              <li className="nav-item"><a className="nav-link fw-bold" href="/blog">Blogs</a></li>
              <li className="nav-item"><a className="nav-link fw-bold" href="/gallery">Gallery</a></li>
            </ul>
            <div className="d-flex align-items-center ms-3">
              <a href="/contact" className="btn btn-primary text-left">Contact Us</a>
            </div>
            {/* Google Translate Dropdown */}
            <div id="google_translate_element" className="ms-3"></div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
