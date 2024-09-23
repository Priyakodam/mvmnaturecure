import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import './Services.css';
import Yoga from './Images/yoga.jpg';
import Speech from './Images/Speech2.jpg';
import Hearing from './Images/Hearing.jpg'


const SpeechTherapy = () => {
  return (
    <div>
      {/* Carousel Section */}
      {/* <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={3000}
        showStatus={false}
        showArrows={true}
        className="carousel-container"
      >
        <div>
          <img src={Yoga} alt="Therapy Image 1" />
          <p className="legend">Comprehensive Speech Therapy</p>
        </div>
        <div>
          <img src={Yoga} alt="Therapy Image 2" />
          <p className="legend">Holistic Approach to Healing</p>
        </div>
        <div>
          <img src={Yoga} alt="Therapy Image 3" />
          <p className="legend">Advanced Hearing Solutions</p>
        </div>
      </Carousel> */}

    <div className="speech-therapy-container">
      {/* First Section */}
      <section className="intro-section">
        <h2>Speech Therapy</h2>
        <p>
          At MVM Nature Cure Health Centre, we offer specialized speech therapy services to help individuals improve their speech and 
          communication skills. Our experienced therapists work with patients of all ages to address various speech and language 
          disorders, ensuring a holistic and natural approach to therapy.Speech therapy is crucial for those who struggle with speech
          clarity, articulation, or fluency issues. Whether you're an adult recovering from a stroke, a child with a developmental 
          delay, or an individual with a neurological condition, our therapists are equipped with the skills to help improve 
          communication. We focus on comprehensive evaluations and personalized treatment plans that address each patient’s unique
          needs.Our natural approach includes mindfulness techniques, breathing exercises, and relaxation methods to reduce speech
          anxiety, combined with evidence-based speech exercises that target specific speech problems like stuttering, apraxia, and
          dysarthria.
        </p>
      </section>

      <section className="image-points-section">
        <div className="image-left">
          <img src={Speech} alt="Speech Therapy" />
        </div>
        <div className="points-right">
          <h2>Key Benefits of Our Speech Therapy</h2>
          <ul>
            <li>Improves articulation and pronunciation</li>
            <li>Helps with fluency and stuttering issues</li>
            <li>Supports language development in children</li>
            <li>Tailored programs for individual needs</li>
            <li>Holistic and natural approach</li>
          </ul>
        </div>
      </section>

      {/* Second Section */}
      <section className="additional-content-section">
        <h2>Hearing Therapy</h2>
        <p>
        Our Hearing Therapy services are designed to help individuals who suffer from hearing loss or auditory processing disorders. We 
        use advanced techniques and tools to improve hearing capabilities and overall auditory health.Hearing therapy is critical for
        individuals facing challenges with hearing clarity, recognizing sounds, or dealing with auditory processing disorders. Whether
        the cause is age-related hearing loss, congenital issues, or damage to the auditory system, we provide personalized therapies to
        address specific needs. Through comprehensive assessments and targeted rehabilitation, we aim to improve not only hearing but
        also communication and quality of life.Our programs include training in listening skills, lip-reading, and sound identification
        exercises. For those suffering from tinnitus or sensitivity to noise, we offer specialized therapies to alleviate discomfort
        and help patients regain control over their auditory environment.
        </p>
      </section>

      <section className="points-image-section">
        <div className="points-left">
        <h2>Key Benefits of Our Hearing Therapy</h2>
          <ul>
          <li>Comprehensive hearing assessments</li>
            <li>Tailored auditory rehabilitation programs</li>
            <li>Improves auditory processing skills</li>
            <li>Therapies for hearing loss and tinnitus</li>
            <li>Long-term auditory support and follow-ups</li>
          </ul>
        </div>
        <div className="image-right">
          <img src={Hearing} alt="MVM Nature Cure Health Centre" />
        </div>
      </section>
    </div>
    </div>
  );
};

export default SpeechTherapy;
