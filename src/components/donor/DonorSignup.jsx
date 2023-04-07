import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, setDoc, doc } from "firebase/firestore";
import { db, storage } from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import PartenerSideBar from '../../views/PartenerSideBar';
import { UserAuth } from '../../contexts/AuthContext';

function DonorSignup() {

  const { createUser} = UserAuth();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [contactNumberError, setContactNumberError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [requiredError, setRequiredError] = useState("")

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validate input fields
    let isValid = true;

    if(!firstName || !lastName || !address || !contactNumber){
      setRequiredError("* Required")
      isValid = false
    }
    else {
      setRequiredError("")
    }

    if (!firstName) {
      setFirstNameError('First name is required');
      isValid = false;
    } else {
      setFirstNameError('');
    }
    if (!lastName) {
      setLastNameError('Last name is required');
      isValid = false;
    } else {
      setLastNameError('');
    }
    if (!address) {
      setAddressError('Address is required');
      isValid = false;
    } else {
      setAddressError('');
    }
    if (!contactNumber) {
      setContactNumberError('Contact number is required');
      isValid = false;
    } else {
      setContactNumberError('');
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

    if (isValid) {
      try {
        setLoading(true)

        // add user information to Firestore
        const userRef = collection(db, "users");
        const donorDocRef = doc(userRef, email); // create a doc reference named after the donor's email
        let profilePictureURL = ""
        
        if (!profilePicture) {
          profilePictureURL = "https://firebasestorage.googleapis.com/v0/b/taawun-cs360.appspot.com/o/profilePictures%2Fgp.png?alt=media&token=35b93b50-b182-441b-92b7-eedfbcc61e90"
        
        } else {
          const storageRef = ref(storage, `profilePictures/${email}_${profilePicture.name}`);
          await uploadBytes(storageRef, profilePicture); // upload profile picture file to Firebase Storage
          profilePictureURL = await getDownloadURL(storageRef); // get the URL of the uploaded profile picture
        }
        
        await setDoc(donorDocRef, {
          firstName,
          lastName,
          address,
          contactNumber,
          email,
          password,
          profilePictureURL,
          role: "Donor"
        });

        await createUser(email, password);

        navigate('/donor_signin')
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
            <div className='my-1 flex'>
              <div className='w-40'>
                  <p className='text-xs font-bold'>First Name</p>
                  <input
                      onChange={(e) => setFirstName(e.target.value)}
                      className={`border-2 border-gray-300 rounded-md p-1 w-full items-left ${firstNameError && 'border-red-500'}`}
                      type='text'
                      placeholder='First Name'
                  />
              </div>
              <div className='w-40 ml-1'>
                  <p className='text-xs font-bold'>Last Name</p>
                  <input
                      onChange={(e) => setLastName(e.target.value)}
                      className={`border-2 border-gray-300 rounded-md p-1 w-full  items-center ${lastNameError && 'border-red-500'}`}
                      type='text'
                      placeholder='Last Name'
                  />
              </div>
            </div>
            <div className='my-1'>
              <p className='text-xs font-bold'>Contact Number</p>
              <input
                onChange={(e) => setContactNumber(e.target.value)}
                className={`border-2 border-gray-300 rounded-md p-1 w-80 items-left ${contactNumberError && 'border-red-500'}`}
                type='tel'
                placeholder='Contact Number'
              />
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

            <div className='my-1'>
              <p className='text-xs font-bold'>Email</p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className={`border-2 border-gray-300 rounded-md p-1 w-80 items-left ${emailError && 'border-red-500'}`}
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
              <p className='text-xs font-bold'>Upload Profile Picture</p>
              <input
                onChange={(e) => setProfilePicture(e.target.files[0])}
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

export default DonorSignup;
