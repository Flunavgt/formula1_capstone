import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Modules/NavBar/NavBar';
import Home from './Modules/HomePage';
import './App.css';
import Drivers from './Modules/Drivers/Drivers';
import Circuits from './Modules/Circuits/Circuits';
import DriverStandings from './Modules/DriverStandings/DriverStandings';

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Drivers" element={<Drivers />} />
      <Route path="/Circuits" element={<Circuits />} />
      <Route path="/DriverStandings" element={<DriverStandings />} />
    </Routes>
  </BrowserRouter>
);

export default App;
