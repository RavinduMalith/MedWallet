import React, { useState, useEffect, Fragment, useContext } from 'react';

import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBTextArea
  }from 'mdb-react-ui-kit';

import DrugDataService from "../Services/crud"
import DrugList from '../AddDrug/DrugList'



const AddDrug = ({ id, setDrugId }) => {

  const[drugname,setDrugname]=useState("");
  const[NDC,setNDC]=useState("");
  const[manufacturer,setManufacturer]=useState("");
  const[exdate,setExdate]=useState("");
  const[description,setDscription]=useState("");
  const[side_effect,setSide_effect]=useState("");
  const[price,setprice]=useState("");
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (drugname === "" || NDC === ""|| manufacturer === ""|| exdate === ""|| description === "" || side_effect === ""|| price==="") {
      alert("All fields are mandatory!")
      return;
    }
    
    const newDrug = {
      drugname,
      NDC,
      manufacturer,
      exdate,
      description,
      side_effect,
      price
    };
    console.log(newDrug);

    try {
      if (id !== undefined && id !== "") {
        await DrugDataService.updateDrug(id, newDrug);
        setDrugId("");
        alert("update successfully!!")
      } else {
        await DrugDataService.addDrugs(newDrug);
        alert("New Drug added successfully!")
      }
    } catch (err) {
      alert(err.message);
    }

    setDrugname("");
    setNDC("");
    setManufacturer("");
    setExdate("");
    setDscription("");
    setSide_effect("");
    setprice("");
  };

  const editHandler = async () => {
    
    try {
      const docSnap = await DrugDataService.getDrug(id);
      console.log("the record is :", docSnap.data());

      setDrugname(docSnap.data().drugname);
      setNDC(docSnap.data().NDC);
      setManufacturer(docSnap.data().manufacturer);
      setExdate(docSnap.data().exdate);
      setDscription(docSnap.data().description);
      setSide_effect(docSnap.data().side_effec);
      setprice(docSnap.data().price);


    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);


  return (
        <MDBContainer fluid className='adddrug'>
    
        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol>
  
            <MDBCard className='my-4'>
  
              <MDBRow className='g-0'>
  
                <MDBCol md='6' className="d-none d-md-block">
                <img src="images/sign1.jpg" class="img-fluid" alt="Sample image" />
                </MDBCol>
  
                <MDBCol md='6'>
  
                  <MDBCardBody className='text-black d-flex flex-column justify-content-center'>
                    <h3 className="mb-5 text-uppercase fw-bold">Add New Drug</h3>
                    
                    
                    <MDBInput wrapperClass='mb-4' label='Drug Name' size='lg' id='ndc' type='text' onChange={(e)=>
                        setDrugname(e.target.value)
                        }/>
                     
  
                    <MDBRow>
                   
  
                      <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4' label='NDC(Natinal Drug Code)' size='lg' id='ndc' type='text' onChange={(e)=>
                        setNDC(e.target.value)
                        }/>
                      </MDBCol>
  
                      <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4' label='Manufacturer' size='lg' id='mf' type='text'onChange={(e)=>
                        setManufacturer(e.target.value)
                        }/>
                      </MDBCol>
  
                    </MDBRow>

              
  
                    <MDBTextArea wrapperClass='mb-4' label='A Brief Description of the Medicine' size='lg' id='dec' type='text' placeholder='Eg - For which patients is this medicine given?
                                Age limit for this medicine.
                                Dosage according to age range.'onChange={(e)=>
                                  setDscription(e.target.value)
                                  }/>
                  
                    <MDBInput wrapperClass='mb-4' label='Side Effect' size='lg' id='pri' type='text'onChange={(e)=>
                        setSide_effect(e.target.value)
                        }/>

                        <MDBInput wrapperClass='mb-4' label='Select Expiration Date' size='lg' id='date' type='date'onChange={(e)=>
                        setExdate(e.target.value)
                        }/>

                        <MDBInput wrapperClass='mb-4' label='Unit Price' size='lg' id='pri' type='text'onChange={(e)=>
                        setprice(e.target.value)
                        }/>
                  
  
                    <div className="d-flex justify-content-end pt-3">
                
                      <MDBBtn color='light' size='lg'input type="reset" href="/uploadcsv">Upload CSV File</MDBBtn>
                     
                      <MDBBtn className='ms-2' color='warning' size='lg' onClick={handleSubmit}>Submit form</MDBBtn>
                      
                    </div>
  
                  </MDBCardBody>
  
                </MDBCol>
              </MDBRow>
              
  
            </MDBCard>
  
          </MDBCol>
          <DrugList/>
        </MDBRow>
  
      </MDBContainer>
);
};

export default AddDrug;
