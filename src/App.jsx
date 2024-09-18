import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Services from "./components/Services/Services.jsx";
import Clients from "./components/Clients/Clients.jsx";
import Gallery from "./components/Gallery/Gallery.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Tariff from "./components/Tariff/Tariff.jsx";
import CarRental from "./components/CarRentals/CarRentals.jsx";
import Corolla from "./components/CarDetails/Corolla/Corolla.jsx"
import AudiA6 from "./components/CarDetails/AudiA6/AudiA6.jsx"
import AudiQ7 from "./components/CarDetails/AudiQ7/AudiQ7.jsx"
import BenzE from "./components/CarDetails/BenzE/BenzE.jsx"
import BenzS from "./components/CarDetails/BenzS/BenzS.jsx"
import Bmw from './components/CarDetails/Bmw/Bmw.jsx';
import Camry from './components/CarDetails/Camry/Camry.jsx';
import Carnival from './components/CarDetails/Carnival/Carnival.jsx';
import CrystaG from './components/CarDetails/CrystaG/CrystaG.jsx';
import CrystaZ from './components/CarDetails/CrystaZ/CrystaZ.jsx';
import Fortuner from './components/CarDetails/Fortuner/Fortuner.jsx';
import Innova from './components/CarDetails/Innova/Innova.jsx';
import JaguarXf from './components/CarDetails/JaguarXf/JaguarXf.jsx';
import JaguarXlj from './components/CarDetails/JaguarXlj/JaguarXlj.jsx';
import RollsRoyce from './components/CarDetails/RollsRoyce/RollsRoyce.jsx';
import Velfire from './components/CarDetails/Velfire/Velfire.jsx';
import Volvo from './components/CarDetails/Volvo/Volvo.jsx';
import Yacht from './components/CarDetails/Yacht/Yacht.jsx';
        

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/tariff" element={<Tariff />} />
        <Route path="/car-rental" element={<CarRental />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/corolla" element={<Corolla />} />
        <Route path="/audia6" element={<AudiA6 />} />
        <Route path='/audiq7' element={<AudiQ7 />} />
        <Route path='/benze' element={<BenzE />} />
        <Route path='/benzs' element={<BenzS />} />
        <Route path='/bmw' element={<Bmw />} />
        <Route path='/camry' element={<Camry />} />
        <Route path='/carnival' element={<Carnival />} />
        <Route path='/crystag' element={<CrystaG />} />
        <Route path='/crystaz' element={<CrystaZ />} />
        <Route path='/fortuner' element={<Fortuner />} />
        <Route path='/innova' element={<Innova />} />
        <Route path='/jaguarxf' element={<JaguarXf />} />
        <Route path='/jaguarxlj' element={<JaguarXlj />} />
        <Route path='/rollsroyce' element={<RollsRoyce />} />
        <Route path='/velfire' element={<Velfire />} />
        <Route path='/volvo' element={<Volvo />} />
        <Route path='/yacht' element={<Yacht />} />

      </Routes>
    </Router>
  );
}

export default App;
