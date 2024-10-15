import { useState } from 'react';


import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoute, faCar, faShieldAlt, faHome, faMapSigns, faUserTie, faBus, faShip, faHelicopter, faPlane } from '@fortawesome/free-solid-svg-icons'; // Ensure you import the relevant icons
import './Home.css'; // Custom CSS
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {

    const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    { question: "What is your car rental process?", answer: "The process is simple: Select your car, choose the rental period, provide your details, and pick up the car at your desired location." },
    { question: "What documents do I need?", answer: "You need to present a valid driver's license and a government-issued ID card." },
    { question: "Are there any extra charges for late returns?", answer: "Yes, we charge an additional fee based on the extra hours or days beyond your rental period." },
    { question: "Can I cancel my booking?", answer: "Cancellations are allowed up to 24 hours before the rental period. Please refer to our cancellation policy for more details." },
    { question: "Is there a mileage limit?", answer: "Yes, each car comes with a daily mileage limit. Additional charges may apply for extra miles." },
    { question: "Do you provide roadside assistance?", answer: "Yes, we provide 24/7 roadside assistance during the rental period." },
    { question: "How do I extend my rental period?", answer: "You can extend the rental period by contacting our support team before your return time." },
    { question: "What payment methods are accepted?", answer: "We accept all major credit cards, debit cards, and online payments." },
    { question: "Can I rent a car without a driver?", answer: "Yes, we offer both self-drive and chauffeur-driven rental options." },
    { question: "Is insurance included in the rental?", answer: "Yes, all cars come with basic insurance. Additional coverage options are also available." }
  ];

    // const responsiveOptionsAdventure = {
    //     0: {
    //         items: 1,
    //         stagePadding: 60,
    //     },
    //     600: {
    //         items: 1,
    //         stagePadding: 100,
    //     },
    //     1000: {
    //         items: 1,
    //         stagePadding: 100,
    //     },
    //     1200: {
    //         items: 1,
    //         stagePadding: 200,
    //     },
    //     1400: {
    //         items: 1,
    //         stagePadding: 200,
    //     },
    //     1600: {
    //         items: 1,
    //         stagePadding: 200,
    //     },
    //     1800: {
    //         items: 1,
    //         stagePadding: 200,
    //     },
    // };


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
        { id: 1, type: 'luxury_sedan', name: 'Mercedes', car_model:'Benz S Class',img_path:'/img/cars/benz_s_class_new.png', prize:'₹25,000', hours:'8 Hour and 80 Kms', people:'4 peoples', rent:'/benzs'}, 
        { id: 2, type: 'luxury_sedan', name: 'Jaguar', car_model:'Xf' ,img_path:'/img/cars/jaguar_xf.png', prize:'₹7000', hours:'4 Hour and 40 Kms',people:'4 peoples', rent:'/jaguarxf'},
        { id: 3, type: 'luxury_sedan', name: 'Jaguar', car_model:'XJL' ,img_path:'/img/cars/jaguar-xjl.png', prize:'₹20000', hours:'8 Hour and 80 Kms', people:'4 peoples', rent:'/jaguarxlj'},
        { id: 4, type: 'luxury_sedan', name: 'Rolls Royce', car_model:'Ghost',img_path:'/img/cars/rr_ghost.png', prize:'₹100000', hours:'8 Hour and 80 Kms',people:'4 peoples', rent:'/rollsroyce' },
        { id: 5, type: 'luxury_sedan', name: 'Audi', car_model:' A6',img_path:'/img/cars/audi_a6.png', prize:'₹6000', hours:'4 Hours and 40 Kms',people:'4 peoples', rent:'/audia6' },
        { id: 6, type: 'luxury_sedan', name: 'BMW', car_model:' 5 Series',img_path:'/img/cars/5series.png',  prize:'₹6000', hours:'4 Hours and 40 Kms',people:'4 peoples', rent:'/bmw5series' },
        { id: 7, type: 'luxury_sedan', name: 'Mercedes', car_model:'Benz E Class',img_path:'/img/cars/benzelass.png', prize:'₹6000', hours:'4 Hours and 40 Kms',people:'4 peoples' , rent:'/benze'},
        { id: 8, type: 'luxury_sedan', name: 'Audi', car_model:' A3 Convertible',img_path:'/img/cars/audia3.png',people:'4 peoples',  },
        { id: 9, type: 'luxury_sedan', name: 'BMW', car_model:' 7 Series',img_path:'/img/cars/7series.png',people:'4 peoples',  },
        { id: 10, type: 'toyota', name: 'Toyota', car_model:'Velfire',img_path:'/img/cars/velfire.png', prize:'₹22000', hours:'8 Hours and 80 Kms',people:'6 peoples', rent:'/velfire' },
        { id: 11, type: 'toyota', name: 'Toyota', car_model:'Innova Crysta G',img_path:'/img/cars/toyato_innova_crysta_g_model.png', prize:'₹2200', hours:'4 Hours and 40 Kms',people:'6 peoples', rent:'/crystag' },
        { id: 12, type: 'toyota', name: 'Toyota', car_model:'Innova Crysta Z',img_path:'/img/cars/toy_inn_crysta_z_model.png', prize:'₹4800', hours:'4 Hours and 40 Kms',people:'6 peoples', rent:'/crystaz' },
        { id: 13, type: 'toyota', name: 'Toyota', car_model:' Fortuner',img_path:'/img/cars/toy_fortuner.png', prize:'₹4000', hours:'4 Hours and 40 Kms',people:'6 peoples', rent:'/fortuner'},
        { id: 14, type: 'toyota', name: 'Toyota', car_model:' Innova Hycross Hybrid',img_path:'/img/cars/hycrosshybrid.png',people:'6 peoples',  },
        { id: 15, type: 'toyota', name: 'Toyota', car_model:' Innova Hycross',img_path:'/img/cars/hycrosspetrol.png' ,people:'6 peoples', },
        { id: 16, type: 'toyota', name: 'Toyota', car_model:' Commuter',img_path:'/img/cars/commuter.png',people:'6 peoples',  },
        { id: 17, type: '6/7_seater', name: 'Mercedes', car_model:' Benz V Class',img_path:'/img/cars/vclass.png',people:'6 peoples',  },
        { id: 18, type: '6/7_seater', name: 'Mercedes', car_model:' GLS 450D',img_path:'/img/cars/450d.png' ,people:'6 peoples', },
        { id: 19, type: '6/7_seater', name: 'Audi', car_model:'Q7' ,img_path:'/img/cars/q7.png', prize:'₹9000', hours:'4 Hours and 40 Kms',people:'6 peoples', rent:'/audiq7'},
        { id: 20, type: '6/7_seater', name: 'Toyota', car_model:' Innova Hycross Hybrid',img_path:'/img/cars/hycrosshybrid.png',people:'6 peoples',  },
        { id: 21, type: '6/7_seater', name: 'Toyota', car_model:' Innova Hycross',img_path:'/img/cars/hycrosspetrol.png' ,people:'6 peoples', },
        { id: 22, type: '6/7_seater', name: 'Toyota', car_model:'Innova Crysta G',img_path:'/img/cars/toyato_innova_crysta_g_model.png', prize:'₹2200', hours:'4 Hours and 40 Kms',people:'6 peoples', rent:'/crystag' },
        { id: 23, type: '6/7_seater', name: 'Toyota', car_model:'Innova Crysta Z',img_path:'/img/cars/toy_inn_crysta_z_model.png', prize:'₹4800', hours:'4 Hours and 40 Kms',people:'6 peoples', rent:'/crystaz' },
        { id: 24, type: '6/7_seater', name: 'Toyota', car_model:' Fortuner',img_path:'/img/cars/toy_fortuner.png', prize:'₹4000', hours:'4 Hours and 40 Kms',people:'6 peoples', rent:'/fortuner' },
        { id: 25, type: '6/7_seater', name: 'Toyota', car_model:'Velfire',img_path:'/img/cars/velfire.png', prize:'₹22000', hours:'8 Hours and 80 Kms',people:'6 peoples',rent:'/velfire' },
        { id: 26, type: 'mpv', name: 'Tempo', car_model:' Traveller',img_path:'/img/cars/tempo.png',people:'12 peoples', },
        { id: 27, type: 'mpv', name: 'Urbania',img_path:'/img/cars/urbania.png',people:'10 peoples', },
        { id: 28, type: 'mpv', name: 'Toyota', car_model:' Commuter',img_path:'/img/cars/commuter.png',people:'7 peoples', },        
        { id: 29, type: 'bus', name: 'Volvo', car_model:' Bus',img_path:'/img/cars/volvo_bus.png', prize:'₹23500', hours:'1 day With in Chennai 300 kms' ,people:'28 peoples',rent:'/volvo' },
        { id: 30, type: 'bus', name: 'Benz', car_model:' Bus',img_path:'/img/cars/bezbus.png',people:'28 peoples', },
        { id: 31, type: 'bus', name: 'Leyland', car_model:' Bus',img_path:'/img/cars/40seater.png',people:'30 peoples', },
        { id: 32, type: 'bus', name: 'Leyland', car_model:' Bus',img_path:'/img/cars/40seater.png',people:'48 peoples', },
        { id: 33, type: 'flying', name: 'Helicoptor', car_model:' Bell',img_path:'/img/cars/bell_hel.png' },
        { id: 34, type: 'flying', name: 'Helicoptor', car_model:' Augusta',img_path:'/img/cars/aug_hel.png' },
        { id: 35, type: 'flying', name: 'Private Jet', car_model:' Hawker',img_path:'/img/cars/hawker.png' },
        { id: 36, type: 'benz', name: 'Mercedes', car_model:'Benz S Class',img_path:'/img/cars/benz_s_class_new.png', prize:'₹25,000', hours:'8 Hour and 80 Kms',people:'4 peoples',rent:'/benzs'},
        { id: 37, type: 'benz', name: 'Mercedes', car_model:'Benz E Class',img_path:'/img/cars/benzelass.png', prize:'₹6000', hours:'4 Hours and 40 Kms',people:'4 peoples',rent:'/benze' },
        { id: 38, type: 'benz', name: 'Mercedes', car_model:' Benz V Class',img_path:'/img/cars/vclass.png',people:'6 peoples', },
        { id: 39, type: 'benz', name: 'Mercedes', car_model:' GLS 450D',img_path:'/img/cars/450d.png' ,people:'6 peoples',},
        { id: 40, type: 'audi', name: 'Audi', car_model:' A6',img_path:'/img/cars/audi_a6.png',  prize:'₹6000', hours:'4 Hours and 40 Kms',people:'4 peoples',rent:'/audia6' },
        { id: 41, type: 'audi', name: 'Audi', car_model:' A3 Convertible',img_path:'/img/cars/audia3.png',people:'4 peoples', },
        { id: 42, type: 'audi', name: 'Audi', car_model:'Q7' ,img_path:'/img/cars/q7.png',prize:'₹9000', hours:'4 Hours and 40 Kms',people:'6 peoples',rent:'audiq7' },
        { id: 43, type: 'jaguar', name: 'Jaguar', car_model:'Xf' ,img_path:'/img/cars/jaguar_xf.png', prize:'₹7000', hours:'4 Hour and 40 Kms',people:'4 peoples',rent:'/jaguarxf'},
        { id: 44, type: 'jaguar', name: 'Jaguar', car_model:'XJL' ,img_path:'/img/cars/jaguar-xjl.png', prize:'₹20000', hours:'8 Hour and 80 Kms',people:'4 peoples',rent:'/jaguarxlj'},
        { id: 45, type: 'bmw', name: 'BMW', car_model:' 5 Series',img_path:'/img/cars/5series.png', prize:'₹6000', hours:'4 Hours and 40 Kms',people:'4 peoples',rent:'/bmw5series' },
        { id: 46, type: 'bmw', name: 'BMW', car_model:' 7 Series',img_path:'/img/cars/7series.png' ,people:'4 peoples', },
        { id: 47, type: 'force', name: 'Tempo', car_model:' Traveller',img_path:'/img/cars/tempo.png',people:'12 peoples',  },
        { id: 48, type: 'volvo_bus', name: 'Volvo', car_model:' Bus',img_path:'/img/cars/volvo_bus.png',prize:'₹23500', hours:'1 day With in Chennai 300 kms',people:'28 peoples',rent:'/volvo' },
        { id: 49, type: 'bhart_benz_bus', name: 'Benz', car_model:' Bus',img_path:'/img/cars/bezbus.png',people:'28 peoples',  },
        { id: 50, type: 'ashok_leyland_bus', name: 'Leyland', car_model:' Bus',img_path:'/img/cars/40seater.png',people:'28 peoples',  },
        { id: 51, type: 'ashok_leyland_bus', name: 'Leyland', car_model:' Bus',img_path:'/img/cars/40seater.png',people:'40 peoples',  },

        // { id: 9, type: 'seven_seater', name: 'Toyota', car_model:' Innova',img_path:'/img/cars/toyota_innova.png' },
        // { id: 11, type: 'seven_seater', name: 'KIA', car_model:' Carnival',img_path:'/img/cars/kiacarnival.png' },
        // { id: 12, type: 'five_seater', name: 'Toyota', car_model:' Corolla Altis',img_path:'/img/cars/toyota_corolla_altis.png' },
        // { id: 13, type: 'five_seater', name: 'Toyota', car_model:' Camry Hybrid',img_path:'/img/cars/toyotocarmyhybrid.png' },
    ];

    const tabs = [
        { name: 'All', filter: 'all' },
        { name: 'Toyota', filter: 'toyota' },
        { name: 'Benz', filter:'benz' },
        { name: 'Audi', filter: 'audi' },
        { name: 'BMW', filter: 'bmw' },
        { name: 'Jaguar', filter: 'jaguar' },
        { name: 'Force', filter: 'force' },
        { name: 'Volvo Bus', filter: 'volvo_bus' },
        { name: 'Bhart Benz Bus', filter: 'bhart_benz_bus' },
        { name: 'Ashok Leyland Bus', filter: 'ashok_leyland_bus' },
        { name: 'Luxury Sedan', filter: 'luxury_sedan' },
        { name: '6/7 Seater', filter: '6/7_seater' },
        { name: 'MPV', filter: 'mpv' },
        { name: 'Bus', filter: 'bus' },
        { name: 'Flying', filter: 'flying' },
    ];

    const handleTabClick = (filter) => {
        setActiveTab(filter);
    };

    const navigate = useNavigate();
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
            // Navigate to the tariff page
            navigate('/tariff'); 
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

        autoplay: true, 

        autoplay: true, 
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


            imageUrl: "/images/banner/banner1.png",
        },
        {
            title: "Second Banner Title",
            description: "This is the description for the second banner.",
            buttonText: "Discover More",


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
          icon: faRoute,
          href: "/services#tirupati-package"
        },
        {
          title: "VIP Transportation for Tirupathi Darshan",
          description: "We understand the need for privacy along with luxury when it comes to providing transportation for VIPs.",
          icon: faCar,
          href: "/services#vip-transportation-tirupati",
        },
        {
          title: "Bouncer Services",
          description: "Security is a real concern nowadays and we know that VIP events cannot take place without ample security measures.",
          icon: faShieldAlt,
          href: "/services#bouncer-services",
        },
        {
          title: "Serviced Apartments",
          description: "Whether it is a short stay or a long stay, we can arrange for the best serviced apartments in Chennai based on your requirements.",
          icon: faHome,
          href: "/services#serviced-apartments",
        },
        {
          title: "South India Tour",
          description: "While we do offer South India tour car rentals, we also have South India tour packages starting from Chennai.",
          icon: faMapSigns,
          href: "/services#south-india-tour",
        },
        {
          title: "Guide Facilities",
          description: "Tourists form a major chunk of our customers and they prefer to go for car rentals with a guide.",
          icon: faUserTie,
          href: "/services#guide-facilities",
        },
        {
          title: "Bus Rental",
          description: "Chartered Volvo Buses and Leyland Buses Available for Tours and Group Transportation.",
          icon: faBus,
          href: "/services#bus-rental",
        },
        {
          title: "Yacht Rental",
          description: "Celebrate your Special Occasion or Get-togethers in a Luxury Yacht in Chennai. 15 and 60 pax Capacity Served along with food.",
          icon: faShip,
          href: "/services#yacht-rental",
        },
        {
          title: "Event Transportation",
          description: "Chartered Volvo Buses and Leyland Buses Available for Tours and Group Transportation.",
          icon: faCar,
          href: "/services#event-transportation",
        },
        {
          title: "VIP Transportation",
          description: "Celebrate your Special Occasion or Get-togethers in a Luxury Yacht in Chennai. 15 and 60 pax Capacity Served along with food.",
          icon: faCar,
          href: "/services#vip-transportation",
        },
        {
          title: "Corporate Car Rental",
          description: "Chartered Volvo Buses and Leyland Buses Available for Tours and Group Transportation.",
          icon: faCar,
          href: "/services#corporate-car-hire",
        },
        {
          title: "Self Drive Car Rental",
          description: "Celebrate your Special Occasion or Get-togethers in a Luxury Yacht in Chennai. 15 and 60 pax Capacity Served along with food.",
          icon: faCar,
          href: "/services#self-drive-car-rental",
        },
        {
          title: "Employee Transportation",
          description: "Chartered Volvo Buses and Leyland Buses Available for Tours and Group Transportation.",
          icon: faBus,
          href: "/services#employee-transportation",
        },
        {
          title: "Bridal Car Rental",
          description: "Celebrate your Special Occasion or Get-togethers in a Luxury Yacht in Chennai. 15 and 60 pax Capacity Served along with food.",
          icon: faCar,
          href: "/services#bridal-car-rental",
        },
        {
          title: "Helicoptor Rental",
          description: "Chartered Volvo Buses and Leyland Buses Available for Tours and Group Transportation.",
          icon: faHelicopter,
          href: "/services#helicoptor-rental",
        },
        {
          title: "Private Jet Rental",
          description: "Celebrate your Special Occasion or Get-togethers in a Luxury Yacht in Chennai. 15 and 60 pax Capacity Served along with food.",
          icon: faPlane,
          href: "/services#private-jet-rental",
        },
      ];

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

            {/* <div className="service-container">
  <h2 className="service-popular-title">Popular <span className="text-primary">Services</span></h2>
  <div className="service-card-container">
    {cardData.map((card) => (
      <a href={card.href} className="service-card-link" key={card.id}>
        <div className="service-card">
          <img src={card.image} alt={card.title} className="service-card-image" />
          <h3 className="service-card-title">{card.title}</h3>
          <p className="service-card-description">{card.description}</p>
        </div>
      </a>
    ))}
  </div>
</div> */}

{/* Popular Services */}

<section className="unique-advantages-section">
  <h2 className="advantage-section-title">Popular <span className="text-primary">Services</span></h2>
  <div className="advantages-timeline">
    {advantagesData.map((advantage, index) => (
      <a href={advantage.href} className="service-card-link" key={index}> {/* Added the <a> tag here */}
        <div key={index} className={`advantage-item ${index % 2 === 0 ? 'left-column' : 'right-column'}`}>
          <div className="icon-container">
            <FontAwesomeIcon icon={advantage.icon} className="advantage-icon" />
          </div>
          <div className="text-container">
            <h3>{advantage.title}</h3>
            <p>{advantage.description}</p>
          </div>
        </div>
      </a>
    ))}
  </div>
</section>


            {/* <!-- Trending Deals --> */}
            <section className="trending even_bg">
                <div className="container">

                    <h2>Fleet at <span className="text-primary">APJ</span></h2>

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
                                        <h3 className="car-price">{car.prize}</h3>
                                        <p className="car-hours">{car.hours}</p>
                                    </div>
                                </div>
                                 <div className="car-features">
                                    <div className="feature">
                                        <i className="fas fa-users"></i>
                                        <p>{car.people}</p>
                                    </div>
                                    {/* <div className="feature">
                                        <i className="fas fa-users"></i>
                                        <p>Manual</p>
                                    </div>
                                    <div className="feature">
                                        <i className="fas fa-car"></i>
                                        <p>40L</p>
                                    </div> */}
                                    <a href={car.rent}><button className="rent-button">Rent Now</button></a>

                                </div> 
                                
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* <!-- Trending Deals --> */}


            {/* <!-- Adventure --> */}

            {/* <section className="adventure odd_bg">
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


                            <img src="./img/car_slider/bus_rental.png" alt="" />
                            <div className="inner">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="title">
                                            Bus Rental
                                        </div>
                                        <div className="options">
                                            <p><i className="fa-solid fa-door-open"></i>4 Seats</p>
                                            <p><i className="fa-solid fa-list"></i>Auto</p>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="details">


                                            <a href="#" className="btn btn-primary">Details</a>
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
                        </div>
                    </OwlCarousel>
                </div>
            </section> */}

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

            {/* FAQ Section */}

            <div className="all-faq-section">
      <h2 className="all-title">Frequently Asked Questions</h2>
      <div className="all-faq-grid">
        {faqs.map((faq, index) => (
          <div
            className={`all-faq-item ${activeIndex === index ? "all-active" : ""}`}
            key={index}
            onClick={() => toggleFAQ(index)}
          >
            <div className="all-faq-question">
              <span>{faq.question}</span>
              <i className="all-faq-icon">{activeIndex === index ? "-" : "+"}</i>
            </div>
            {activeIndex === index && (
              <div className="all-faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>


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
