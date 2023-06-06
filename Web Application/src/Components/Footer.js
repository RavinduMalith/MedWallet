import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';

import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';


export default function Footer() {
    return (
        <MDBFooter style={{ backgroundColor: '#c4d9fc' }} className='text-center text-lg-start text-muted'>
          <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
            <div className='me-5 d-none d-lg-block'>
            </div>
    
          </section>
    
          <section className=''>
            <MDBContainer className='text-center text-md-start mt-5'>
              <MDBRow className='mt-3'>
                <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>
                    <MDBIcon icon="gem" className="me-3" />
                    MedWallet
                  </h6>
                  <p>
                  All Rights Reserved 2023
                  </p>
                </MDBCol>
    
                <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                  <p>
                    <a href='/home' className='text-reset'>
                      Home
                    </a>
                  </p>
                  <p>
                    <a href='/newdrug' className='text-reset'>
                      New Drugs
                    </a>
                  </p>
                  <p>
                    <a href='/about' className='text-reset'>
                      About
                    </a>
                  </p>
                  <p>
                    <a href='/contact' className='text-reset'>
                      Contact Us
                    </a>
                  </p>
                </MDBCol>
    
              
    
                <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                  <p>
                  <MDBIcon fas icon="home"className="me-2" />
                    Hettikanda road, Horana, Srilanka
                  </p>
                  <p>
                    <MDBIcon icon="envelope" className="me-3" />
                    Ravinduhapuarachchi2@gmail.com
                  </p>
                  <p>
                    <MDBIcon icon="phone" className="me-3" /> +94 762554847
                  </p>
                  
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>
    
        
        </MDBFooter>
      );
    }
