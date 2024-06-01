// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7dJ98sfwTYPng8Dj4Puig80wFZwMspjo",
  authDomain: "recording-b31f3.firebaseapp.com",
  projectId: "recording-b31f3",
  storageBucket: "recording-b31f3.appspot.com",
  messagingSenderId: "890540693047",
  appId: "1:890540693047:web:e1969c106c1f61122911b2",
  measurementId: "G-H9QLZTL0C5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const analytics = getAnalytics(app);

// Suggested code may be subject to a license. Learn more: ~LicenseLog:4023833197.
export default app;
export {db, analytics };