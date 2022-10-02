import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <div className="navs">
    <div className="NavBar">
      <h1> Formula 1</h1>
    </div>
    <div className="Links">
      <NavLink to="/" className="home">My Home</NavLink>
      <NavLink to="/Drivers" className="drivers">Drivers</NavLink>
      <NavLink to="/Circuits" className="circuits">Circuits</NavLink>
    </div>
  </div>
);

export default NavBar;