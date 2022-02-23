import React from 'react';
import report from './images/personalized_health_report.png';
import bulletin from './images/organised_health_bulletin.png';
import enhancement from './images/productivity_enhancement.png';
import './Card1.css'

const Card1 = () => {
  return <div className="container" id="card1">
    <section id="Card1">
      <h1 className="my-5">Why choose us?</h1>
      <div className="row g-3">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card text-center" style={{height:'300px'}} >
            <img className="card-img-top mx-auto" src={report} alt="pic1" style={{height:'150px', width:'150px'}} />
            <div className="card-body text" style={{overflow:'auto'}}>
              <h5 className="card-title "><strong>Personalized health reports</strong></h5>
              <p className="card-text">Every employee receives a customized health report</p>
            </div>
          </div>
          </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card text-center" style={{height:'300px'}} >
              <img className="card-img-top mx-auto" src={bulletin} alt="pic2" style={{height:'150px', width:'150px'}} />
              <div className="card-body text" style={{overflow:'auto'}}>
                <h5 className="card-title "><strong>Organization health bulletin</strong></h5>
                <p className="card-text">Get a comprehensive understanding of your organisation</p>
              </div>
            </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
            <div className="card text-center" style={{height:'300px'}}>
              <img className="card-img-top mx-auto" src={enhancement} alt="pic3" style={{height:'150px', width:'150px'}} />
              <div className="card-body text" style={{overflow:'auto'}}>
                <h5 className="card-title "><strong>Productivity enhancement</strong></h5>
                <p className="card-text">Healthy employees translate to enhanced productivity</p>
              </div>
            </div>
        </div>
      </div>

    </section>


  </div>
};

export default Card1;
