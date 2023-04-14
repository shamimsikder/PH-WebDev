// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArGAs_SbwflCeuKsjHXUXGGxmK80rzHRM",
  authDomain: "simple-firebase-d428a.firebaseapp.com",
  projectId: "simple-firebase-d428a",
  storageBucket: "simple-firebase-d428a.appspot.com",
  messagingSenderId: "179351113639",
  appId: "1:179351113639:web:b5c2025c02a61c206b3082"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app