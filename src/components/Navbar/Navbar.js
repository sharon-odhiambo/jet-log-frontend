import React from 'react';
import '../../styles/navbar.css';
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';

const Navbar = () => (
  <div className="homeNav">
    <div className="navlinks">
      <MobileNavigation />
      <Navigation />
    </div>
  </div>
);

export default Navbar;
