import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDUq5N6zRpx1nYr2QbTBbQ_3fuVFh8XSoQ",
  authDomain: "taawun-bcab1.firebaseapp.com",
  projectId: "taawun-bcab1",
  storageBucket: "taawun-bcab1.appspot.com",
  messagingSenderId: "112352397207",
  appId: "1:112352397207:web:fa40fdd9fac532f26c26d2",
  measurementId: "G-PNXN74KVV8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);
export default app;