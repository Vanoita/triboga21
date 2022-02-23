import React from 'react';
import community from './images/community_engagement.png';
import fitness from './images/physical_fitness.png';
import wellbeing from './images/mental_wellness.png';
import continuous from './images/continuous_health_monitoring.png';
import './Card.css'

const Cards = () => {
  return <div id="card">
    <div className="container">
    <section id="Card">
      <h1 className="my-5">What We Do?</h1>
      <div className="row g-3">
        <div className="col-12 col-md-6 col-lg-3">
          <div className="card text-center" style={{height:'385px'}} >
            <img className="card-img-top mx-auto" src={community} alt="pic1" style={{height:'150px', width:'150px'}} />
            <div className="card-body text" style={{overflow:'auto'}}>
              <h5 className="card-title "><strong>Community Engagement</strong></h5>
              <p className="card-text">Enable your employees to engage in fruitful activities.                                                                                                                                          </p>
            </div>
          </div>
          </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="card text-center" style={{height:'385px'}} >
              <img className="card-img-top mx-auto" src={fitness} alt="pic2" style={{height:'150px', width:'150px'}} />
              <div className="card-body text" style={{overflow:'auto'}}>
                <h5 className="card-title "><strong>Physical Fitness</strong></h5>
                <p className="card-text">Being active has been shown to have many health benefits, both physically and mentally. Exercise can increase the production of endorphins, which are known to help produce positive feelings.</p>
              </div>
            </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
            <div className="card text-center" style={{height:'385px'}}>
              <img className="card-img-top mx-auto" src={wellbeing} alt="pic3" style={{height:'150px', width:'150px'}} />
              <div className="card-body text" style={{overflow:'auto'}}>
                <h5 className="card-title "><strong>Mental Wellbeing</strong></h5>
                <p className="card-text">When we are mentally healthy, we enjoy our life and environment, and the people in it. We can be creative, learn, try new things, and take risks. We are better able to cope with difficult times in our personal and professional lives.</p>
              </div>
            </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="card text-center" style={{height:'385px'}} >
            <img className="card-img-top mx-auto" src={continuous} alt="pic1" style={{height:'150px', width:'150px'}} />
            <div className="card-body text" style={{overflow:'auto'}}>
              <h5 className="card-title "><strong>Continuous health monitoring</strong></h5>
              <p className="card-text">Our flagship collaborations bring in facilities to continuously monitor your health. The holistic package provides understanding of your health performance and improvements.</p>
            </div>
          </div>
          </div>
      </div>

    </section>
    </div>


  </div>
};

export default Cards;
