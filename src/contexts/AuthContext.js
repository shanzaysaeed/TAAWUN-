import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth, db } from '../firebase';
import {  collection, query, where, getDocs  } from "firebase/firestore";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : { role: "" };
  });

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
    
    const ngoRef = collection(db, 'users');
    const q = query(ngoRef, where('email', '==', email));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      const userData = doc.data();
      setUser({ ...userData, role: userData.role });
      localStorage.setItem("user", JSON.stringify({ ...userData, role: userData.role }));
    }
  };
  
  const logout = () => {
    localStorage.removeItem("user");
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      console.log(currentUser);
      if (currentUser) {
        const ngoRef = collection(db, 'users');
        const q = query(ngoRef, where('email', '==', currentUser.email));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0];
          const userData = doc.data();
          localStorage.setItem('user', JSON.stringify({ ...userData, role: userData.role }));
          setUser({ ...userData, role: userData.role });
        }
      } else {
        localStorage.removeItem('user');
        setUser(null);
      }
    });
    const localUser = JSON.parse(localStorage.getItem('user'));
    if (localUser) {
      setUser(localUser);
    }
    return () => {
      unsubscribe();
    };
  }, []);
  

  return (
    <UserContext.Provider value={{ createUser, user, logout, signIn }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
