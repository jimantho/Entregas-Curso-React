// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

import { getFirestore } from "firebase/firestore"
/* const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
}; */
const firebaseConfig = {
  apiKey: "AIzaSyDIpTxyTZqr9-2_C8WVVsIey1b9s6dmoFI",
  authDomain: "react-43635-90bfa.firebaseapp.com",
  projectId: "react-43635-90bfa",
  storageBucket: "react-43635-90bfa.appspot.com",
  messagingSenderId: "996492818988",
  appId: "1:996492818988:web:a3e6005ce7f42d419caf89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)