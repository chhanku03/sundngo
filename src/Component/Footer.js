import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
     <footer className="footer">
       
        <div className="footer-nav">
          <a href="#about">About Us</a>
          <a href="#projects">Projects</a>
          <a href="#events">Events</a>
          <a href="#volunteer">Volunteer</a>
          <a href="#contact">Contact Us</a>
          <a href="#donate">Donate</a>
        </div>
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </div>
        <div className="footer-address">
          <p>123 NGO Street, City, Country</p>
          <p>Email: info@ourngo.org | Phone: +123 456 7890</p>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2023 Our NGO. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
