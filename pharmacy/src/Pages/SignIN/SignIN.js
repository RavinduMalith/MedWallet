import React,{ useState }from 'react'
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import {db} from '../Services/firebaseconfig';
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
import { useNavigate } from 'react-router-dom';
import './sign.css';



function SignIN() {

  
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [pw, setPassword] = useState('');

  const handleLogin = async () => {
    const usersCollection = collection(db, 'Users');

    try {
      const q = query(usersCollection, where('email', '==', email));
      const snapshot = await getDocs(q);
      if (snapshot.empty) {
        alert('User not found');
        return;
      }

      snapshot.forEach((doc) => {
        const user = doc.data();
        if (user.pw === pw) {

          alert('Authentication successful');
          navigate('/Home');
         
        } else {
          alert('Incorrect password');
        }
      });
    } catch (error) {
      alert('Error authenticating user:', error);
    }
  };

  return (
    <div>
       <MDBContainer fluid className="p-3 my-5 h-custom">

<MDBRow>

  <MDBCol col='10' md='6'>
  <img src="images/pic3.jpg" class="img-fluid" alt="Sample image" />
  </MDBCol>

  <MDBCol col='4' md='6'>

    <div className="d-flex flex-row align-items-center justify-content-center">

      <p className="lead fw-normal mb-0 me-3">Follow us</p>

      <MDBBtn floating size='md' tag='a' className='me-2'>
        <MDBIcon fab icon='facebook-f' href="" />
      </MDBBtn>

      <MDBBtn floating size='md' tag='a'  className='me-2'>
        <MDBIcon fab icon='twitter' />
      </MDBBtn>

      <MDBBtn floating size='md' tag='a'  className='me-2'>
        <MDBIcon fab icon='linkedin-in' />
      </MDBBtn>

    </div>

    <div className="divider d-flex align-items-center my-4">
      <p className="text-center fw-bold mx-3 mb-0"></p>
    </div>

    <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" value={email}  onChange={(e) => setEmail(e.target.value)}/>
    <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"value={pw} onChange={(e) => setPassword(e.target.value)} />

    <div className="d-flex justify-content-between mb-4">
      <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
    </div>

    <div className='text-center text-md-start mt-4 pt-2'>
      <MDBBtn className="mb-0 px-5" size='lg' onClick={handleLogin} >Login</MDBBtn>
    
      <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="/register" className="link-danger">Register</a></p>
    </div>

  </MDBCol>
</MDBRow>
</MDBContainer>
    </div>
  )
}
export default SignIN;
