// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYN7gz8pVDrcdASjdMrFRsFpVyILtowAA",
  authDomain: "fir-authentication-d883f.firebaseapp.com",
  projectId: "fir-authentication-d883f",
  storageBucket: "fir-authentication-d883f.appspot.com",
  messagingSenderId: "913568366352",
  appId: "1:913568366352:web:767fcf6229e2af960faf95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app