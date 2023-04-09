import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"; // import getStorage method


const firebaseConfig = {
  apiKey: "AIzaSyA6J0-YdJ4l322Pw760XWaO9KIUlWju8_0",
  authDomain: "taawun-cb2b3.firebaseapp.com",
  projectId: "taawun-cb2b3",
  storageBucket: "taawun-cb2b3.appspot.com",
  messagingSenderId: "1071796471729",
  appId: "1:1071796471729:web:73228b92b1f3ea984f5f90"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)
export const storage = getStorage(app); // export storage

export default app