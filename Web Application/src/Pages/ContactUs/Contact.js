import React from 'react';
import './contact.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <hr size="5" width="100%" color="blue" ></hr>
      <p id='con'>If you have any questions or inquiries, please feel free to reach out to us.</p>
      <div className="contact-details">
        <h2>Contact Information</h2>
        <ul>
          <li>
            <strong>Name:</strong> Ravindu Hapuarachchi
          </li>
          <li>
            <strong>Email:</strong> ravinduhapuarachchi2@gmail.com
          </li>
          <li>
            <strong>Mobile:</strong> +94 762554847
          </li>
        </ul>
      </div>
      <div className="social-media">
        <h2>Connect with Us</h2>
        <ul>
          <li>
            <a href="https://web.facebook.com/ravindu.hapuarachchi.3" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://github.com/RavinduMalith" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ravindu-hapuarachchi-5b398924a/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
         
        </ul>
      </div>
    </div>
  );
};

export default ContactPage;
