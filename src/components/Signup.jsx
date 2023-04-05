import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { collection, setDoc, doc } from "firebase/firestore";
import { db, storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Signup = () => {
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
  
        navigate('/signin')
      } catch (e) {
        setError(e.message);
        console.log(error);
      }
  
      setLoading(false)
    }
  };  

  return (
    <div className='max-w-[700px] mx-auto my-16 p-4'>
      <div>
        <h1 className='text-2xl font-bold py-2'>Sign up for a free account</h1>
        <p className='py-2'>
          Already have an account yet?{' '}
          <Link to='/' className='underline'>
            Sign in.
          </Link>
        </p>
      </div>
      <form onSubmit={handleSubmit}>

      <div className='flex flex-col py-2'>
        <label className='py-2 font-medium'>NGO Name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          className={`border p-3 ${nameError && 'border-red-500'}`}
          type='text'
        />
        {nameError && <p className="text-red-500">{nameError}</p>}
      </div>
      <div className='flex flex-col py-2'>
        <label className='py-2 font-medium'>Email Address</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          className= {`border p-3 ${emailError && 'border-red-500'}`}
          type='email'
        />
        {emailError && <p className="text-red-500">{emailError}</p>}
      </div>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className={`border p-3 ${passwordError && 'border-red-500'}`}
            type='password'
          />
          {passwordError && <p className="text-red-500">{passwordError}</p>}
        </div>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>NGO Address</label>
          <input
            onChange={(e) => setAddress(e.target.value)}
            className={`border p-3 ${addressError && 'border-red-500'}`}
            type='text'
            />
          {addressError && <p className="text-red-500">{addressError}</p>}
        </div>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>Registration Number</label>
          <input
            onChange={(e) => setRegistration(e.target.value)}
            className={`border p-3 ${registrationError && 'border-red-500'}`}
            type='number'
            />
          {registrationError && <p className="text-red-500">{registrationError}</p>}
        </div>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>Contact Number</label>
          <input
            onChange={(e) => setContact(e.target.value)}
            className={`border p-3 ${contactError && 'border-red-500'}`}
            type='number'
            />
          {contactError && <p className="text-red-500">{contactError}</p>}
        </div>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>NGO Logo</label>
          <input
            onChange={(e) => setLogo(e.target.files[0])}
            className='border p-3'
            type='file'
          />
        </div>
        <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white' disabled={loading}>
        {loading ? 'Loading...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default Signup;
