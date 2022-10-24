import { initializeApp } from "firebase/app";
import 'firebase/firestore';

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaLkzAWqns9rscPi3eDoV_XoUf-VctttI",
  authDomain: "jumia-7d554.firebaseapp.com",
  projectId: "jumia-7d554",
  storageBucket: "jumia-7d554.appspot.com",
  messagingSenderId: "998283967779",
  appId: "1:998283967779:web:b74d540952fd1f1e9a6096",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
