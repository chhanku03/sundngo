import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.svg';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
         <div>Sundra Foundation</div>
      </div>
      <nav className="nav">
        <input type="checkbox" id="nav-check" />
        <label htmlFor="nav-check" className="nav-toggler" onClick={handleToggle}>
          <span></span>
          <span></span>
          <span></span>
        </label>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li>
            <NavLink to='/' className={
              ({ isActive }) => isActive ? ' active' : 'nav-link'
            }>
              Home

            </NavLink>
          
          </li>

          <li><a href="#about">About</a></li>
          <li><a href="#services">Event</a></li>
          <li><a href="volunteer">Volunteer</a></li>
          <li>
             <NavLink to='/blog' 
              className={
                ({ isActive }) => isActive ? 'active' : 'nav-link'

              }
             >
                Blog
             </NavLink>
          </li>
          <li><a href="#contact">Contact</a></li>
          <li><button className="donate-btn">Donate</button></li>
          <li><button className="admin-btn">Admin</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
