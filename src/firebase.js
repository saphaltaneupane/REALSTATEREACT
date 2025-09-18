// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBtMJsXFhTzyZQBqFKCgkP018rteCB12RI",
  authDomain: "realestate-5ccf8.firebaseapp.com",
  projectId: "realestate-5ccf8",
  storageBucket: "realestate-5ccf8.appspot.com", // ✅ fixed
  messagingSenderId: "1050366297892",
  appId: "1:1050366297892:web:82e33c595ca7a88d27d5b1",
  measurementId: "G-FBFRL047WC"
};


const app = initializeApp(firebaseConfig);

// ✅ Export Auth + Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);





