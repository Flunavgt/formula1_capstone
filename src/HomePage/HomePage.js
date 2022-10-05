import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <>
    <div>
      <Link to="/Drivers">
        <img src="images/Cars/Helmets.jpeg" alt="hformula 1 hemlets" className="drLinkH" />
      </Link>
      <div className="home2">
        <Link to="/DriverStandings">
          <img src="images/Cars/stats.png" alt="hformula 1 hemlets" className="otherLinkH" />
        </Link>
        <Link to="/Circuits">
          <img src="images/Cars/imola.jpeg" alt="hformula 1 hemlets" className="otherLinkH" />
        </Link>
      </div>
    </div>
    <div className="wapper">
      <img src="images/Cars/ferrari.png" alt="ferrari car" className="car" />
    </div>
  </>

);

export default Home;
