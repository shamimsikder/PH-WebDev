// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNTwYApecQ6eq4EKojjOn041tBLtISpJY",
  authDomain: "the-news-dragon-763a9.firebaseapp.com",
  projectId: "the-news-dragon-763a9",
  storageBucket: "the-news-dragon-763a9.appspot.com",
  messagingSenderId: "1045883050172",
  appId: "1:1045883050172:web:22f3a506e3ff13dec0d8b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app