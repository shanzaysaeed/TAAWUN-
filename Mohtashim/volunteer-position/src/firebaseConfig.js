import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyCn1LSaEmPjYu-Sldexzd1rIznZUCElADw",
  authDomain: "createvolunteer.firebaseapp.com",
  projectId: "createvolunteer",
  storageBucket: "createvolunteer.appspot.com",
  messagingSenderId: "236255079590",
  appId: "1:236255079590:web:84395f267b4fdc68f91867",
  measurementId: "G-H3TB8JJY09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app);
export const analytics = getAnalytics(app);


