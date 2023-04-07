import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, query, where, getDocs, updateDoc, doc } from "firebase/firestore";
import { UserAuth } from '../../contexts/AuthContext';
import { db } from '../../firebase';

const Admin = () => {
  const { createUser, logout } = UserAuth();
  const navigate = useNavigate();
  const [NGOS, setNGOS] = useState([]);
  const [error, setError] = useState('')
  

  useEffect(() => {
    const fetchData = async () => {
      const ngoRef = collection(db, "users");
      const q = query(ngoRef, where("verification", "==", "False"));
      const querySnapshot = await getDocs(q);
      let NGOs = [];
      querySnapshot.forEach((doc) => {
        NGOs.push({ id: doc.id, ...doc.data() });
      });
      setNGOS(NGOs);
    };
    fetchData();
  }, []);


  const handleLogout = async () => {
    try {
      await logout();
      navigate('/admin_signin');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };


  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    setError('');
    try {
      // create user with email and password
      // const { user } = await createUser(email, password);
      await createUser(email, password);

      // navigate('/signin')
    } catch (e) {
      setError(e.message);
      console.log(error);
      return;
    }
  };


  const handleVerification = async (e, id, email, password) => {
    handleSubmit(e, email, password)

    const ngoRef = doc(db, "users", id);
    await updateDoc(ngoRef, { verification: "True" });
    // reload the table after verification
    const q = query(collection(db, "users"), where("verification", "==", "False"));
    const querySnapshot = await getDocs(q);
    let NGOs = [];
    querySnapshot.forEach((doc) => {
      NGOs.push({ id: doc.id, ...doc.data() });
    });
    setNGOS(NGOs);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-5">Unverified NGOs</h1>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {NGOS.map((ngo) => (
            <tr key={ngo.id}>
              <td className="border px-4 py-2">{ngo.name}</td>
              <td className="border px-4 py-2">{ngo.email}</td>
              <td className="border px-4 py-2">
                <button
                  // onClick={(e) => handleSubmit(e, ngo.email, ngo.password)}
                  onClick={(e) => handleVerification(e, ngo.id, ngo.email, ngo.password)}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Verify
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleLogout} className='border px-6 py-2 my-4'>
        Logout
      </button>
    </div>
  );
};

export default Admin;
