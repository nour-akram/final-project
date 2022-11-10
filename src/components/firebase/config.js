
// // Import the functions you need from the SDKs you need
// //import { initializeApp } from "firebase/app";
// import firebase from 'firebase/app'
// import getFirestore from'firebase/firestore'
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBaLkzAWqns9rscPi3eDoV_XoUf-VctttI",
//   authDomain: "jumia-7d554.firebaseapp.com",
//   projectId: "jumia-7d554",
//   storageBucket: "jumia-7d554.appspot.com",
//   messagingSenderId: "998283967779",
//   appId: "1:998283967779:web:b74d540952fd1f1e9a6096",
// };

// // Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
// const firestore = app.firestore();
// export {app, firestore};





// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth , GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaLkzAWqns9rscPi3eDoV_XoUf-VctttI",
  authDomain: "jumia-7d554.firebaseapp.com",
  projectId: "jumia-7d554",
  storageBucket: "jumia-7d554.appspot.com",
  messagingSenderId: "998283967779",
  appId: "1:998283967779:web:b74d540952fd1f1e9a6096"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
