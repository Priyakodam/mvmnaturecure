import React, { useState } from "react";
import "./SpeechTherapy.css"; // Import custom CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // FontAwesome for icons
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const SpeechTherapy = () => {
  const [activeAccordion, setActiveAccordion] = useState(0); // Set first accordion as active

  const handleToggle = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const therapyDetails = [
    {
      title: "Articulation Therapy",
      content: [
        "Articulation therapy helps individuals improve their speech clarity and pronunciation. It involves structured activities and exercises to address specific speech sound errors.",
        "Common techniques include minimal pairs, phonetic placement, and auditory discrimination.",
      ],
      img: "https://via.placeholder.com/400x300?text=Articulation+Therapy",
    },
    {
      title: "Language Therapy",
      content: [
        "Language therapy focuses on enhancing understanding and use of language. Activities improve vocabulary, sentence structure, and comprehension.",
        "Tailored programs address specific language development needs.",
      ],
      img: "https://via.placeholder.com/400x300?text=Language+Therapy",
    },
    {
      title: "Fluency Therapy",
      content: [
        "Fluency therapy is designed for individuals who stutter or struggle with speech flow. Techniques focus on reducing anxiety and improving rhythm.",
        "Controlled fluency techniques and desensitization are common strategies.",
      ],
      img: "https://via.placeholder.com/400x300?text=Fluency+Therapy",
    },
  ];

  return (
    <div className="speech-therapy-page py-5">
      <div className="container-lg">
        <h1 className="text-center mb-4">Speech Therapy</h1>
        <p className="lead text-center mb-5">
          At MVM Nature Cure Health Centre, we offer specialized speech therapy
          services to help individuals improve their speech and communication
          skills. Our experienced therapists work with patients of all ages to
          address various speech and language disorders, ensuring a holistic and
          natural approach to therapy.Speech therapy is crucial for those who
          struggle with speech clarity, articulation, or fluency issues. Whether
          you're an adult recovering from a stroke, a child with a developmental
          delay, or an individual with a neurological condition, our therapists
          are equipped with the skills to help improve communication. We focus
          on comprehensive evaluations and personalized treatment plans that
          address each patients unique needs.Our natural approach includes
          mindfulness techniques, breathing exercises, and relaxation methods to
          reduce speech anxiety, combined with evidence-based speech exercises
          that target specific speech problems like stuttering, apraxia, and
          dysarthria.
        </p>

        {/* Additional content before accordions */}
        <div className="info-section mb-4">
          <h2 className="text-center mb-4">What is Speech Therapy?</h2>
          <p>
            Speech therapy is vital for individuals with communication
            difficulties, including speech, language, or stuttering problems.
            Our expert therapists use evidence-based techniques to address these
            challenges effectively.
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
          <h2 className="text-center mb-4">Benefits of Speech Therapy</h2>
          <ul className="list-group mb-4">
            <li className="list-group-item">Improves speech clarity</li>
            <li className="list-group-item">
              Enhances vocabulary and language
            </li>
            <li className="list-group-item">Builds communication confidence</li>
            <li className="list-group-item">
              Supports social interaction skills
            </li>
          </ul>

          <h2 className="text-center mb-4">Who Can Benefit?</h2>
          <p className="text-center mb-4">
            Speech therapy can benefit children, adults recovering from stroke,
            or anyone facing communication challenges. Our caring therapists are
            here to guide you on your path to effective communication.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpeechTherapy;
