import React, { useState } from 'react';
import './Clients.css'

const Clients = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [userMessage, setUserMessage] = useState("");
    const [chatMessages, setChatMessages] = useState([]);
    const [stage, setStage] = useState('greeting'); 
  
    const toggleChatbot = () => {
      setIsOpen(!isOpen);
      if (!isOpen) {
        setStage('greeting');
      }
    };
  
    const handleSendMessage = () => {
      if (!userMessage.trim()) return;
  
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { sender: "user", message: userMessage }
      ]);
  
     
      switch (stage) {
        case 'greeting':
          handleGreetingResponse();
          break;
        case 'service':
          handleServiceResponse();
          break;
        case 'carSelection':
          handleCarSelectionResponse();
          break;
        case 'booking':
          handleBookingResponse();
          break;
        case 'contactInfo':
          handleContactInfoResponse();
          break;
        default:
          break;
      }
  
      setUserMessage("");
    };
  
    const handleInputChange = (e) => {
      setUserMessage(e.target.value);
    };
  
    const handleKeyPress = (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSendMessage();
      }
    };
  
    const handleGreetingResponse = () => {
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", message: "Hi There! How can I help you today? Please choose a service: Luxury Car, Bus, Yacht." }
      ]);
      setStage('service');
    };
  
    const handleServiceResponse = () => {
      const service = userMessage.toLowerCase();
      if (service === 'luxury car') {
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", message: "Great! Please select a car model: BMW, Audi, Mercedes." }
        ]);
        setStage('carSelection');
      } else if (service === 'bus') {
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", message: "Bus service is not available yet. Please choose another service." }
        ]);
        setStage('service');
      } else if (service === 'yacht') {
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", message: "Yacht service is not available yet. Please choose another service." }
        ]);
        setStage('service');
      } else {
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", message: "Sorry, I didn't understand. Please choose a valid service: Luxury Car, Bus, Yacht." }
        ]);
      }
    };
  
    const handleCarSelectionResponse = () => {
      const carModel = userMessage.toLowerCase();
      if (['bmw', 'audi', 'mercedes'].includes(carModel)) {
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", message: `You selected ${userMessage}. Please provide the date and time for booking.` }
        ]);
        setStage('booking');
      } else {
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", message: "Sorry, I didn't understand. Please select a valid car model: BMW, Audi, Mercedes." }
        ]);
      }
    };
  
    const handleBookingResponse = () => {
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", message: "Thanks for the details. Please provide your email and mobile number for confirmation." }
      ]);
      setStage('contactInfo');
    };
  
    const handleContactInfoResponse = () => {
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", message: "Thank you for providing your details. Your booking is confirmed. Have a great day!" }
      ]);
      setStage('greeting');
    };

    
    return (
        <>

    <section className="hero-section text-center position-relative">
        <div className="banner-container">
          <div className="banner-image">
            <img src="/images/banner_all.png" alt="Car Banner" className="img-fluid hero-image"/>
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
                <img src="images/19.jpg" height="150" width="250"/>
            </div>
        </div>
    </div>
</section>

 {/* Chatbot Section */}

 <div className="show-chatbot">
        <button className="chatbot-toggler" onClick={toggleChatbot}>
          {isOpen ? (
            <span className="material-symbols-outlined">close</span>
          ) : (
            <span className="material-symbols-outlined">mode_comment</span>
          )}
        </button>

        {isOpen && (
          <div className="chatbot">
            <header>
              <h2>Chat Bot</h2>
              <span
                className="material-symbols-outlined"
                onClick={toggleChatbot}
              >
                close
              </span>
            </header>
            <ul className="chatbox">
              {chatMessages.map((chat, index) => (
                <li
                  key={index}
                  className={`chat ${chat.sender === "bot" ? "incoming" : "outgoing"}`}
                >
                  {chat.sender === "bot" && (
                    <span className="material-symbols-outlined">smart_toy</span>
                  )}
                  <p>{chat.message}</p>
                </li>
              ))}
            </ul>
            <div className="chat-input">
              <textarea
                placeholder="Enter a message..."
                value={userMessage}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
                required
              />
              <span
                id="send-btn"
                className="material-symbols-outlined"
                onClick={handleSendMessage}
              >
                send
              </span>
            </div>
          </div>
        )}
      </div>
 
        </>
    )
};

export default Clients;