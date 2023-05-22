// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjkhbSuwzg-MBF2hUPtBEEVk0EMGTtlhU",
  authDomain: "car-doctor-client-da164.firebaseapp.com",
  projectId: "car-doctor-client-da164",
  storageBucket: "car-doctor-client-da164.appspot.com",
  messagingSenderId: "1078219716908",
  appId: "1:1078219716908:web:6d38922a84b4b84aa21489"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;