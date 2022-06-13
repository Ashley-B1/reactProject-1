import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-page">
      <div className="contact-intro">
        <h1>Contact</h1>
        <p>"Call me!"</p>
        <p>- Jane</p>
      </div>

      <div className="contact-sect">
        <div className="contact-left">
          <div className="contact-msg">
            <h2>Reaching out to me</h2>
            <p>
              Don't be afraid to contact me! I'm happy to answer any questions,
              provide more information, or just have a nice conversation! Fill
              out the form below to being reaching out to me. If you prefer
              another email client other than your default, which will appear
              after clicking the button and have all of the information you just
              entered, you can email me at XXXXX.
            </p>
          </div>
          <div className="contact-info">
            <h2>Contact Information</h2>
            <div className="contact-details">
              <p>linkedin.com/jane-doe</p>
              <p>facebook.com/jane-doe</p>
              <p>(999)874-9909</p>
              <p>janedoe@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <form>
            <div className="name-input">
              <div>
                <h4 className="input-name">First Name *</h4>
                <input className="slim" placeholder="First Name" />
              </div>
              <div>
                <h4 className="input-name">Last Name *</h4>
                <input className="slim" placeholder="Last Name" />
              </div>
            </div>
            <h4 className="input-name">Email *</h4>
            <input className="slim long email-in" placeholder="Email" />
            <h4 className="input-name">Message *</h4>
            <textarea className="long thick" placeholder="Message" />
          </form>
          <a className="form-btn proj-btn" href="#">
            Submit
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
