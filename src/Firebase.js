// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbG0gPSbrOxbs3MFYJEcCS0SvA-6wdEgk",
  authDomain: "realtime-chat-9e00d.firebaseapp.com",
  projectId: "realtime-chat-9e00d",
  storageBucket: "realtime-chat-9e00d.appspot.com",
  messagingSenderId: "86485170963",
  appId: "1:86485170963:web:78a42a2c22c3934d8938e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);