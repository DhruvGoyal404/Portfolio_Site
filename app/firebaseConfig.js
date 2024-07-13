// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmAdNNGMfTo2-v_bTrbqtansOoCqFBgfc",
  authDomain: "dgoyalportfolio.firebaseapp.com",
  projectId: "dgoyalportfolio",
  storageBucket: "dgoyalportfolio.appspot.com",
  messagingSenderId: "830765808668",
  appId: "1:830765808668:web:68bfe2c47c03df2beff3d9",
  measurementId: "G-C6WK5X4BTD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
export default app;