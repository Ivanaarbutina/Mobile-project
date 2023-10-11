// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHJRMxtn6oijKw_XkpPaA4xqel955eKYo",
  authDomain: "fir-test-c8b7a.firebaseapp.com",
  projectId: "fir-test-c8b7a",
  storageBucket: "fir-test-c8b7a.appspot.com",
  messagingSenderId: "198673030663",
  appId: "1:198673030663:web:fe1e9ad1548c13ab0c54a2",
  measurementId: "G-JP7Z6V7DEF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
