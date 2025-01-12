// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/about/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import ServicesAll from './pages/services/ServicesAll';
import ServicesAnxiety from './pages/services/ServicesAnxiety';
import ServicesClinicalConsult from './pages/services/ServicesClinicalConsult';
import ServicesIndividualTherapy from './pages/services/ServicesIndividualTherapy';
import ServicesOcd from './pages/services/ServicesOcd';
import ServicesTrauma from './pages/services/ServicesTrauma';
import AboutAngieBlandford from './pages/about/About-angie-blandford';
import AboutAnkaKrivokuca from './pages/about/About-anka-krivokuca';
import AboutDanielleKirshenbaum from './pages/about/About-danielle-kirshenbaum';
import AboutMoonsunJang from './pages/about/About-moonsun-jang';
import AboutRafeyaShami from './pages/about/About-rafeya-shami';
import Resources from './pages/Resources';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/angieblandford" element={<AboutAngieBlandford />} />
        <Route path="/ankakrivokuca" element={<AboutAnkaKrivokuca />} />
        <Route path="/daniellekirshenbaum" element={<AboutDanielleKirshenbaum />} />
        <Route path="/moonsunjang" element={<AboutMoonsunJang />} />
        <Route path="/rafeyashami" element={<AboutRafeyaShami />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/services" element={<ServicesAll />} />
        <Route path="/anxiety" element={<ServicesAnxiety />} />
        <Route path="/consultation" element={<ServicesClinicalConsult />} />
        <Route path="/individualtherapy" element={<ServicesIndividualTherapy />} />
        <Route path="/ocd" element={<ServicesOcd />} />
        <Route path="/trauma" element={<ServicesTrauma />} />
        <Route path="/resources" element={<Resources />} />
        {/* 404 Page */}
        <Route path="*" element={<h1>404: Page Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;