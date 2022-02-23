import React, {useState} from 'react';
import {Link} from 'react-scroll'
import {FaBars,FaTimes} from 'react-icons/fa'
import logo from './images/logo.jpg'
import './Navbar.css'

const Navbar = () => {
   const [click, setClick] = useState(false)
   const handleClick = () => setClick(!click)
  return (
  <div className='header'>
      <nav className='navbar'>
          <Link to="home" spy={true} smooth={true} offset={-100} duration={500} className='logo'>
              <img src={logo} alt='logo' />
          </Link>
          <div className="hamburger" onClick ={handleClick}>
          {click ? (<FaTimes size={30} style={{ color: '#000' }} />)
                        : (<FaBars size={30} style={{ color: '#000' }} />)}
          </div>
          <ul className={click ? "nav-menu active": "nav-menu"}>
              <li className='nav-item'>
                    <Link to="home" spy={true} smooth={true} offset={-100} duration={250} >Home</Link>
              </li>  
              <li className='nav-item'>
                    <Link to="card" spy={true} smooth={true} offset={-100} duration={250}>What we do?</Link>
              </li> 
              <li className='nav-item'>
                    <Link to="card1" spy={true} smooth={true} offset={-100} duration={250}>Why choose us?</Link>
              </li> 
              <li className='nav-item'>
                    <Link to="contact" spy={true} smooth={true} offset={-100} duration={250}>Contact Us</Link>
              </li>         
            </ul>
      </nav>
  </div>
  )
};

export default Navbar;
