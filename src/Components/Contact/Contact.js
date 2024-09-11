import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h1> <span>Get in touch</span></h1>
     

        <form>
          <div className="form-group">
            <input type="text" placeholder="Contact name" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Your Subject" />
          </div>

          <div className="form-group">
            <input type="tel" placeholder="Contact Phone" />
          </div>
          <div className="form-group">
            <input type="email" placeholder="E-mail" />
          </div>
          <div className="form-group">
            <textarea placeholder="Message"></textarea>
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
        <div className="contact-info">
  <div><span>📞</span> 7259977110</div>
  <div><span>✉️</span> dr.mahadesh59@gmail.com</div>
  <div><span>📍</span> No.1336/72/2, Behind Trident Hyundai Show Room, Vikas Layput, Palanahalli, Maruthi Nagar, Yelahanka, Bengaluru, Karnataka 560064</div>
</div>
      </div>

    <div className="contact-map">
  <iframe
    title="Google Map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1943.0914084230174!2d77.5772353!3d13.1052759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1bb9bf792ddf%3A0x909d8985a547ee7d!2sMaruthi%20Nagar%2C%20Yelahanka%2C%20Bengaluru%2C%20Karnataka%20560064!5e0!3m2!1sen!2sin!4v16323456789"
    allowFullScreen=""
    loading="lazy"
  ></iframe>
</div>

    </div>
  );
};

export default Contact;
