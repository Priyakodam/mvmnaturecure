
import React from 'react';
 import './About.css'; 
 import banner from './images/banner.png'
 import aboutm from './images/aboutm.jpg'
 import about_ipad1 from './images/about-ipad1.jpg'
 import about3 from './images/about3.png'
 import about_ipad2 from './images/about-ipad2.jpg'
 import about5 from './images/about5.jpg'
 import about4 from './images/about4.png'
 import doctor_5 from './images/doctor_5.png'
 import doctor_4 from './images/doctor_4.png'
 import doctor_3 from './images/doctor_3.png'
 import doctor_2 from './images/doctor_2.png'
 import doctor_1 from './images/doctor_1.png'

const About = () => {
  return (
    <div>
      {/* Carousel Section */}
      <div className="container-fluid p-0">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={banner} className="d-block w-100" alt="Banner" />
            <div className="carousel-caption d-flex align-items-center justify-content-center">
              <h2>About Us</h2>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Intro Section */}
    <div className="container pt-4" id="text" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <p style={{ fontSize: '20px', marginBottom: '15px' }}>
    <span style={{ backgroundColor: '#bdc3c7', padding: '5px 10px' }}>
      Best Chiropractic Clinic In Bangalore
    </span>
  </p>
  <h2 style={{ marginBottom: '15px' }}>About Us</h2>
  <p style={{ fontSize: '20px', textAlign: 'center', marginBottom: '0' }}>
    Dr. Spine Clinic is India’s first Chiropractic Chain of a Clinic
  </p>
</div>


      {/* About Section with Details and Images */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="container mt-5 mb-5">
              <div className="row justify-content-center">
                <div className="card" style={{ borderRadius: '15px' }}>
                  <div className="card-body">
                    <div className="row">
                      {/* Left Column */}
                      <div className="col-md-6 pt-5" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                        <p style={{ fontSize: '20px' }}>
                          <span style={{ backgroundColor: '#bdc3c7' }}>
                            &nbsp;&nbsp;Dr. Spine Clinic&nbsp;&nbsp;
                          </span>
                        </p>
                        <h2 style={{ fontSize: '35px', color: 'gray' }}>
                          Top Rated Chiropractic Clinic Heal Your Back Pain Without Surgery
                        </h2>
                        <p style={{ fontSize: '20px', textAlign: 'justify' }}>
                          Dr. Spine Clinic is India’s first Chiropractic chain of a clinic that brings a revolutionary
                          technology for treating back pain, neck, and a wide range of ailments through chiropractic
                          spinal adjustment and alternative methods to treat spine-related issues.
                        </p>
                      </div>

                      {/* Right Column */}
                      <div className="col-md-6 pt-4" style={{ borderRadius: '10px', padding: '20px', textAlign: 'end' }}>
                        <img
                          src={aboutm}
                          alt="About Us"
                          className="img-fluid"
                          style={{ maxHeight: '400px', width: '400px' }}
                        />
                        <img
                          src={about_ipad1}
                          alt=""
                          style={{ marginTop: '80px', maxHeight: '800px', width: '400px' }}
                          className="img-fluid ipad-image-class"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Section */}
              <div className="container mt-4 mb-5">
                <div className="row justify-content-center">
                  <div className="card" style={{ borderRadius: '15px' }}>
                    <div className="card-body">
                      <div className="row">
                        {/* Left Column with Image */}
                        <div className="col-md-6 pt-4" style={{ borderRadius: '10px' }}>
                          <img src={about3} alt="" className="img-fluid" id="image1" />
                          <img
                            src={about_ipad1}
                            alt=""
                            style={{ marginTop: '25px' }}
                            className="img-fluid ipad-image-class"
                          />
                          <img
                            src={about_ipad2}
                            alt=""
                            style={{ marginTop: '25px' }}
                            className="img-fluid ipad-image-class"
                          />
                        </div>

                        {/* Right Column with Text */}
                        <div className="col-md-6 mt-2" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                          <h2 style={{ fontSize: '35px', color: 'gray' }}>
                            Treated over 25000 happy patients
                          </h2>
                          <p style={{ fontSize: '20px', textAlign: 'justify' }}>
                            During the past 11 years, Dr.Spine has become a trusted and preferred clinic for patients
                            suffering from spine-related issues. Conditions that Dr.Spine can treat with non-invasive
                            methods are A back pain, Headache / Migraines Neck Pain, Disc Bulge, Slip Disc Disc
                            Herniation, Sciatica, leg pain, Scoliosis, Spondylitis, Postural Deformities Ear infection,
                            Colic High Blood Pressure, PMS, and related issues. You can reach us at our Indira Nagar
                            Clinic or Whitefield Clinic located in Bangalore, India.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Certificate Section */}
                <div className="container mt-3 mb-5">
                  <div className="row justify-content-center">
                    <div className="card" style={{ borderRadius: '15px' }}>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-6 pt-4" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                            <p style={{ fontSize: '20px' }}>
                              <span style={{ backgroundColor: '#bdc3c7' }}>
                                &nbsp;&nbsp;Dr. Spine - Chiropractic India&nbsp;
                              </span>
                            </p>
                            <h2 style={{ fontSize: '35px', color: 'gray' }}>
                              Has been Assessed to meet the Quality In Business standard set by the International Trade
                              Council
                            </h2>
                            <br />
                            <center>
                              <button
                                id="Button1"
                                onClick={() => window.open('about5', '_blank')}
                                style={{ backgroundColor: '#55b6c7', color: 'white', padding: '10px 20px', fontSize: '25px', borderRadius: '30px' }}
                              >
                                <i className="fas fa-certificate"></i> QIB Certificate
                              </button>
                              <br />
                              <br />
                            </center>
                          </div>

                        
                          <div className="col-md-6 pt-8" style={{ borderRadius: '10px' }}>
                            <center>
                              <img
                                src={about4}
                                alt="Image"
                                className="img-fluid custom-image"
                                style={{ height: '300px', width: '300px', alignItems: 'center' }}
                              />
                            </center>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Doctor Cards Section */}
              <div className="container pt-3">
                <div className="row">
                  {/* Doctor 1 */}
                  <div className="col-md-4" style={{ textAlign: 'center' }}>
                    <div className="card m-3">
                      <img src={doctor_5} alt="DocMike" style={{ width: '100%' }} />
                      <h2 className="fs-3">DocMike</h2>
                      <p>Manila’s Wellness Guru and Chiropractor in Makati, Philippines.</p>
                      <a href="" className="a_card">
                        <button className="view-more-button">View More</button>
                      </a>
                    </div>
                  </div>

                  {/* Doctor 2 */}
                  <div className="col-md-4" style={{ textAlign: 'center' }}>
                    <div className="card m-3">
                      <img src={doctor_1} alt="Dr. John Clark" style={{ width: '100%' }} />
                      <h2 className="fs-3">Dr. John Clark</h2>
                      <p>A highly specialized chiropractor with 28 years experience</p>
                      <a href="" className="a_card">
                        <button className="view-more-button">View More</button>
                      </a>
                    </div>
                  </div>

                  {/* Doctor 3 */}
                  <div className="col-md-4" style={{ textAlign: 'center' }}>
                    <div className="card m-3">
                      <img src={doctor_3} alt="Dr. Troy Scheible" style={{ width: '100%' }} />
                      <h2>Dr. Troy Scheible</h2>
                      <p>A highly specialized chiropractor with 28 years experience</p>
                      <a href="" className="a_card">
                        <button className="view-more-button">View More</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Row of Doctor Cards */}
              <div className="container pt-3">
                <div className="row">
                  <div className="col-md-4" style={{ textAlign: 'center' }}>
                    <div className="card m-3">
                      <img src={doctor_2} alt="Dr. Michael Wohlgemuth" style={{ width: '100%' }} />
                      <h2>Dr. Michael Wohlgemuth</h2>
                      <a href="" className="a_card">
                        <button className="view-more-button">View More</button>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-2"></div>
                  <div className="col-md-4" style={{ textAlign: 'center' }}>
                    <div className="card m-3">
                      <img src={doctor_4} alt="Dr. Chetan Upadhyaya" style={{ width: '100%' }} />
                      <h2>Dr. Chetan Upadhyaya</h2>
                      <a href="" className="a_card">
                        <button className="view-more-button">View More</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
