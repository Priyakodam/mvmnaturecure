import React from "react";
import './Services.css'; 
import Yoga from './Images/yoga.jpg'
import Acupuncture from './Images/acupuncture.jpg';
import Ayurvedic from './Images/Ayurvedic.jpg';
import Chiropractic from './Images/Chiropractic.jpg';
import Dietrics from './Images/Dietrics.jpg';
import Massage from './Images/Massage.jpg';
import Physiotherapy from './Images/Physiotherapy.jpg';
import Hydrotherapy from './Images/Hydrotherapy.jpg';

const Services = () => {
  const servicesData = [
    {
      title: "Hydrotherapy",
      description: "Hydrotherapy is a component of naturopathy treatment. In this water is used to treat a person and to provide relief from pain. It is also known as the water cure because of the use of water in the method. Hot and cold showers, sauna baths, water-waves massage tubs, steam baths, foot baths, contrast therapy, and other therapies are included in this therapy.",
      image: Hydrotherapy,
    },
    {
      title: "Massage Therapy",
      description: "Massage therapy has a lengthy history in various cultures. People nowadays use a range of massage therapies for a number of health-related reasons. The word massage therapy refers to a variety of approaches.  The muscles and other soft tissues of the body are pressed, rubbed, and otherwise manipulated by therapists. They utilize their hands and fingers the most, although they can also use their forearms, elbows, and feet..",
      image: Massage,
    },
    {
      title: "Yoga Therapy",
      description: "Yoga therapy is a sort of treatment that focuses on improving mental and physical health using yoga postures, breathing exercises, meditation, and guided imagery. Yoga therapy's holistic approach supports the integration of mind, body, and spirit. Modern yoga therapy incorporates components of both physical therapy and psychotherapy into a wide spectrum of therapeutic methods.",
      image: Yoga,
    },
    {
      title: "Acupuncture",
      description: "Acupuncture is a technique that involves inserting very fine needles into your skin at certain locations on your body. Acupuncture, which is a crucial component of traditional Chinese medicine, is most typically used to relieve pain. It's increasingly being utilized for overall well-being, including stress reduction.",
      image: Acupuncture,
    },
    {
      title: "Dietrics",
      description: "According to a number of scientific studies, the food we eat has a substantial impact on our health. Dietary changes can help prevent or control a variety of health problems, including obesity, diabetes, and some cancer and heart disease risk factors.",
      image: Dietrics,
    },
    {
      title: "Chiropractic",
      description: "Hands-on spinal manipulation and other alternative treatments are used by chiropractors. According to the theory, appropriate alignment of the body's musculoskeletal structure, especially the spine, will allow the body to repair itself without the need for surgery or medicine. ",
      image: Chiropractic,
    },
    {
      title: "Physiotherapy",
      description: "When someone is affected by an injury, sickness, or handicap, physiotherapy can help them regain movement and function. Physiotherapy is a science-based profession that approaches health and wellness from a whole person perspective, which encompasses the patient's overall lifestyle.",
      image: Physiotherapy,
    },
    {
      title: "Ayurvedic Consultations and Panchakarma",
      description: "Your Ayurvedic journey begins with an initial consultation to determine the fundamental cause of your illness, ailment, or imbalance. A complete questionnaire, physical examination, tongue diagnostic, pulse diagnosis, and other procedures are included in the initial consultation.",
      image: Ayurvedic,
    },
  ];

  return (
    <div className="services-container">
      <h2>Our Services</h2>
      <div className="services-list">
        {servicesData.map((service, index) => (
          <div key={index} className={`service-item ${index % 2 === 0 ? 'image-left' : 'image-right'}`}>
            <img src={service.image} alt={service.title} className="service-image" />
            <div className="service-text">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="view-more-button">VIEW MORE</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
