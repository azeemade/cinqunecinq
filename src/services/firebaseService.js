// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIyNl9x91cRGpkPLcNhTbKA0vL_GSK5KQ",
  authDomain: "cinqunecinq.firebaseapp.com",
  projectId: "cinqunecinq",
  storageBucket: "cinqunecinq.appspot.com",
  messagingSenderId: "968163291889",
  appId: "1:968163291889:web:bf1ffb00cc1bdac503af50",
  measurementId: "G-XXFEB9F3TQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firestore = getFirestore(app);
