import React from 'react';
import './home.css' 
import {
  MDBBtn,
 
}from 'mdb-react-ui-kit';


const HomePage = () => {
  return (

    
    <div className="home-page">
      <div className="background-image">
        
        <img src="images/pic4.jpg" alt="Background" />
      </div>
      <div className="content">
      <img src="images/logo12.png" alt="Logo" className="logo" />
        <h1>Welcome to MedWallet</h1>
        
        <p id="medicine-text">Enter the medicines available in the pharmacy.</p>
        
        <MDBBtn color='light' size='lg'input type="reset" href="/newdrug">Add Drugs</MDBBtn>
        
      </div>
      
    </div>
  );
};

export default HomePage;
