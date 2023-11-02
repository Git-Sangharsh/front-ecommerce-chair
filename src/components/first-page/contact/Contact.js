import React from 'react'
import './Contact.css'
const Contact = ({ normalContactRef }) => {
  return (
    <div className="contact" ref={normalContactRef}>
      <div className="contact-wrapper">
        <h1>Contact Us</h1>
        <div className="google-map">
          <iframe
            title="google-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60271.48365386486!2d73.08894969810592!3d19.240238180126948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be796f457b1b76f%3A0x35df463ca445bd26!2sKalyan%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1698871231409!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact