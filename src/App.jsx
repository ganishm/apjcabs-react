import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Services from './components/Services/Services.jsx'
import Tariff from './components/Tariff/Tariff.jsx'
import Clients from './components/Clients/Clients.jsx'
import Gallery from './components/Gallery/Gallery.jsx'
import Contact from './components/Contact/Contact.jsx'
import CarRentals from './components/CarRentals/CarRentals.jsx';
import AudiA6 from './components/CarDetails/AudiA6/AudiA6.jsx'
import AudiQ7 from './components/CarDetails/AudiQ7/AudiQ7.jsx'
import BenzE from './components/CarDetails/BenzE/BenzE.jsx'
import BenzS from './components/CarDetails/BenzS/BenzS.jsx'
import Bmw from './components/CarDetails/Bmw/Bmw.jsx'
import Carnival from './components/CarDetails/Carnival/Carnival.jsx'
import CrystaG from './components/CarDetails/CrystaG/CrystaG.jsx'
import CrystaZ from './components/CarDetails/CrystaZ/CrystaZ.jsx'
import Fortuner from './components/CarDetails/Fortuner/Fortuner.jsx'
import JaguarXf from './components/CarDetails/JaguarXf/JaguarXf.jsx'
import JaguarXlj from './components/CarDetails/JaguarXlj/JaguarXlj.jsx'
import RollsRoyce from './components/CarDetails/RollsRoyce/RollsRoyce.jsx'
import Camry from './components/CarDetails/Camry/Camry.jsx'
import Corolla from './components/CarDetails/Corolla/Corolla.jsx'
import Innova from './components/CarDetails/Innova/Innova.jsx'
import Velfire from './components/CarDetails/Velfire/Velfire.jsx'
import Volvo from './components/CarDetails/Volvo/Volvo.jsx'
import Yacht from './components/CarDetails/Yacht/Yacht.jsx'

function App() {

  return (
<>
<BrowserRouter>
      {/* <Header /> */}
      {/* <Footer /> */}
      {/* <Home />  */}
      {/* <About /> */}
      {/* <Services/> */}
      {/* <Tariff/> */}
      <Clients />
      {/* <Gallery /> */}
      {/* <Contact /> */}
      {/* <CarRentals/> */}
      {/* <AudiA6/> */}
      {/* <AudiQ7/> */}
      {/* <BenzE/> */}
      {/* <BenzS/> */}
      {/* <Bmw/> */}
      {/* <Carnival/> */}
      {/* <CrystaG/> */}
      {/* <CrystaZ/> */}
      {/* <Fortuner/> */}
      {/* <JaguarXf/> */}
      {/* <JaguarXlj/> */}
      {/* <RollsRoyce/> */}
      {/* <Camry/> */}
      {/* <Corolla/> */}
      {/* <Innova/> */}
      {/* <Velfire/> */}
      {/* <Volvo/> */}
      {/* <Yacht/> */}
    </BrowserRouter>
</>

  )
}

export default App
