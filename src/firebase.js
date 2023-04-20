import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"; // import getStorage method


const firebaseConfig = {
  apiKey: "AIzaSyCzU5-F0EGkVgJhbupm8bFimSZnpujn5ig",
  authDomain: "taawun-cs360.firebaseapp.com",
  projectId: "taawun-cs360",
  storageBucket: "taawun-cs360.appspot.com",
  messagingSenderId: "37380458180",
  appId: "1:37380458180:web:d14c61b2071c02ad4f6b91"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)
export const storage = getStorage(app); // export storage

export default app