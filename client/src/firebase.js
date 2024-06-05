// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-d1771.firebaseapp.com",
  projectId: "mern-estate-d1771",
  storageBucket: "mern-estate-d1771.appspot.com",
  messagingSenderId: "308596164459",
  appId: "1:308596164459:web:718d5e1b180d5e76542e2e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);