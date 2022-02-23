import React from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css'

const ContactUs = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2mzrcrh', 'template_p382u3h', e.target, 'user_BQ9UlvMWUI6fI9C72iET6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return <div id="contact">
    <section className="contactus-section">
      <div className="container mx-auto">
      <div className="contact col-12 col-lg-7 mx-auto">
                <h1>Get in touch</h1>
                <form onSubmit={sendEmail} className="form">
                  <div className="container mx-auto">
                     <div className="row">
                       <div className="col-12 col-lg-6 contact-input-field center">
                          <input type="text" id="" className="form-control" placeholder="First Name" name="first_name" />
                       </div>
                       <div className="col-12 col-lg-6 contact-input-field">
                          <input type="text" id="" className="form-control" placeholder="Last Name" name="last_name" />
                       </div>
                     </div>
                     <div className="row">
                       <div className="col-12 col-lg-6 contact-input-field">
                          <input type="text" id="" className="form-control" placeholder="Phone Number" name="phone_number" />
                       </div>
                       <div className="col-12 col-lg-6 contact-input-field">
                          <input type="text" id="" className="form-control" placeholder="Email Id" name="email-id"/>
                       </div>
                       </div>
                       <div className="row">
                         <div className="col-12 contact-input-field">
                           <input type="text" id="" className="form-control" placeholder="Company Name" name="Company_name" />
                         </div>
                       </div>
                       <div className="row">
                         <div className="col-12 contact-input-field">
                           <input type="text" id="" className="form-control" placeholder="Location" name="Location" />
                         </div>
                       </div>
                  </div>
                    <div className="button-grp col-12 mx-auto">
                      <button type="submit" value="Submit" className="btn-style">Submit</button>
                    </div>

                </form>
              </div>
      </div>

    </section>
      
  </div>;
};

export default ContactUs;
