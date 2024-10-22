// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDc09wTcOimEwiomupl3f8ZpOLpWtAdcs",
  authDomain: "name-generator-7395d.firebaseapp.com",
  projectId: "name-generator-7395d",
  storageBucket: "name-generator-7395d.appspot.com",
  messagingSenderId: "1010255666016",
  appId: "1:1010255666016:web:8840e47921b6a4539bdc05",
  measurementId: "G-3EZFGH8X8E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);