import React from 'react';
import Carousel from 'react-bootstrap/Carousel'; // Import Carousel from react-bootstrap
import './Home.css';
import healthimg from './images/helathbanimg3.png'
import healthimg1 from './images/helathbanimg2.png'
import msimg1 from './images/msimg1.jpg'
import msimg2 from './images/msimg2.jpg'
import healthimg2 from './images/healthbanimg5.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faCalendarCheck, faVideo, faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
  return (
    <div>
      {/* Carousel Section */}
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={healthimg}
              alt="First slide"
              style={{ width: '100%',height:'400px' }}
            />
            <Carousel.Caption>
              <div className="main-text">
                <span className="line1">Our Holistic Healing Philosophy</span>
              </div>
              <div className="sub-text">
                <span className="subline1">We treat the whole person, not just the symptoms.</span>
                <span className="subline2">At [MVM Nature Health Care Center], we believe in healing the natural way.</span>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={healthimg1}
              alt="Second slide"
              style={{ width: '100%',height:'400px' }}
            />
            <Carousel.Caption>
              <div className="main-text">
                <span className="line1">Holistic Approach to Well-being</span>
              </div>
              <div className="sub-text">
                <span className="subline1">Embrace a natural way to live and heal.</span>
                <span className="subline2">Join us on a journey to a healthier life.</span>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={healthimg2}
              alt="Third slide"
              style={{ width: '100%',height:'400px' }}
            />
            <Carousel.Caption>
              <div className="main-text">
                <span className="line1">Natural Healing Techniques</span>
              </div>
              <div className="sub-text">
                <span className="subline1">Restoring balance, mind, body, and spirit.</span>
                <span className="subline2">Discover the power of nature's remedies.</span>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

         {/* Cards Section */}
         <div className="cards-container">
        <div className="card">
          <div className="icon">
            <FontAwesomeIcon icon={faPhoneAlt} size="1.5x" />
          </div>
          <h4 className='headingcardhome'>Enquire Now</h4>
        </div>

        <div className="card">
          <div className="icon">
            <FontAwesomeIcon icon={faCalendarCheck} size="1.5x" />
          </div>
          <h4 className='headingcardhome'>Book Appointment</h4>
        </div>

        <div className="card">
          <div className="icon">
            <FontAwesomeIcon icon={faVideo} size="1.5x" />
          </div>
          <h4 className='headingcardhome'>Video Consultation</h4>
        </div>

        <div className="card">
          <div className="icon">
            <FontAwesomeIcon icon={faFileInvoiceDollar} size="1.5x" />
          </div>
          <h4 className='headingcardhome'>Treatment Prices</h4>
        </div>
      </div>

      <div className='serviceheading'>Services</div>
      <div className="carousel-container">
      <Carousel>
        {/* First Container - Massage Therapy */}
        <Carousel.Item>
          <div className="carousel-item-container">
            <div className="image-container">
              <img
                src={msimg1}
                alt="Massage Therapy"
                className="responsive-image"
              />
            </div>
            <div className="text-container">
              <h1 className="therapyheading">Massage Therapy</h1>
              <p>
                Massage therapy has a lengthy history in various cultures. People
                nowadays use a range of massage therapies for a number of
                health-related reasons. The word "massage therapy" refers to a variety
                of approaches. The muscles and other soft tissues of the body are
                pressed, rubbed, and otherwise manipulated by therapists. They
                utilize their hands and fingers the most, although they can also use
                their forearms, elbows, and feet.
              </p>
              <button className="product-button">View More</button>
            </div>
          </div>
        </Carousel.Item>

        {/* Second Container - Acupuncture */}
        <Carousel.Item>
          <div className="carousel-item-container">
            <div className="image-container">
              <img
                src={msimg2}
                alt="Acupuncture"
                className="responsive-image"
              />
            </div>
            <div className="text-container">
              <h1 className="acupunctureheading">Acupuncture</h1>
              <p>
                Acupuncture is a technique that involves inserting very fine needles
                into your skin at certain locations on your body. Acupuncture, which
                is a crucial component of traditional Chinese medicine, is most
                typically used to relieve pain. It's increasingly being utilized for
                overall well-being, including stress reduction.
              </p>
              <button className="product-button">View More</button>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
      
    </div>
  );
};

export default Home;
