// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBArTmsqvqiLiQ4xwYdNYv6Zi-u-qHHuDA",
  authDomain: "nnovia-tech.firebaseapp.com",
  databaseURL: "https://nnovia-tech-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "nnovia-tech",
  storageBucket: "nnovia-tech.appspot.com",
  messagingSenderId: "284196363429",
  appId: "1:284196363429:web:83fa2f210939f65bccc14c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export {app,auth}
