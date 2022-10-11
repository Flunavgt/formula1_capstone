import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <>
    <div className="pictureContainer">
      <Link to="/Drivers">
        <div className="topImage">
          <img src="images/Cars/Helmets.jpeg" alt="hformula 1 hemlets" className="drLinkH" />
          <h1 className="driverTitle">Drivers</h1>
        </div>
      </Link>
      <div className="home2">
        <Link style={{ textDecoration: 'none' }} to="/DriverStandings">
          <img src="images/Cars/stats.png" alt="hformula 1 hemlets" className="otherLinkH" />
          <h1 className="standTitle">Standings</h1>
        </Link>
        <div className="home3">
          <Link style={{ textDecoration: 'none' }} to="/Circuits">
            <img src="images/Cars/imola.jpeg" alt="hformula 1 hemlets" className="otherLinkH" />
            <h1 className="circuitTitle">Circuits</h1>
          </Link>
        </div>
      </div>
    </div>
    <div className="wapper">
      <img src="images/Cars/ferrari.png" alt="ferrari car" className="car" />
    </div>
  </>

);

export default Home;
