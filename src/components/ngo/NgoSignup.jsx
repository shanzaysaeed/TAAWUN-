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
  
  
  
    const navigate = useNavigate()
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError('');
      
      // Validate input fields
      let isValid = true;
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
    
      if (!logo) {
        setError('Please select a logo.');
        isValid = false;
      } else {
        setError('');
      }
    
      if (isValid) {
        try {
          setLoading(true)
    
          // add user information to Firestore
          const userRef = collection(db, "users");
          const ngoDocRef = doc(userRef, name); // create a doc reference named after the NGO
          const storageRef = ref(storage, `logos/${name}_${logo.name}`);
          await uploadBytes(storageRef, logo); // upload logo file to Firebase Storage
          const logoURL = await getDownloadURL(storageRef); // get the URL of the uploaded logo
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
    <div className="flex bg-purple-300 h-screen w-screen">
      <PartenerSideBar/>
      <div className="fixed top-10 right-0 bottom-10 left-60 bg-white rounded-2xl flex">
        <div className="w-full flex flex-col justify-center items-center">
            <img src="../components/logo_Final.png" alt="Logo" className="w-40 h-40 mb-2" />
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
            <div className='my-2 w-full'>
                <input
                    onChange={(e) => setName(e.target.value)}
                    className={`border-2 border-gray-800 rounded-md p-3 ${nameError && 'border-red-500'}`}
                    type='text'
                    placeholder='Name'
                    style={{width: '100%'}}
                />
                {nameError && <p className="text-red-500">{nameError}</p>}
            </div>
                <div className='my-2 w-full'>
                    <input
                    onChange={(e) => setEmail(e.target.value)}
                    className= {`border-2 border-gray-800 rounded-md p-3 ${emailError && 'border-red-500'}`}
                    type='email'
                    placeholder='Email'
                    style={{width: '100%'}}
                    />
                    {emailError && <p className="text-red-500">{emailError}</p>}
                </div>
                <div className='my-2 w-full'>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        className={`border-2 border-gray-800 rounded-md p-3 ${passwordError && 'border-red-500'}`}
                        type='password'
                        placeholder='Password'
                        style={{width: '100%'}}
                    />
                    {passwordError && <p className="text-red-500">{passwordError}</p>}
                </div>
                <div className='my-2 w-full'>
                    <input
                        onChange={(e) => setAddress(e.target.value)}
                        className={`border-2 border-gray-800 rounded-md p-3 ${addressError && 'border-red-500'}`}
                        type='text'
                        placeholder='Address'
                        style={{width: '100%'}}
                    />
                    {addressError && <p className="text-red-500">{addressError}</p>}
                </div>
                <div className='my-2 w-full flex'>
                    <div className='w-1/2 mr-2'>
                        <input
                            onChange={(e) => setRegistration(e.target.value)}
                            className={`border-2 border-gray-800 rounded-md p-3 ${registrationError && 'border-red-500'}`}
                            type='number'
                            placeholder='Registration Number'
                        />
                        {registrationError && <p className="text-red-500">{registrationError}</p>}
                    </div>
                    <div className='w-1/2 ml-2'>
                        <input
                            onChange={(e) => setContact(e.target.value)}
                            className={`border-2 border-gray-800 rounded-md p-3 ${contactError && 'border-red-500'}`}
                            type='number'
                            placeholder='Contact Number'
                        />
                        {contactError && <p className="text-red-500">{contactError}</p>}
                    </div>
                </div>
                <div className='my-2 w-full'>
                    <input
                        onChange={(e) => setLogo(e.target.files[0])}
                        className='border-2 border-gray-800 rounded-md p-3'
                        type='file'
                        style={{width: '100%'}}
                    />
                </div>
                <button className='bg-green-500 hover:bg-green-600 text-white rounded-lg py-2 px-8 my-2 w-80' disabled={loading}>
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
