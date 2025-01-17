import React from "react";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
       
        <div className="footer-section">
          <h3 className="footer-title">Furnish</h3>
          <p className="footer-text">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
          <div className="social-icons">
            <a href="#" className="social-link"><FaTwitter /></a>
            <a href="#" className="social-link"><FaFacebookF /></a>
            <a href="#" className="social-link"><FaInstagram /></a>
          </div>
        </div>

       
        <div className="footer-section">
          <h3 className="footer-title">Services</h3>
          <ul className="footer-list">
            <li>→ Amazing Deals</li>
            <li>→ Quality Furniture</li>
            <li>→ Modern Design</li>
            <li>→ Best Support</li>
          </ul>
        </div>

       
        <div className="footer-section">
          <h3 className="footer-title">Recent Posts</h3>
          <div className="post">
            <span className="post-date">📅 Mar. 05, 2021</span>
            <p className="post-text">Shop the Look Cottage Country Living Room</p>
          </div>
          <div className="post">
            <span className="post-date">📅 Mar. 05, 2021</span>
            <p className="post-text">Shop the Look Cottage Country Living Room</p>
          </div>
        </div>

      
        <div className="footer-section">
          <h3 className="footer-title">Have a Question?</h3>
          <p className="contact-info">
            <FaMapMarkerAlt className="contact-icon" /> 203 Fake St. Mountain View, San Francisco, California, USA
          </p>
          <p className="contact-info">
            <FaPhoneAlt className="contact-icon" /> +2 392 3929 210
          </p>
          <p className="contact-info">
            <FaEnvelope className="contact-icon" /> info@yourdomain.com
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
