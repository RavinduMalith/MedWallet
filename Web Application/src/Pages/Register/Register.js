import React, { useState } from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
  import {
    doc,
    onSnapshot,
    updateDoc,
    setDoc,
    deleteDoc,
    collection,
    serverTimestamp,
    getDocs,
    query,
    where,
    orderBy,
    limit,
  } from 'firebase/firestore';
import './register.css'
import {db} from '../Services/firebaseconfig';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';



function AddNewUser() {
  const collectionRef = collection(db, 'Users');
  const [fname, setfName] = useState('');
  const [lname, setlName] = useState('');
  const [no, setNic] = useState('');
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [confpw, setConfw] = useState('');
  const [phname, setLicence] = useState('');
  const [license, setPhname] = useState('');
  const [pnum, setPnum] = useState('');
  const [phemail, setPhemail] = useState('');
  const [address, setAddress] = useState('');
  const [time, setTime] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const navigate = useNavigate();

  async function addUser() {
    if (
      fname === '' ||
      lname === '' ||
      no === '' ||
      email === '' ||
      pw === '' ||
      confpw === '' ||
      phname === '' ||
      license === '' ||
      pnum === '' ||
      phemail === '' ||
      address === '' ||
      time === ''
    ) {
      alert('Please fill in all the fields.');
      return;
    }

    if (!acceptTerms) {
      alert('Please accept the Terms and Conditions.');
      return;
    }

    if (pw !== confpw) {
      alert('Passwords do not match.');
      return;
    }
    

    const newUser = {
      fname,
      lname,
      no,
      email,
      pw,
      confpw,
      phname,
      license,
      pnum,
      phemail,
      address,
      time,
      id: uuidv4(),
    };

    try {
      const userRef = doc(collectionRef, newUser.id);
      await setDoc(userRef, newUser);
      alert('You’re Registration Successfully.');
      navigate('/SignIN');



    } catch (error) {
      console.error(error);
      alert('Failed to add data.');
    }
  }
  
  
    return (
        <MDBContainer fluid className='h-custom'>
    
          <MDBRow className='d-flex justify-content-center align-items-center h-100'>
            <MDBCol col='12' className='m-5'>
    
              <MDBCard className='card-registration card-registration-2' style={{borderRadius: '15px'}}>
    
                <MDBCardBody className='p-0'>
    
                  <MDBRow>
    
                    <MDBCol md='6' className='p-5 bg-white'>
    
                      <h3 className="fw-normal mb-5" style={{color: '#4835d4'}}>General Infomation</h3>
                      
    
                      <MDBRow>
    
                        <MDBCol md='6'>
                          <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='firstName' type='text' onChange={(e)=>
                          setfName(e.target.value)
                          }/>
                        </MDBCol>
    
                        <MDBCol md='6'>
                          <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='lastName' type='text' onChange={(e)=>
                          setlName(e.target.value)
                          }/>
                        </MDBCol>
    
                      </MDBRow>
    
                      
                      <MDBInput wrapperClass='mb-4' label='NIC Number' size='lg' id='nicnumber' type='text'onChange={(e)=>
                          setNic(e.target.value)
                          }/>
                      <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='email' type='text'onChange={(e)=>
                          setEmail(e.target.value)
                          }/>
    
                      <MDBRow>
    
                        <MDBCol md='6'>
                          <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='password' type='password'onChange={(e)=>
                          setPw(e.target.value)
                          }/>
                          <MDBInput wrapperClass='mb-4' label='Confirm Password' size='lg' id='confpw' type='password'onChange={(e)=>
                          setConfw(e.target.value)
                          }/>
                          
                        </MDBCol>
    
                      
    
                      </MDBRow>
    
                    </MDBCol>
    
    
                    <MDBCol md='6' className='bg-indigo p-5'>
    
                      <h3 className="fw-normal mb-5 text-white" style={{color: '#4835d4'}}>Phyrmacy Infomation </h3>
                      <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Phyrmacy Name' size='lg' id='pharmacyName' type='text'onChange={(e)=>
                          setPhname(e.target.value)
                          }/>
                      <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Phymacy Licence Number' size='lg' id='licence' type='text'onChange={(e)=>
                          setLicence(e.target.value)
                          }/>
    
                      <MDBRow>
    
                        <MDBCol md='5'>
                          <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Phone Number' size='lg' id='pharmacyNumber' type='text'onChange={(e)=>
                          setPnum(e.target.value)
                          }/>
                        </MDBCol>
    
                        <MDBCol md='7'>
                          <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Phymacy Email' size='lg' id='pharmacyEmail' type='text'onChange={(e)=>
                          setPhemail(e.target.value)
                          }/>
                        </MDBCol>
    
                      </MDBRow>
    
                      <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Address' size='lg' id='address' type='text'onChange={(e)=>
                          setAddress(e.target.value)
                          }/>
    
                      <MDBRow>
    
                        <MDBCol md='5'>
                          <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Opening Time' size='lg' id='time' type='time'onChange={(e)=>
                          setTime(e.target.value)
                          }/>
                        </MDBCol>
    
                  
                      </MDBRow>
    
                      
                      <MDBCheckbox name='flexCheck' id='flexCheckDefault' labelClass='text-white mb-4' label='I do accept the Terms and Conditions of your site.' onChange={() => setAcceptTerms(!acceptTerms)} />
                      <MDBBtn color='light' size='lg' onClick={() => addUser()}>Register</MDBBtn>
    
                    </MDBCol>
                  </MDBRow>
    
                </MDBCardBody>
    
              </MDBCard>
    
            </MDBCol>
          </MDBRow>
    
        </MDBContainer>
      );
                        }
  
                        export default AddNewUser; 
