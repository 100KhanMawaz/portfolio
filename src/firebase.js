// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClBeTtGk36dGFOABI2MfvAISCzBQMcF8I",
  authDomain: "mawaz-portfolio.firebaseapp.com",
  projectId: "mawaz-portfolio",
  storageBucket: "mawaz-portfolio.appspot.com",
  messagingSenderId: "67673594848",
  appId: "1:67673594848:web:5daf85b1c4c6db1aa86985"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore();