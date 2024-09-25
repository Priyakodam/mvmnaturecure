import React from "react";
import "./Services.css"; // Custom styles for animations and icons

const MainService = () => {
  return (
    <div className="services-section py-5">
      <div className="container text-center">
        <h2 className="section-title mb-5">Our Therapy Services</h2>
        <div className="row">
          <div className="col-lg-6">
            <div className="service-card p-4 shadow-lg animate-slide-in">
              <i className="fas fa-comments service-icon mb-3"></i>
              <h4>Speech Therapy</h4>
              <p>
                Our expert speech therapists provide personalized treatment to
                improve communication skills for individuals of all ages. We
                address speech, language, and swallowing disorders with advanced
                therapeutic techniques.
              </p>
              <a
                href="/speech-therapy"
                className="btn btn-outline-primary mt-3"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="service-card p-4 shadow-lg animate-slide-in">
              <i className="fa-solid fa-ear-listen service-icon mb-3"></i>
              <h4>Hearing Therapy</h4>
              <p>
                Our hearing therapy services are designed to assist individuals
                with hearing impairments, offering expert evaluations and
                personalized rehabilitation programs to improve auditory skills.
              </p>
              <a href="/hear-therapy" className="btn btn-outline-primary mt-3">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainService;
