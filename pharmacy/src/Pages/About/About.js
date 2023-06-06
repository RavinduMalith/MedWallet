import React from 'react';
import './about.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      
      <h1>About MedWallect</h1>
      <hr size="5" width="100%" color="blue" ></hr>
      <br/>
      <img src="images/logo12.png" id='bgimg'/>
      <p id="text">
        MedWallect is a comprehensive pharmacy management system designed to simplify the process of managing and tracking medicines available in a pharmacy. Our goal is to provide a user-friendly solution that helps pharmacists streamline their operations and ensure accurate inventory management.
      </p>
      <p id="text">
        With MedWallect, you can easily add, update, and remove medicines from your inventory. The intuitive interface allows you to search for medicines, view their details, and manage stock levels effortlessly. The system also provides features for generating reports, tracking sales, and monitoring expiration dates to ensure optimal medication management.
      </p>
      <p id="text">
        Our team is dedicated to continuously enhancing Health Box to meet the evolving needs of pharmacies. We strive to deliver a reliable, secure, and efficient solution that empowers pharmacists to provide quality healthcare services to their customers.
      </p>
      <p id="text">  
        Thank you for choosing MedWallect. We are committed to supporting your pharmacy operations and contributing to your success. If you have any questions or feedback, please don't hesitate to reach out to our support team.
      </p>
    </div>
    
  );
};

export default AboutPage;
