import React, { useState } from "react";
import "./HearTherapy.css"; // Import custom CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // FontAwesome for icons
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import img1 from "../Images/hearingassess.jpeg";
import img2 from "../Images/hearing-aid-fitting-steps.avif";
import img3 from "../Images/cochlear-implantdreamstime_m_50302717-e1453757483959.jpg";

const HearTherapy = () => {
  const [activeAccordion, setActiveAccordion] = useState(0); // Set first accordion as active

  const handleToggle = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const therapyDetails = [
    {
      title: "Hearing Loss Assessment",
      content: [
        "Our hearing loss assessment is designed to identify the degree of hearing loss and its impact on daily communication.",
        "We offer a range of tests, including pure tone audiometry and speech discrimination tests to ensure accurate diagnosis.",
      ],
      img: img1, // Replace with actual image URL
    },
    {
      title: "Hearing Aid Fitting",
      content: [
        "We provide expert hearing aid fitting services to ensure you get the right device for your unique hearing needs.",
        "Our team will guide you through the selection process and adjust the settings for optimal performance.",
      ],
      img: img2, // Replace with actual image URL
    },
    {
      title: "Cochlear Implant Support",
      content: [
        "Our cochlear implant support program helps patients adapt to their implants and provides post-surgery rehabilitation.",
        "We offer training sessions and ongoing care to improve hearing outcomes.",
      ],
      img: img3, // Replace with actual image URL
    },
  ];

  return (
    <div className="hear-therapy-page py-5">
      <div className="container-lg">
        <h1 className="text-center mb-4">Hearing Therapy</h1>
        <p className="lead text-center mb-5">
          Our Hearing Therapy services focus on enhancing auditory health and
          improving communication skills for individuals with hearing
          difficulties.
        </p>

        {/* Additional content before accordions */}
        <div className="info-section mb-4">
          <h2 className="text-center mb-4">What is Hearing Therapy?</h2>
          <p>
            Hearing therapy provides specialized care for individuals with
            hearing impairments. We offer a range of services to assess,
            diagnose, and treat hearing loss, using the latest technology and
            personalized care.
          </p>
        </div>

        <div className="row">
          <div className="col-md-6">
            {therapyDetails.map((therapy, index) => (
              <div className="accordion-item" key={index}>
                <div
                  className={`accordion-header ${
                    activeAccordion === index ? "active" : ""
                  }`}
                >
                  <button
                    className="accordion-button d-flex justify-content-between align-items-center"
                    onClick={() => handleToggle(index)}
                    aria-expanded={activeAccordion === index}
                  >
                    {therapy.title}
                    <FontAwesomeIcon
                      icon={
                        activeAccordion === index ? faChevronUp : faChevronDown
                      }
                      className="accordion-icon"
                    />
                  </button>
                </div>
                <div
                  className={`accordion-body ${
                    activeAccordion === index ? "show" : ""
                  }`}
                  style={{
                    display: activeAccordion === index ? "block" : "none",
                  }}
                >
                  {therapy.content.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                  <a href="/contact" className="btn btn-primary mt-2">
                    Reach Us
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Right side image */}
          <div className="col-md-6">
            <img
              src={
                therapyDetails[activeAccordion === null ? 0 : activeAccordion]
                  ?.img
              }
              alt={
                therapyDetails[activeAccordion === null ? 0 : activeAccordion]
                  ?.title
              }
              className="img-fluid rounded shadow-lg"
              style={{ width: "100%" }}
            />
          </div>
        </div>

        {/* Additional content after accordions */}
        <div className="extra-content mt-5">
          <h2 className="text-center mb-4">Benefits of Hearing Therapy</h2>
          <ul className="list-group mb-4">
            <li className="list-group-item">Improves hearing clarity</li>
            <li className="list-group-item">Enhances communication skills</li>
            <li className="list-group-item">
              Boosts confidence in social situations
            </li>
            <li className="list-group-item">
              Provides access to the latest hearing technology
            </li>
          </ul>

          <h2 className="text-center mb-4">Who Can Benefit?</h2>
          <p className="text-center mb-4">
            Hearing therapy can benefit individuals with hearing loss, those
            adapting to hearing aids, and patients with cochlear implants. Our
            team provides expert care and support to help you regain your
            hearing ability and improve your quality of life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HearTherapy;
