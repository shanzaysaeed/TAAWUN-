import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDTul4PL_SAH_JbwpN6EJsDkG7DWiF7YtU",
  authDomain: "taawuun-433d7.firebaseapp.com",
  projectId: "taawuun-433d7",
  storageBucket: "taawuun-433d7.appspot.com",
  messagingSenderId: "147537707962",
  appId: "1:147537707962:web:5a85b55b2c6db24ad85383"
};

const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);