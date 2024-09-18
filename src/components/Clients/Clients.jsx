import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faComments } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import './Clients.css';

const Clients = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedCar, setSelectedCar] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [message, setMessage] = useState('');
  const [userInfo, setUserInfo] = useState({ name: '', email: '', number: '' });
  const [step, setStep] = useState(1); // Step 1: Greeting, Step 2: Car Selection, Step 3: Date & Time, Step 4: User Info

  // Toggle chatbox visibility
  const toggleChat = () => {
    setIsOpen(!isOpen);
    resetSelections();
  };

  // Reset all selections
  const resetSelections = () => {
    setSelectedOption(null);
    setSelectedCar(null);
    setSelectedDate(null);
    setMessage('');
    setUserInfo({ name: '', email: '', number: '' });
    setStep(1); // Reset to the first step
  };

  // Handle service option selection
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setSelectedCar(null); // Reset car selection when switching options
    setStep(2); // Move to Car Selection step
  };

  // Handle car selection
  const handleCarClick = (car) => {
    setSelectedCar(car);
    setStep(3); // Move to Date & Time step
  };

  // Handle date change
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Handle send button click in Date & Time step
  const handleSendDateClick = () => {
    if (selectedDate) {
      setStep(4); // Move to User Info step
    }
  };

  // Handle user info change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  // Handle send button click in User Info step
  const handleSendUserInfoClick = () => {
    if (userInfo.name && userInfo.email && userInfo.number) {
      const enquiryDetails = {
        user: userInfo,
        car: selectedCar,
        option: selectedOption,
        date: selectedDate ? selectedDate.toISOString() : '',
      };
  
      // Make API call to send email
      fetch('http://localhost:5000/send-enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(enquiryDetails),
      })
        .then(() => {
          resetSelections();
        })
        .catch((error) => {
          console.error('Error sending email:', error);
        });
    }
  };

  // Get the relevant car list based on selected option
  const getCarList = () => {
    switch (selectedOption) {
      case 'Luxury Car':
        return ['Rolls Royce', 'Benz S Class', 'Jaguar XF', 'Jaguar XJL'];
      case '5 Seater':
        return ['Toyota Camry', 'Toyota Corolla', 'BMW 5 Series', 'Audi A6', 'Benz E Class'];
      case '7 Seater':
        return ['Audi Q7', 'Toyota Innova', 'Crysta Z', 'Crysta G', 'Toyota Velfire', 'Toyota Fortuner', 'KIA Carnival'];
      case 'Bus':
        return ['1 Bus Available'];
      case 'Yacht':
        return ['1 Yacht Available'];
      default:
        return [];
    }
  };

  return (
    <>
    <Header/>
     <section className="clients-hero-section text-center position-relative">
        <div className="clients-banner-container">
          <div className="clients-banner-image">
            <img src="/images/banner_all.png" alt="Car Banner" className="img-fluid clients-hero-image"/>
          </div>
          <div className="banner-text">
            <h1>Our <span>Clients</span></h1>
          </div>
        </div>
      </section> 
    

      <section className="slider-section">
    <div className="slider">
        <div className="slider-track">
            <div className="slide">
                <img src="images/clients/1.jpg" height="150" width="250"/>
            </div>
            <div className="slide">
                <img src="/images/clients/2.jpg" height="150" width="250"/>
            </div>
            <div className="slide">
                <img src="/images/clients/3.jpg" height="150" width="250"/>
            </div>
            <div className="slide">
                <img src="/images/clients/4.jpg" height="150" width="250"/>
            </div>
            <div className="slide">
                <img src="/images/clients/5.jpg" height="150" width="250"/>
            </div>
            <div className="slide">
                <img src="/images/clients/6.jpg" height="150" width="250"/>
            </div>
            <div className="slide">
                <img src="/images/clients/7.jpg" height="150" width="250"/>
            </div>
            <div className="slide">
                <img src="/images/clients/8.jpg" height="150" width="250"/>
            </div>
            <div className="slide">
                <img src="/images/clients/9.jpg" height="150" width="250"/>
            </div>
            <div className="slide">
                <img src="/images/clients/10.jpg" height="150" width="250"/>
            </div>
            <div className="slide">
                <img src="/images/clients/11.jpg" height="150" width="250"/>
            </div>
            <div className="slide">
                <img src="/images/clients/12.jpg" height="150" width="250"/>
            </div>
            <div className="slide">
                <img src="/images/clients/13.jpg" height="150" width="250"/>
            </div>
            <div className="slide">
                <img src="/images/clients/14.jpg" height="150" width="250"/>
            </div>
            <div className="slide">
                <img src="/images/clients/15.jpg" height="150" width="250"/>
            </div>
            <div className="slide">
                <img src="/images/clients/16.jpg" height="150" width="250"/>
            </div>
            <div className="slide">
                <img src="/images/clients/17.jpg" height="150" width="250"/>
            </div>
            <div className="slide">
                <img src="/images/clients/18.jpg" height="150" width="250"/>
            </div>
            <div className="slide">
                <img src="images/clients/19.jpg" height="150" width="250"/>
            </div>
        </div>
    </div>
</section>

      <div className={`chat-icon ${isOpen ? 'hide-icon' : ''}`} onClick={toggleChat}>
        <FontAwesomeIcon icon={faComments} size="2x" />
      </div>

      {isOpen && (
        <div className="chatbox-container">
          <div className="chatbox-header">
            <h4>Chat Support</h4>
            <button className="close-chat" onClick={toggleChat}>×</button>
          </div>

          <div className="chatbox-content">
            <div className="message-log">
              {step === 1 && (
                <>
                  <p><strong>Apj Cabs:</strong> Hi, how can I help you today?</p>
                </>
              )}
              {step === 2 && selectedOption && (
                <>
                  <p><strong>Apj Cabs:</strong> You selected {selectedOption}. Please choose a car.</p>
                </>
              )}
              {step === 3 && selectedCar && (
                <>
                  <p><strong>Apj Cabs:</strong> You selected {selectedCar}. Please select a date and time.</p>
                </>
              )}
              {step === 4 && selectedDate && (
                <>
                  <p><strong>Apj Cabs:</strong> Please enter your details.</p>
                </>
              )}
            </div>

            {step === 1 && (
              <div className="button-container">
                <button onClick={() => handleOptionClick('Luxury Car')}>Luxury Car</button>
                <button onClick={() => handleOptionClick('5 Seater')}>5 Seater</button>
                <button onClick={() => handleOptionClick('7 Seater')}>7 Seater</button>
                <button onClick={() => handleOptionClick('Bus')}>Bus</button>
                <button onClick={() => handleOptionClick('Yacht')}>Yacht</button>
              </div>
            )}

            {step === 2 && selectedOption && (
              <div className="scrollable-container">
                {getCarList().map((car, index) => (
                  <button key={index} onClick={() => handleCarClick(car)}>
                    {car}
                  </button>
                ))}
              </div>
            )}

            {step === 3 && selectedCar && (
              <div className="date-picker-container">
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  showTimeSelect
                  dateFormat="Pp"
                  className="date-picker"
                />
                <button onClick={handleSendDateClick} className="send-button">
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </div>
            )}

            {step === 4 && selectedDate && (
              <div className="user-info-form">
                <input
                  type="text"
                  name="name"
                  value={userInfo.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                />
                <input
                  type="email"
                  name="email"
                  value={userInfo.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                />
                <input
                  type="text"
                  name="number"
                  value={userInfo.number}
                  onChange={handleInputChange}
                  placeholder="Enter your contact number"
                />
                <button onClick={handleSendUserInfoClick} className="send-button">
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      <Footer/>
      </>
  );
};

export default Clients;
