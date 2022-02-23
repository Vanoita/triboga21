import React from 'react';
import {Link} from 'react-scroll'
import './Home.css'
import img from './images/hero.jpg'

const Home = () => {
  return <div id="home">
    <section id="header" className="d-flex align-items-center"  >
      <div className="container-fluid nav_bg">
        <div className="row"> 
          <div className="col-10 mx-auto">
            <div div className="row">
            <div className="col-md-6 pt-5 pt-lg-0 order-lg-1 d-flex justify-content-center flex-column"> 
              <h1><strong className="brand-name"><i>T</i>riboga.</strong></h1>
              <h2 className="my-3">Enabling healthier workspaces</h2>
              <div className="mt-3">
              <Link to="contact" spy={true} smooth={true} offset={-100} duration={250} className="btn-get-started">Get Started</Link>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 header-img">
              <img src={img} className="img-fluid animated image" alt="home img" />
            </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  </div>;
};

export default Home;
