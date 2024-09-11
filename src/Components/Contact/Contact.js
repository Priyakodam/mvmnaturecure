import React from 'react';
import './Contact.css';
import bgimg from './images/mvm-banner.jpg';

// FontAwesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Banner Section */}
      <div className="banner">
        {/* <img src={bannerImage} alt="Contact Banner" className="banner-image" /> */}
        <div className="banner-text">
          <h1>Contact Us</h1>
        </div>
      </div>

      {/* Contact Card Section */}
      <div className="contact-content">
        {/* Left Side - Contact Details */}
        <div className="contact-card">
          <h2>Reach Us</h2>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
            No.1336/72/2, Behind Trident Hyundai Show Room, Vikas Layput, Palanahalli, Maruthi Nagar, Yelahanka, Bengaluru, Karnataka 560064
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <strong>Phone:</strong> +91 7259977110
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <strong>Email:</strong> <a href="mailto:dr.mahadesh59@gmail.com">dr.mahadesh59@gmail.com</a>
          </p>

            {/* Embedded Google Map */}
            <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31087.5826947307!2d77.58327392676484!3d13.10832895722945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbefb887bf9e88f%3A0x5c8f761d80c99329!2sYelahanka%2C%20Bengaluru%2C%20Karnataka%20560064!5e0!3m2!1sen!2sin!4v1694084392742!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map Location"
            ></iframe>
          </div>
        </div>

        {/* Right Side - Form Section */}
        <div className="contact-form">
          <h2> Get In Touch
          </h2>
          <form>
            {/* Name and Email in one row */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Your Email" required />
              </div>
            </div>

            {/* Phone and Subject in one row */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" required />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="Subject" required />
              </div>
            </div>

            {/* Message and Submit Button in one row */}
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Contact;
