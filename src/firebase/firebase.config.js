// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSO9h8ywf9TAYU_T7a39c1ECPshEs_mK8",
  authDomain: "second-concept-firebase-7a58d.firebaseapp.com",
  projectId: "second-concept-firebase-7a58d",
  storageBucket: "second-concept-firebase-7a58d.firebasestorage.app",
  messagingSenderId: "1065715343995",
  appId: "1:1065715343995:web:8370d7127cea5e4f1db8de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth