import { useState } from 'react';
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus, faCar, faShieldAlt, faUserTie, faMapSigns, faShip, faHome, faRoute } from '@fortawesome/free-solid-svg-icons';
=======
import { useNavigate } from 'react-router-dom'; 
>>>>>>> 9a489bc7feb133706a14f3ed8f304b73cb2a4ff5
import './Home.css'; // Custom CSS
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {

    const responsiveOptionsAdventure = {
        0: {
            items: 1,
            stagePadding: 60,
        },
        600: {
            items: 1,
            stagePadding: 100,
        },
        1000: {
            items: 1,
            stagePadding: 100,
        },
        1200: {
            items: 1,
            stagePadding: 200,
        },
        1400: {
            items: 1,
            stagePadding: 200,
        },
        1600: {
            items: 1,
            stagePadding: 200,
        },
        1800: {
            items: 1,
            stagePadding: 200,
        },
    };


    const responsiveOptionsCustomerSay = {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,
        },
    };


    const [activeTab, setActiveTab] = useState('all');

    const cars = [
<<<<<<< HEAD
        { id: 1, type: 'luxury_sedan', name: 'Mercedes', car_model:'Benz S Class',img_path:'/img/cars/benz_s_class_new.png'},
        { id: 2, type: 'luxury_sedan', name: 'Jaguar', car_model:'Xf' ,img_path:'/img/cars/jaguar_xf.png'},
        { id: 3, type: 'luxury_sedan', name: 'Jaguar', car_model:'XJL' ,img_path:'/img/cars/jaguar-xjl.png'},
        { id: 4, type: 'luxury_sedan', name: 'Rolls Royce', car_model:'Ghost',img_path:'/img/cars/rr_ghost.png' },
        { id: 5, type: 'luxury_sedan', name: 'Audi', car_model:' A6',img_path:'/img/cars/audi_a6.png' },
        { id: 6, type: 'luxury_sedan', name: 'BMW', car_model:' 5 Series',img_path:'/img/cars/5series.png' },
        { id: 7, type: 'luxury_sedan', name: 'Mercedes', car_model:'Benz E Class',img_path:'/img/cars/benzelass.png' },
        { id: 8, type: 'luxury_sedan', name: 'Audi', car_model:' A3 Convertible',img_path:'/img/cars/audia3.png' },
        { id: 9, type: 'luxury_sedan', name: 'BMW', car_model:' 7 Series',img_path:'/img/cars/7series.png' },
        { id: 10, type: 'toyota', name: 'Toyota', car_model:'Velfire',img_path:'/img/cars/velfire.png' },
        { id: 11, type: 'toyota', name: 'Toyota', car_model:'Innova Crysta G',img_path:'/img/cars/toyato_innova_crysta_g_model.png' },
        { id: 12, type: 'toyota', name: 'Toyota', car_model:'Innova Crysta Z',img_path:'/img/cars/toy_inn_crysta_z_model.png' },
        { id: 13, type: 'toyota', name: 'Toyota', car_model:' Fortuner',img_path:'/img/cars/toy_fortuner.png' },
        { id: 14, type: 'toyota', name: 'Toyota', car_model:' Innova Hycross Hybrid',img_path:'/img/cars/hycrosshybrid.png' },
        { id: 15, type: 'toyota', name: 'Toyota', car_model:' Innova Hycross',img_path:'/img/cars/hycrosspetrol.png' },
        { id: 16, type: 'toyota', name: 'Toyota', car_model:' Commuter',img_path:'/img/cars/commuter.png' },
        { id: 17, type: '6/7_seater', name: 'Mercedes', car_model:' Benz V Class',img_path:'/img/cars/vclass.png' },
        { id: 18, type: '6/7_seater', name: 'Mercedes', car_model:' GLS 450D',img_path:'/img/cars/450d.png' },
        { id: 19, type: '6/7_seater', name: 'Audi', car_model:'Q7' ,img_path:'/img/cars/q7.png' },
        { id: 20, type: '6/7_seater', name: 'Toyota', car_model:' Innova Hycross Hybrid',img_path:'/img/cars/hycrosshybrid.png' },
        { id: 21, type: '6/7_seater', name: 'Toyota', car_model:' Innova Hycross',img_path:'/img/cars/hycrosspetrol.png' },
        { id: 22, type: '6/7_seater', name: 'Toyota', car_model:'Innova Crysta G',img_path:'/img/cars/toyato_innova_crysta_g_model.png' },
        { id: 23, type: '6/7_seater', name: 'Toyota', car_model:'Innova Crysta Z',img_path:'/img/cars/toy_inn_crysta_z_model.png' },
        { id: 24, type: '6/7_seater', name: 'Toyota', car_model:' Fortuner',img_path:'/img/cars/toy_fortuner.png' },
        { id: 25, type: '6/7_seater', name: 'Toyota', car_model:'Velfire',img_path:'/img/cars/velfire.png' },
        { id: 26, type: 'mpv', name: 'Tempo', car_model:' Traveller',img_path:'/img/cars/tempo.png' },
        { id: 27, type: 'mpv', name: 'Urbania',img_path:'/img/cars/urbania.png' },
        { id: 28, type: 'mpv', name: 'Toyota', car_model:' Commuter',img_path:'/img/cars/commuter.png' },        
        { id: 29, type: 'bus', name: 'Volvo', car_model:' Bus',img_path:'/img/cars/volvo_bus.png' },
        { id: 30, type: 'bus', name: 'Benz', car_model:' Bus',img_path:'/img/cars/bezbus.png' },
        { id: 31, type: 'bus', name: 'Leyland', car_model:' Bus',img_path:'/img/cars/40seater.png' },
        { id: 32, type: 'bus', name: 'Leyland', car_model:' Bus',img_path:'/img/cars/40seater.png' },
        { id: 33, type: 'flying', name: 'Helicoptor', car_model:' Bell',img_path:'/img/cars/bell_hel.png' },
        { id: 34, type: 'flying', name: 'Helicoptor', car_model:' Augusta',img_path:'/img/cars/aug_hel.png' },
        { id: 35, type: 'flying', name: 'Private Jet', car_model:' Hawker',img_path:'/img/cars/hawker.png' },
        // { id: 9, type: 'seven_seater', name: 'Toyota', car_model:' Innova',img_path:'/img/cars/toyota_innova.png' },
        // { id: 11, type: 'seven_seater', name: 'KIA', car_model:' Carnival',img_path:'/img/cars/kiacarnival.png' },
        // { id: 12, type: 'five_seater', name: 'Toyota', car_model:' Corolla Altis',img_path:'/img/cars/toyota_corolla_altis.png' },
        // { id: 13, type: 'five_seater', name: 'Toyota', car_model:' Camry Hybrid',img_path:'/img/cars/toyotocarmyhybrid.png' },
        
=======
        { id: 1, type: 'luxury', name: 'Mercedes', car_model:'Benz S Class',img_path:'/img/cars/benz_s_class_new.png'},
        { id: 2, type: 'luxury', name: 'Jaguar', car_model:'Xf' ,img_path:'/img/cars/jaguar_xf.png'},
        { id: 3, type: 'luxury', name: 'Jaguar', car_model:'XJL' ,img_path:'/img/cars/jaguar-xjl.png'},
        { id: 4, type: 'luxury', name: 'Rolls Royce', car_model:'Ghost',img_path:'/img/cars/rr_ghost.png' },
        { id: 5, type: 'seven_seater', name: 'Audi', car_model:'Q7' ,img_path:'/img/cars/audi-q7.png' },
        { id: 6, type: 'seven_seater', name: 'Toyota', car_model:'Velfire',img_path:'/img/cars/toyota_vellfire.png' },
        { id: 7, type: 'seven_seater', name: 'Toyota', car_model:'Innova Crysta G',img_path:'/img/cars/toyato_innova_crysta_g_model.png' },
        { id: 8, type: 'seven_seater', name: 'Toyota', car_model:'Innova Crysta Z',img_path:'/img/cars/toy_inn_crysta_z_model.png' },
        { id: 9, type: 'seven_seater', name: 'Toyota', car_model:' Innova',img_path:'/img/cars/toyota_innova.png' },
        { id: 10, type: 'seven_seater', name: 'Toyota', car_model:' Fortuner',img_path:'/img/cars/toy_fortuner.png' },
        { id: 11, type: 'seven_seater', name: 'KIA', car_model:' Carnival',img_path:'/img/cars/kiacarnival.png' },
        { id: 12, type: 'five_seater', name: 'Toyota', car_model:' Corolla Altis',img_path:'/img/cars/toyota_corolla_altis.png' },
        { id: 13, type: 'five_seater', name: 'Toyota', car_model:' Camry Hybrid',img_path:'/img/cars/toyotocarmyhybrid.png' },
        { id: 14, type: 'five_seater', name: 'Audi', car_model:' A6',img_path:'/img/cars/audi_a6.png' },
        { id: 15, type: 'five_seater', name: 'BMW', car_model:' 5 Series',img_path:'/img/cars/bmw-5-series.png' },
        { id: 16, type: 'five_seater', name: 'Mercedes ', car_model:'Benz E Class',img_path:'/img/cars/benzelass.png' },
        { id: 17, type: 'bus', name: 'Volvo', car_model:' Bus',img_path:'/img/cars/volvo_bus.png' },
        { id: 18, type: 'yacht', name: 'Yacht',img_path:'/img/cars/yatch.png' },
>>>>>>> 9a489bc7feb133706a14f3ed8f304b73cb2a4ff5
    ];

    const tabs = [
        { name: 'All', filter: 'all' },
<<<<<<< HEAD
        { name: 'Toyota', filter: 'toyota' },
        { name: 'Luxury Sedan', filter: 'luxury_sedan' },
        { name: '6/7 Seater', filter: '6/7_seater' },
        { name: 'MPV', filter: 'mpv' },
        { name: 'Bus', filter: 'bus' },
        { name: 'Flying', filter: 'flying' },
=======
        { name: 'Luxury', filter: 'luxury' },
        { name: '7 Seater', filter: 'seven_seater' },
        { name: '5 Seater', filter: 'five_seater' },
        { name: 'Bus', filter: 'bus' },
        { name: 'Yacht', filter: 'yacht' },
>>>>>>> 9a489bc7feb133706a14f3ed8f304b73cb2a4ff5
    ];

    const handleTabClick = (filter) => {
        setActiveTab(filter);
    };

    const navigate = useNavigate(); // Initialize useNavigate
    const [formData, setFormData] = useState({
        choose_location: '',
        from_date: '',
        to_date: ''
    });

    const [errors, setErrors] = useState({});

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Validate form fields
    const validateForm = () => {
        let validationErrors = {};

        // Location validation
        if (!formData.choose_location) {
            validationErrors.choose_location = 'Location is required';
        }
        // From Date validation
        if (!formData.from_date) {
            validationErrors.from_date = 'Date is required';
        }
        // To Date validation
        if (!formData.to_date) {
            validationErrors.to_date = 'Date is required';
        }

        return validationErrors;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length === 0) {
            setFormData({
                choose_location: '',
                from_date: '',
                to_date: ''
            });
<<<<<<< HEAD
            // Navigate to the tariff page
            navigate('/tariff'); // Navigate to the tariff page
=======
            navigate('/tariff'); 
>>>>>>> 9a489bc7feb133706a14f3ed8f304b73cb2a4ff5
        } else {
            // Set validation errors to state
            setErrors(validationErrors);
        }
    };

    const NextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", right: "25px", zIndex: 1 }}
                onClick={onClick}
            />
        );
    };

    const PrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", left: "25px", zIndex: 1 }}
                onClick={onClick}
            />
        );
    };

    const settings = {
        dots: false, // Enable navigation dots
        infinite: true, // Infinite loop
        speed: 500, // Speed of slide transition
        slidesToShow: 1,
        slidesToScroll: 1,
<<<<<<< HEAD
        autoplay: true, // Enable autoplay
=======
        autoplay: false, // Enable autoplay
>>>>>>> 9a489bc7feb133706a14f3ed8f304b73cb2a4ff5
        autoplaySpeed: 3000, // Time between slides in milliseconds (3 seconds)
        arrows: true, // Enable left/right arrows
        nextArrow: <NextArrow />, // Custom arrow components
        prevArrow: <PrevArrow />,
    };

    const banners = [
        {
            title: "First Banner Title",
            description: "This is the description for the first banner.",
            buttonText: "Learn More",
<<<<<<< HEAD
            imageUrl: "/images/banner/banner1.png",
=======
            imageUrl: "/images/banner/redcar.png", // Replace with your image
>>>>>>> 9a489bc7feb133706a14f3ed8f304b73cb2a4ff5
        },
        {
            title: "Second Banner Title",
            description: "This is the description for the second banner.",
            buttonText: "Discover More",
<<<<<<< HEAD
            imageUrl: "/images/banner/banner2.png",
        },
        {
            title: "Third Banner Title",
            description: "This is the description for the second banner.",
            buttonText: "Discover More",
            imageUrl: "/images/banner/banner3.png",
        },
        {
            title: "Fourth Banner Title",
            description: "This is the description for the second banner.",
            buttonText: "Discover More",
            imageUrl: "/images/banner/banner4.png",
        },
        {
            title: "Fifth Banner Title",
            description: "This is the description for the second banner.",
            buttonText: "Discover More",
            imageUrl: "/images/banner/banner5.png",
        },
        {
            title: "Fifth Banner Title",
            description: "This is the description for the second banner.",
            buttonText: "Discover More",
            imageUrl: "/images/banner/banner6.png",
        },
        {
            title: "Fifth Banner Title",
            description: "This is the description for the second banner.",
            buttonText: "Discover More",
            imageUrl: "/images/banner/banner7.png",
        },
    ];

    const advantagesData = [
        {
          title: "Tirupathi Package",
          description: "Are you visiting the renowned Tirupathi temple from Chennai? Take a look at our Chennai to Tirupathi car rental packages.",
          icon: faRoute
        },
        {
          title: "VIP Transportation for Tirupathi Darshan",
          description: "We understand the need for privacy along with luxury when it comes to providing transportation for VIPs.",
          icon: faCar
        },
        {
          title: "Bouncer Services",
          description: "Security is a real concern nowadays and we know that VIP events cannot take place without ample security measures.",
          icon: faShieldAlt
        },
        {
          title: "Serviced Apartments",
          description: "Whether it is a short stay or a long stay, we can arrange for the best serviced apartments in Chennai based on your requirements.",
          icon: faHome
        },
        {
          title: "South India Tour",
          description: "While we do offer South India tour car rentals, we also have South India tour packages starting from Chennai.",
          icon: faMapSigns
        },
        {
          title: "Guide Facilities",
          description: "Tourists form a major chunk of our customers and they prefer to go for car rentals with a guide.",
          icon: faUserTie
        },
        {
          title: "Bus Rental",
          description: "Chartered Volvo Buses and Leyland Buses Available for Tours and Group Transportation.",
          icon: faBus
        },
        {
          title: "Yacht Rental",
          description: "Celebrate your Special Occasion or Get-togethers in a Luxury Yacht in Chennai. 15 and 60 pax Capacity Served along with food.",
          icon: faShip
        },
      ];

=======
            imageUrl: "/images/banner/yatch.png",
        },
        {
            title: "Second Banner Title",
            description: "This is the description for the second banner.",
            buttonText: "Discover More",
            imageUrl: "/images/banner/wedcarr.png",
        },
        {
            title: "Second Banner Title",
            description: "This is the description for the second banner.",
            buttonText: "Discover More",
            imageUrl: "/images/banner/car.png",
        },
        {
            title: "Second Banner Title",
            description: "This is the description for the second banner.",
            buttonText: "Discover More",
            imageUrl: "/images/banner/busses.png",
        },
    ];

>>>>>>> 9a489bc7feb133706a14f3ed8f304b73cb2a4ff5
    return (
        <>
            {/* <!-- Banner --> */}
            <section className="banner">
                <div className="container-fluid p-0">
                    <div className="row align-items-center">
                        {/* <div className="col-lg-6 col-md-12 banner-content text-center">
                            <h1>Your Premier Car Rental <span className="text-primary">Service</span></h1>
                            <p>Explore our fleet of top-quality vehicles and enjoy a hassle-free rental experience. Whether it`s
                                a business trip or weekend getaway, we`ve got the perfect ride for you.</p>
                            <a href="#" className="btn btn-dark">Explore</a>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <img src="./img/banner.png" alt="Banner Image" />
                        </div> */}
                        <Slider {...settings}>
                            {banners.map((banner, index) => (
                                <div key={index} className="banner-slide">
                                    <div
                                        className="banner-image"
                                        style={{ backgroundImage: `url(${banner.imageUrl})` }}
                                    >
                                        {/* <div className="banner-content">
                                            <h1>{banner.title}</h1>
                                            <p>{banner.description}</p>
                                            <button>{banner.buttonText}</button>
                                        </div> */}
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>

                    <div className="container-fluid centered-div">
                        <div className="form-container">
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-3 col">
                                        <div className="form-group home-input">
                                            <i className="fas fa-map-marker-alt"></i>
                                            <select name="choose_location" id="choose_location" className="form-control" value={formData.choose_location}
                                                onChange={handleChange}>
                                                <option value="">Choose Location</option>
                                                <option value="Porur">Porur</option>
                                                <option value="Guindy">Guindy</option>
                                            </select>
                                        </div>
                                        {errors.choose_location && <span className="error">{errors.choose_location}</span>}
                                    </div>

                                    <div className="col-md-3 col">
                                        <div className="form-group home-input">
                                            <i className="fas fa-calendar-alt"></i>
                                            <input type="date" id='from_date' name='from_date' className="form-control" placeholder="dd-mm-yyyy" value={formData.from_date}
                                                onChange={handleChange} />
                                        </div>
                                        {errors.from_date && <span className="error">{errors.from_date}</span>}
                                    </div>

                                    <div className="col-md-3 col">
                                        <div className="form-group home-input">
                                            <i className="fas fa-calendar-alt"></i>
                                            <input type="date" id='to_date' name='to_date' className="form-control" placeholder="dd-mm-yyyy" value={formData.to_date}
                                                onChange={handleChange} />
                                        </div>
                                        {errors.to_date && <span className="error">{errors.to_date}</span>}
                                    </div>

                                    <div className="col-md-3 col form-group d-flex justify-content-center">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>                   
                
            </section>
            {/* <!-- Banner --> */}


            {/* <!-- How it Works --> */}
            <section className="how-it-works odd_bg">
                <div className="container">

                    <h2>How It <span className="text-primary">Works</span></h2>

                    <p>Rent With Following 3 Working Steps</p>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12 column">
                            <i className="fa-solid fa-4x text-primary fa-location-dot"></i>
                            <h3>Choose Location</h3>
                            <p className="description">Choose Your Location And Find Your Best Car</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 column">
                            <i className="fa-solid fa-4x text-primary fa-calendar-alt"></i>
                            <h3>Pick-Up Date</h3>
                            <p className="description">Select Your Pickup Date And Rent Your Car</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 column">
                            <i className="fa-solid fa-4x text-primary fa-car"></i>
                            <h3>Book Your Car</h3>
                            <p className="description">Choose Your Location And Find Your Best Car</p>
                        </div>
                    </div>
                    <a href="/tariff" className="btn btn-dark">Start Booking</a>
                </div>
            </section>
            {/* <!-- How it Works --> */}


            {/* <!-- Trending Deals --> */}
            <section className="trending even_bg">
                <div className="container">

                    <h2>Trending Rental <span className="text-primary">Deals</span></h2>

                    <p>Most Popular Car Rental Deals</p>

                    <div className="tabs-wrapper">
                        <div className="tabs">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.filter}
                                    className={activeTab === tab.filter ? 'tab active' : 'tab'}
                                    onClick={() => handleTabClick(tab.filter)}
                                >
                                    {tab.name}
                                </button>
                                // <button className="tab active" data-filter="all">{tab.name}</button>
                            ))}
                        </div>
                    </div>


                    <div className="car-list">
                        {cars.map((car) => (
                            <div
                                key={car.id}
                                className={`car-item ${car.type}`}
                                style={{
                                    display: activeTab === 'all' || car.type === activeTab ? 'block' : 'none',
                                }}
                            >
                                <img src={car.img_path} alt={car.name} className="car-image" />
                                <div className="car-info">
                                    <div className="left-info">
                                        <h3 className="car-name">{car.name}</h3>
                                        <p className="car-model">{car.car_model}</p>
                                    </div>
                                    <div className="right-info">
                                        <h3 className="car-price">₹2000</h3>
                                        <p className="car-hours">4 Hours</p>
                                    </div>
                                </div>
<<<<<<< HEAD
                                {/* <div className="car-features">
=======
                                <div className="car-features">
>>>>>>> 9a489bc7feb133706a14f3ed8f304b73cb2a4ff5
                                    <div className="feature">
                                        <i className="fas fa-users"></i>
                                        <p>4 People</p>
                                    </div>
                                    <div className="feature">
                                        <i className="fas fa-users"></i>
                                        <p>Manual</p>
                                    </div>
                                    <div className="feature">
                                        <i className="fas fa-car"></i>
                                        <p>40L</p>
                                    </div>
<<<<<<< HEAD
                                </div> */}
                                <a href='/tariff'><button className="rent-button">Rent Now</button></a>
=======
                                </div>
                                <button className="rent-button">Rent Now</button>
>>>>>>> 9a489bc7feb133706a14f3ed8f304b73cb2a4ff5
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* <!-- Trending Deals --> */}

<<<<<<< HEAD
            <section className="unique-advantages-section">
      <h2 className="advantage-section-title">A.P.J Advantages</h2>
      <div className="advantages-timeline">
        {advantagesData.map((advantage, index) => (
          <div key={index} className={`advantage-item ${index % 2 === 0 ? 'left-column' : 'right-column'}`}>
            <div className="icon-container">
              <FontAwesomeIcon icon={advantage.icon} className="advantage-icon" />
            </div>
            <div className="text-container">
              <h3>{advantage.title}</h3>
              <p>{advantage.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

=======
>>>>>>> 9a489bc7feb133706a14f3ed8f304b73cb2a4ff5

            {/* <!-- Adventure --> */}

            <section className="adventure odd_bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <h2 className="adventure_title">
                                Dive Into Adventure:<br /><span className="text-primary">Rent Your Dream Car Today!</span>
                            </h2>
                        </div>
                        <div className="col-md-6 col-12">
                            <p>Liv Exotic Rentals provides full service car rentals. We do pickup, drop off, and concierge
                                service. We also offer discounts to people who rent their cars to go out for dinners at fancy
                                restaurants and activities.</p>
                            <a href="/about"><button>Learn More</button></a>
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <OwlCarousel className="owl-carousel"
                        stagePadding={200}
                        loop={true}
                        autoplay={true}
                        autoplayTimeout={5000}
                        margin={10}
                        nav={true}
                        lazyLoad={true}
                        dots={false}
                        responsive={responsiveOptionsAdventure}
                        items={1}>
                        <div className="item">
                            <img src="./img/car_slider/audi.png" alt="" />
                            <div className="inner">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="title">
                                            Audi Q7
                                        </div>
                                        <div className="options">
                                            <p><i className="fa-solid fa-door-open"></i>4 Seats</p>
                                            <p><i className="fa-solid fa-list"></i>Auto</p>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="details">
                                            <a href="/audiq7" className="btn btn-primary">Details</a>
                                            <div className="prices">
                                                <h3>₹9000</h3>
                                                <p>4 Hours</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item black">
                            <img src="./img/car_slider/benz.png" alt="" />
                            <div className="inner">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="title">
                                            Benz
                                        </div>
                                        <div className="options">
                                            <p><i className="fa-solid fa-door-open"></i>4 Seats</p>
                                            <p><i className="fa-solid fa-list"></i>Auto</p>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="details">
                                            <a href="/benzs" className="btn btn-primary">Details</a>
                                            <div className="prices">
                                                <h3>₹9000</h3>
                                                <p>4 Hours</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <img src="./img/car_slider/bmw.png" alt="" />
                            <div className="inner">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="title">
                                            BMW
                                        </div>
                                        <div className="options">
                                            <p><i className="fa-solid fa-door-open"></i>4 Seats</p>
                                            <p><i className="fa-solid fa-list"></i>Auto</p>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="details">
                                            <a href="/bmw" className="btn btn-primary">Details</a>
                                            <div className="prices">
                                                <h3>₹9000</h3>
                                                <p>4 Hours</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item black">
                            <img src="./img/car_slider/jaguar.png" alt="" />
                            <div className="inner">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="title">
                                            Jaguar
                                        </div>
                                        <div className="options">
                                            <p><i className="fa-solid fa-door-open"></i>4 Seats</p>
                                            <p><i className="fa-solid fa-list"></i>Auto</p>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="details">
                                            <a href="/jaguarxlj" className="btn btn-primary">Details</a>
                                            <div className="prices">
                                                <h3>₹9000</h3>
                                                <p>4 Hours</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <img src="./img/car_slider/rollsroyce.png" alt="" />
                            <div className="inner">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="title">
                                            Rolls Royce
                                        </div>
                                        <div className="options">
                                            <p><i className="fa-solid fa-door-open"></i>4 Seats</p>
                                            <p><i className="fa-solid fa-list"></i>Auto</p>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="details">
                                            <a href="/rollsroyce" className="btn btn-primary">Details</a>
                                            <div className="prices">
                                                <h3>₹9000</h3>
                                                <p>4 Hours</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item black">
<<<<<<< HEAD
                            <img src="./img/car_slider/bus_rental.png" alt="" />
=======
                            <img src="./img/car_slider/volvo.png" alt="" />
>>>>>>> 9a489bc7feb133706a14f3ed8f304b73cb2a4ff5
                            <div className="inner">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="title">
<<<<<<< HEAD
                                            Bus Rental
=======
                                            Volvo
>>>>>>> 9a489bc7feb133706a14f3ed8f304b73cb2a4ff5
                                        </div>
                                        <div className="options">
                                            <p><i className="fa-solid fa-door-open"></i>4 Seats</p>
                                            <p><i className="fa-solid fa-list"></i>Auto</p>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="details">
<<<<<<< HEAD
                                            <a href="#" className="btn btn-primary">Details</a>
=======
                                            <a href="/volvo" className="btn btn-primary">Details</a>
>>>>>>> 9a489bc7feb133706a14f3ed8f304b73cb2a4ff5
                                            <div className="prices">
                                                <h3>₹9000</h3>
                                                <p>4 Hours</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
<<<<<<< HEAD

                        {/* <div className="item black">
                            <img src="./img/car_slider/volvo.png" alt="" />
=======
                        <div className="item black">
                            <img src="./img/car_slider/yatch.png" alt="" />
>>>>>>> 9a489bc7feb133706a14f3ed8f304b73cb2a4ff5
                            <div className="inner">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="title">
<<<<<<< HEAD
                                            Volvo
=======
                                            Yatch
>>>>>>> 9a489bc7feb133706a14f3ed8f304b73cb2a4ff5
                                        </div>
                                        <div className="options">
                                            <p><i className="fa-solid fa-door-open"></i>4 Seats</p>
                                            <p><i className="fa-solid fa-list"></i>Auto</p>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="details">
<<<<<<< HEAD
                                            <a href="/volvo" className="btn btn-primary">Details</a>
=======
                                            <a href="/yacht" className="btn btn-primary">Details</a>
>>>>>>> 9a489bc7feb133706a14f3ed8f304b73cb2a4ff5
                                            <div className="prices">
                                                <h3>₹9000</h3>
                                                <p>4 Hours</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
<<<<<<< HEAD
                        </div> */}
                        <div className="item black">
                            <img src="./img/car_slider/celebrity.png" alt="" />
                            <div className="inner">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="title">
                                            Celebrity Transportation
                                        </div>
                                        
                                    </div>
                                    <div className="col-md-5">
                                        <div className="details">
                                            <a href="#" className="btn btn-primary">Details</a>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item black">
                            <img src="./img/car_slider/employeetransport.png" alt="" />
                            <div className="inner">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="title">
                                            Employee Transportation
                                        </div>
                                        
                                    </div>
                                    <div className="col-md-5">
                                        <div className="details">
                                            <a href="#" className="btn btn-primary">Details</a>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item black">
                            <img src="./img/car_slider/hotelbooking.png" alt="" />
                            <div className="inner">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="title">
                                            Hotel Booking for Groups
                                        </div>
                                        
                                    </div>
                                    <div className="col-md-5">
                                        <div className="details">
                                            <a href="#" className="btn btn-primary">Details</a>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item black">
                            <img src="./img/car_slider/interflightstickets.png" alt="" />
                            <div className="inner">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="title">
                                            International Flight Tickets
                                        </div>
                                        
                                    </div>
                                    <div className="col-md-5">
                                        <div className="details">
                                            <a href="#" className="btn btn-primary">Details</a>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item black">
                            <img src="./img/car_slider/topmanagement.png" alt="" />
                            <div className="inner">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="title">
                                            Top Management Travel
                                        </div>
                                        
                                    </div>
                                    <div className="col-md-5">
                                        <div className="details">
                                            <a href="#" className="btn btn-primary">Details</a>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item black">
                            <img src="./img/car_slider/visasupport.png" alt="" />
                            <div className="inner">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="title">
                                            Visa Support
                                        </div>
                                        
                                    </div>
                                    <div className="col-md-5">
                                        <div className="details">
                                            <a href="#" className="btn btn-primary">Details</a>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
=======
>>>>>>> 9a489bc7feb133706a14f3ed8f304b73cb2a4ff5
                        </div>
                    </OwlCarousel>
                </div>
            </section>

            {/* <!-- Adventure --> */}


            {/* <!-- Choose US --> */}
            <section className="choose_us odd_bg">
                <div className="container-fluid">

                    <h2>Why <span className="text-primary">Choose US</span></h2>

                    <div className="row">
                        <div className="col-md-5 col-12">
                            <div className="choose_us_bg">
                                <img src="./img/choose_us.png" alt="choose us" />
                            </div>
                        </div>
                        <div className="col-md-7 col-12 text_section">
                            <div className="row">
                                <div className="col-md-6 d-flex align-items-center mb-4">
                                    <div className="icon me-3">
                                        <i className="fas fa-phone"></i>
                                    </div>
                                    <div className="items">
                                        <div className="item-title">Customer Support</div>
                                        <div className="item-description">There are many variations of passages but the majority
                                            form.</div>
                                    </div>
                                </div>
                                <div className="col-md-6 d-flex align-items-center mb-4">
                                    <div className="icon me-3">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div className="items">
                                        <div className="item-title">Many Locations</div>
                                        <div className="item-description">There are many variations of passages but the majority
                                            form.</div>
                                    </div>
                                </div>
                                <div className="col-md-6 d-flex align-items-center mb-4">
                                    <div className="icon me-3">
                                        <i className="fas fa-wallet"></i>
                                    </div>
                                    <div className="items">
                                        <div className="item-title">Best Prices</div>
                                        <div className="item-description">There are many variations of passages but the majority
                                            form.</div>
                                    </div>
                                </div>
                                <div className="col-md-6 d-flex align-items-center mb-4">
                                    <div className="icon me-3">
                                        <i className="fas fa-user-tie"></i>
                                    </div>
                                    <div className="items">
                                        <div className="item-title">Experience Driver</div>
                                        <div className="item-description">There are many variations of passages but the majority
                                            form.</div>
                                    </div>
                                </div>
                                <div className="col-md-6 d-flex align-items-center mb-4">
                                    <div className="icon me-3">
                                        <i className="fas fa-shield-alt"></i>
                                    </div>
                                    <div className="items">
                                        <div className="item-title">Verified car Brand</div>
                                        <div className="item-description">There are many variations of passages but the majority
                                            form.</div>
                                    </div>
                                </div>
                                <div className="col-md-6 d-flex align-items-center mb-4">
                                    <div className="icon me-3">
                                        <i className="fas fa-ban"></i>
                                    </div>
                                    <div className="items">
                                        <div className="item-title">Free Cancellation</div>
                                        <div className="item-description">There are many variations of passages but the majority
                                            form.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Choose US --> */}


            {/* <!-- Customer Say --> */}

            <section className="customer_say even_bg">
                <div className="container">

                    <h2>What Our <span className="text-primary">Customer Say</span></h2>

                    <p>Testimonials</p>

                    <div className="row">
                        <OwlCarousel className="testimonials owl-carousel owl-theme"
                            loop={true}
                            margin={30}
                            mouseDrag={true}
                            autoplay={true}
                            autoplayTimeout={2000}
                            dots={false}
                            nav={false}
                            navText={[
                                "<span class='lnr ti-angle-left'></span>",
                                "<span class='lnr ti-angle-right'></span>",
                            ]}
                            responsive={responsiveOptionsCustomerSay}
                            responsiveClass={true}
                        >
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
                                    <p>Fast and professional are the best words to describe the Chauffeur team, they got me to
                                        my business meeting on time and in style, looking forward to next time!</p>
                                </div>
                                <div className="info mt-30">
                                    <div className="img-curv">
                                        <div className="img"> <img src="./img/customers/unni.jpg" alt="" /> </div>
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
                                    <p>They are the best in their business. Super clean and Comfortable rides throughout. Highly
                                        recommended.</p>
                                </div>
                                <div className="info mt-30">
                                    <div className="img-curv">
                                        <div className="img"> <img src="./img/customers/suyash.jpg" alt="" /> </div>
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
                                    <p>Wonderful colaboration with them for my wedding events. They add spice to the events in
                                        style</p>
                                </div>
                                <div className="info mt-30">
                                    <div className="img-curv">
                                        <div className="img"> <img src="./img/customers/vivek.jpeg" alt="" /> </div>
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
                        </OwlCarousel>
                    </div>
                </div>
            </section>

            {/* <!-- Customer Say --> */}

        </>

    );
};

export default HeroSection;
