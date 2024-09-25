import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About2.css"; // Custom styles for extra animations
import natural from "../Images/naturalcare.jpg";

const About2 = () => {
  return (
    <div className="about-section py-5">
      {/* Hero Section */}
      <div className="hero-section text-center bg-light p-5">
        <div className="container">
          <h1 className="display-4 mb-4">Welcome to MVM Nature Cure</h1>
          <p className="lead">
            Experience natural healing with our dedicated team of specialists
            who believe in holistic health and well-being.
          </p>
        </div>
      </div>

      {/* About Us Section */}
      <div className="about-content py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                src={natural}
                alt="Nature Cure Center"
                className="img-fluid rounded shadow-lg animate-fade-in-left"
              />
            </div>
            <div className="col-lg-6 text-left">
              <h2 className="section-title mb-4">About MVM Nature Cure</h2>
              <p className="lead">
                At MVM Nature Cure, we focus on enhancing your body's natural
                ability to heal itself through time-tested natural treatments
                and modern practices. Our team is dedicated to providing
                personalized, holistic health care in a peaceful environment.
              </p>
              <p className="lead">
                Whether you're seeking relief from chronic ailments or looking
                for preventive wellness, our therapies and treatments cater to
                your individual needs.
              </p>
              <a href="/services" className="btn btn-primary mt-4">
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Treatment Focus Section */}
      <div className="treatment-focus-section bgcont text-white py-5">
        <div className="container text-center">
          <h2 className="section-title mb-5 text-warning">
            Our Key Focus Areas
          </h2>
          <div className="row">
            <div className="col-md-4">
              <div className="focus-card p-3 shadow-lg animate-zoom">
                <img
                  src="https://images.pexels.com/photos/3759651/pexels-photo-3759651.jpeg"
                  alt="Naturopathy Treatments"
                  className="img-fluid mb-3"
                  style={{ height: "200px", objectFit: "cover", width: "100%" }}
                />
                <h4>Naturopathy Treatments</h4>
                <p>
                  Our holistic treatments involve natural therapies that help
                  your body heal and rejuvenate.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="focus-card p-3 shadow-lg animate-zoom">
                <img
                  src="https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg"
                  alt="Detox Programs"
                  className="img-fluid mb-3"
                  style={{ height: "200px", objectFit: "cover", width: "100%" }}
                />
                <h4>Detox Programs</h4>
                <p>
                  Cleanse your body with our expertly guided detox programs for
                  optimal health and vitality.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="focus-card p-3 shadow-lg animate-zoom">
                <img
                  src="https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg"
                  alt="Stress Management"
                  className="img-fluid mb-3"
                  style={{ height: "200px", objectFit: "cover", width: "100%" }}
                />
                <h4>Stress Management</h4>
                <p>
                  Our therapies help alleviate stress and restore your body's
                  natural balance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section py-5 bg-light">
        <div className="container text-center">
          <h2 className="section-title mb-5">What Our Clients Say</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="testimonial-box p-4 shadow-lg animate-fade-in-right">
                <p>
                  "MVM Nature Cure changed my life! The detox program was
                  transformative, and I feel healthier and more energized than
                  ever before."
                </p>
                <h5 className="mt-3">- John Doe</h5>
              </div>
            </div>
            <div className="col-md-6">
              <div className="testimonial-box p-4 shadow-lg animate-fade-in-left">
                <p>
                  "Their stress management therapies have been a blessing. I
                  feel calm, focused, and much more balanced in my everyday
                  life."
                </p>
                <h5 className="mt-3">- Jane Smith</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="contact-us-section py-5">
        <div className="container-lg text-center">
          <h2 className="section-title mb-5">Get in Touch</h2>
          <a href="/contact" className="btn btn-success btn-lg">
            Contact Us Today
          </a>
        </div>
      </div>
    </div>
  );
};

export default About2;
