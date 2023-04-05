import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../contexts/AuthContext';
import { db } from '../../firebase';
import { collection, query, where, getDocs } from "firebase/firestore";
import PartenerSideBar from '../../views/PartenerSideBar';

const NgoSignin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const ngoRef = collection(db, "users");
      let q = query(ngoRef, where("email", "==", email), where("role", "==", "NGO"));
      let querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        throw new Error("Firebase: Error (auth/user-not-found).");
      }
      q = query(ngoRef, where("email", "==", email), where("verification", "==", "True"));
      querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        throw new Error("Your profile has not been verified yet.");
      }
      await signIn(email, password);
      setLoading(false);
      navigate('/account');
    } catch (e) {
      setLoading(false);
      setError(e.message);
      console.error(e);
    }
  }; 

return (
  <div className="flex bg-purple-300 h-screen w-screen">
    <PartenerSideBar/>
    <div className="fixed top-10 right-0 bottom-10 left-60 bg-white rounded-2xl flex">
      <div className="w-full flex flex-col justify-center items-center">
          <img src="../components/logo_Final.png" alt="Logo" className="w-40 h-40 mb-2" />
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col py-2'>
              <label htmlFor="email" className='py-2 font-medium'>Email Address</label>
              <input id="email" onChange={(e) => setEmail(e.target.value)} className='border-2 border-gray-800 rounded-md p-3' type='email' />
            </div>
            <div className='flex flex-col py-2'>
              <label htmlFor="password" className='py-2 font-medium'>Password</label>
              <input id="password" onChange={(e) => setPassword(e.target.value)} className='border-2 border-gray-800 rounded-md p-3' type='password' />
            </div>
            <button className='bg-green-500 hover:bg-green-600 text-white rounded-lg py-2 px-8 my-2 w-80' disabled={loading}>
                    {loading ? 'Loading...' : 'Login'}
            </button>
          </form>
          {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
          </div>
          )}

      </div>

      <div className="w-1/3 flex justify-center items-center">
        <img src="../components/signin.png" alt="Signin" className="w-full h-full" />
      </div>
    </div>
  </div>
);
};

export default NgoSignin;
