import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, setDoc, doc } from "firebase/firestore";
import { db, storage } from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import PartenerSideBar from '../../views/PartenerSideBar';

function NgoSignup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [registration, setRegistration] = useState('');
    const [contact, setContact] = useState('');
    const [logo, setLogo] = useState(null);
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
  
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [nameError, setNameError] = useState('');
    const [addressError, setAddressError] = useState('');
    const [registrationError, setRegistrationError] = useState('');
    const [contactError, setContactError] = useState('');
    const [requiredError, setRequiredError] = useState("")
  
    const navigate = useNavigate()
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError('');
      
      // Validate input fields
      let isValid = true;


      if(!name || !address || !registration || !contact){
        setRequiredError("* Required")
        isValid = false
      }
      else {
        setRequiredError("")
      }

      if (!name) {
        setNameError('NGO name is required');
        isValid = false;
      } else {
        setNameError('');
      }
      if (!email || !/\S+@\S+\.\S+/.test(email)) {
        setEmailError('Invalid email address');
        isValid = false;
      } else {
        setEmailError('');
      }
      if (!password || password.length < 6) {
        setPasswordError('Password must be at least 6 characters');
        isValid = false;
      } else {
        setPasswordError('');
      }
      if (!address) {
        setAddressError('NGO address is required');
        isValid = false;
      } else {
        setAddressError('');
      }
      if (!registration) {
        setRegistrationError('Registration number is required');
        isValid = false;
      } else {
        setRegistrationError('');
      }
      if (!contact) {
        setContactError('Contact number is required');
        isValid = false;
      } else {
        setContactError('');
      }
  
      if (isValid) {
        try {
          setLoading(true)
    
          // add user information to Firestore
          const userRef = collection(db, "users");
          const ngoDocRef = doc(userRef, email); // create a doc reference named after the NGO
          let logoURL = ""
        
          if (!logo) {
            logoURL = "https://firebasestorage.googleapis.com/v0/b/taawun-cs360.appspot.com/o/ngo_logos%2Fgp.png?alt=media&token=4b1691c5-10d1-434a-816d-ac0fd4a1de75"
          
          } else {
            const storageRef = ref(storage, `ngo_logos/${email}_${logo.name}`);
            await uploadBytes(storageRef, logo); // upload profile picture file to Firebase Storage
            logoURL = await getDownloadURL(storageRef); // get the URL of the uploaded profile picture
          }
          await setDoc(ngoDocRef, {
            name,
            email,
            password,
            address,
            logoURL,
            registration,
            contact,
            verification: "False",
            role: "NGO"
          });
    
          navigate('/ngo_signin')
        } catch (e) {
          setError(e.message);
          console.log(error);
        }
    
        setLoading(false)
      }
    };  

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-purple-300">
      <PartenerSideBar/>
      <div className="fixed top-10 right-0 bottom-0 left-60 bg-gray-100 rounded-2xl flex">
        <div className="w-full flex flex-col justify-center items-center">
            <img src="../components/logo_Final.png" alt="Logo" className="w-40 h-40 mt-4" />
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
            <div className='my-1'>
              {requiredError && <p className="text-red-500 ">{requiredError}</p>}
            </div>
            <div >
              <p className='text-xs font-bold'>Full Name</p>
                <input
                    onChange={(e) => setName(e.target.value)}
                    className={`border-2 border-gray-300 rounded-md p-1 w-80 items-left  ${nameError && 'border-red-500'}`}
                    type='text'
                    placeholder='Name'
                />
            </div>
                <div className='my-1'>
                  <p className='text-xs font-bold'>Email Address</p>
                    <input
                    onChange={(e) => setEmail(e.target.value)}
                    className= {`border-2 border-gray-300 rounded-md p-1 w-80 items-left ${emailError && 'border-red-500'}`}
                    type='email'
                    placeholder='Email'
                    />
                    {emailError && <p className="text-red-500">{emailError}</p>}
                </div>
                <div className='my-1'>
                  <p className='text-xs font-bold'>Password</p>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        className={`border-2 border-gray-300 rounded-md p-1 w-80 items-left ${passwordError && 'border-red-500'}`}
                        type='password'
                        placeholder='Password'
                    />
                    {passwordError && <p className="text-red-500">{passwordError}</p>}
                </div>
                <div className='my-1'>
                  <p className='text-xs font-bold'>Address</p>
                    <input
                        onChange={(e) => setAddress(e.target.value)}
                        className={`border-2 border-gray-300 rounded-md p-1 w-80 items-left ${addressError && 'border-red-500'}`}
                        type='text'
                        placeholder='Address'
                    />
                </div>
                <div className='my-1 flex'>
                    <div className='w-40'>
                      <p className='text-xs font-bold'>Registration N.o</p>
                        <input
                            onChange={(e) => setRegistration(e.target.value)}
                            className={`border-2 border-gray-300 rounded-md p-1 w-full items-left ${registrationError && 'border-red-500'}`}
                            type='number'
                            placeholder='Registration Number'
                        />
                    </div>
                    <div className='w-40 ml-1'>
                      <p className='text-xs font-bold'>Contact N.o</p>
                        <input
                            onChange={(e) => setContact(e.target.value)}
                            className={`border-2 border-gray-300 rounded-md p-1 w-full  items-center ${contactError && 'border-red-500'}`}
                            type='number'
                            placeholder='Contact Number'
                        />
                    </div>
                </div>
                <div className='my-1'>
                  <p className='text-xs font-bold'>Upload Logo</p>
                    <input
                        onChange={(e) => setLogo(e.target.files[0])}
                        className='border-2 border-gray-300 rounded-md p-1 w-80 file-input items-center'
                        type='file'
                    />
                </div>
                <button className='bg-green-500 hover:bg-green-600 text-white rounded-2xl py-2 px-8 my-2 w-80' disabled={loading}>
                    {loading ? 'Loading...' : 'Sign Up'}
                </button>
            </form>
        </div>

        <div className="w-1/3 flex justify-center items-center">
          <img src="../components/signup.png" alt="signup" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}

export default NgoSignup;
