// Import the functions you need from the SDKs you need
<<<<<<< HEAD
import { initializeApp } from 'firebase/app';
=======
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
>>>>>>> ea707298b4b6a1a95e40bcc28127fb4bbda096bc
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
<<<<<<< HEAD
=======
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
>>>>>>> ea707298b4b6a1a95e40bcc28127fb4bbda096bc
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
<<<<<<< HEAD
=======
const analytics = getAnalytics(app);
>>>>>>> ea707298b4b6a1a95e40bcc28127fb4bbda096bc
