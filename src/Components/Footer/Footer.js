import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../Images/clinic-logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHome, faEnvelope, faPhone, faPrint } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

export default function App() {
  return (
    <MDBFooter color='white' className='text-center text-lg-start  footer'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href='' className='me-4 text-reset'>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          {/* <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a> */}
          <a href='' className='me-4 text-reset'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          {/* <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a> */}
          <a href='' className='me-4 text-reset'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              {/* <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                Company name
              </h6> */}
              <img src={logo} style={{ width: "150px", height: "150px", marginBottom: "10px" }} />
              <p>
                Acupuncture is a technique that involves inserting very fine needles into your skin at certain locations on your body. Acupuncture, which is a crucial component of traditional Chinese medicine, is most typically used to relieve pain
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Services</h6>
              <p>
                <a href='#!' className='text-reset'>
                  hydrotherapy
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  massage-therapy
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  yoga-therapy
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  acupuncture
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  About Us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Our Doctors
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Contact Us
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <FontAwesomeIcon icon={faHome} className='me-2' color='secondary' />
                No.1336/72/2, Behind Trident Hyundai Show Room, Vikas Layput, Palanahalli, Maruthi Nagar, Yelahanka, Bengaluru, Karnataka 560064
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} className='me-3' color='secondary' />
                dr.mahadesh59@gmail.com
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} className='me-3' color='secondary' />
                Dr. Mahadeshwaraswamy S: +91 7259977110
              </p>
              <p>
                <FontAwesomeIcon icon={faPrint} className='me-3' color='secondary' />
                Dr. Nandini C S: +91 9449658968
              </p>
            </MDBCol>

          </MDBRow>
        </MDBContainer>
      </section>
      <hr className="my-3" style={{ borderWidth: "3px", borderColor: "white" }} />
      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold' href='https://mvmnaturecure.in/'>
          mvmnaturecure.in
        </a>
      </div>
    </MDBFooter>
  );
}