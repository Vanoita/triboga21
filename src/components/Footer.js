import React from 'react';
import {Link} from 'react-scroll'
import './Footer.css'

const Footer = () => {
  return <div className="footer">
    <div className="container">
      <ul>
        <li className="nav-item">
          <Link to="home" spy={true} smooth={true} offset={-100} duration={250} >Home</Link>
        </li>
        <li className="nav-item">
          <Link to="card" spy={true} smooth={true} offset={-100} duration={250}>What we do?</Link>
        </li>
        <li className="nav-item">
          <Link to="card1" spy={true} smooth={true} offset={-100} duration={250}>Why choose us?</Link> 
        </li>
        <li className="nav-item">
          <Link to="contact" spy={true} smooth={true} offset={-100} duration={250}>Contact Us</Link>
        </li>
      </ul>

    </div>
    <div className="bottom">
        <p className="para-bottom">Triboga'21, All rights reserved.</p>
      </div>


      
  </div>;
};

export default Footer;
