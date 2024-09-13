import React, { useState } from 'react';
import './Gallery.css'; // Import your styles

const Gallery = () => {
  const [fullImg, setFullImg] = useState('');
  const [isFullImgOpen, setFullImgOpen] = useState(false);

  const openFullImg = (src) => {
    setFullImg(src);
    setFullImgOpen(true);
  };

  const closeFullImg = () => {
    setFullImgOpen(false);
  };

  const images = [
    { id: 1, src: 'images/gallery/1.jpg', title: 'Corporate Car Rental', icon: '01' },
    { id: 2, src: 'images/gallery/2.jpg', title: 'Luxury Car Rental', icon: '02' },
    { id: 3, src: 'images/gallery/3.jpg', title: 'SUV Rentals', icon: '03' },
    { id: 4, src: 'images/gallery/4.jpg', title: 'Bus Rentals', icon: '04' },
    { id: 5, src: 'images/gallery/5.jpg', title: 'Airport Transfers', icon: '05' },
    { id: 6, src: 'images/gallery/6.jpg', title: 'Chauffeur Services', icon: '06' },
    { id: 7, src: 'images/gallery/7.jpg', title: 'Corporate Car Rental', icon: '07' },
    { id: 8, src: 'images/gallery/8.jpg', title: 'Luxury Car Rental', icon: '08' },
    { id: 9, src: 'images/gallery/9.jpg', title: 'SUV Rentals', icon: '09' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section text-center position-relative">
        <div className="banner-container">
          <div className="banner-image">
            <img src="/images/banner_all.png" alt="Car Banner" className="img-fluid hero-image" />
          </div>
          <div className="banner-text">
            <h1>Our <span>Gallery</span></h1>
          </div>
        </div>
      </section>

      {/* Full Image View */}
      {isFullImgOpen && (
        <div id="fullImgBox" className="full-img-box">
          <span className="close-btn" onClick={closeFullImg}>X</span>
          <img id="fullImg" src={fullImg} alt="Full" />
        </div>
      )}

      {/* Gallery Section */}
      <section className="gallery-section py-5">
        <div className="container">
          <div className="row">
            {images.map((image) => (
              <div key={image.id} className="col-lg-4 mb-4">
                <div className="services2">
                  <div className="item">
                    <img
                      src={image.src}
                      style={{ width: '400px', height: '350px' }}
                      alt={image.title}
                      onClick={() => openFullImg(image.src)}
                    />
                    <div className="bottom-fade"></div>
                    <div className="title">
                      <h4><a href="#">{image.title}</a></h4>
                    </div>
                    <div className="curv-butn icon-bg">
                      <div className="vid">
                        <div className="icon">{image.icon}</div>
                      </div>
                      <div className="br-left-top">
                        <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                          <path d="M11 0L0 0L0 11C0 4.92487 4.92487 0 11 0Z" fill="#ffffff" />
                        </svg>
                      </div>
                      <div className="br-right-bottom">
                        <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                          <path d="M11 0L0 0L0 11C0 4.92487 4.92487 0 11 0Z" fill="#ffffff" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
