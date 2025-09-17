// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBtMJsXFhTzyZQBqFKCgkP018rteCB12RI",
  authDomain: "realestate-5ccf8.firebaseapp.com",
  projectId: "realestate-5ccf8",
  storageBucket: "realestate-5ccf8.appspot.com",
  messagingSenderId: "1050366297892",
  appId: "1:1050366297892:web:82e33c595ca7a88d27d5b1",
  measurementId: "G-FBFRL047WC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Correct: pass `app` into getAuth
export const auth = getAuth(app);









// from here





// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBtMJsXFhTzyZQBqFKCgkP018rteCB12RI",
//   authDomain: "realestate-5ccf8.firebaseapp.com",
//   projectId: "realestate-5ccf8",
//   storageBucket: "realestate-5ccf8.firebasestorage.app",
//   messagingSenderId: "1050366297892",
//   appId: "1:1050366297892:web:82e33c595ca7a88d27d5b1",
//   measurementId: "G-FBFRL047WC"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);