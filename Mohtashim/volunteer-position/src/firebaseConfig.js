import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
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
const analytics = getAnalytics(app);
const db = getFirestore(app);