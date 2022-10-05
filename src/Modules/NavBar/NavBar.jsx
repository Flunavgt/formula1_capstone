import React from 'react';
import { NavLink } from 'react-router-dom';
import './navBar.css';

const NavBar = () => (
  <div className="navs">
    <NavLink to="/" className="home">&#x3c;</NavLink>
    <div className="NavBar">
      <h1> Formula 1</h1>
    </div>
    <div className="Links">
      <NavLink to="/Drivers" className="driversl">Drivers</NavLink>
      <NavLink to="/Circuits" className="circuits">Circuits</NavLink>
      <NavLink to="/DriverStandings" className="dstandings">Driver Standings</NavLink>
    </div>
  </div>
);

export default NavBar;
