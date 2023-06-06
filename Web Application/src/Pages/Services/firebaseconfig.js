// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw8RKB8QxBQCSJeDmb0I9B-eGhiB-99U8",
  authDomain: "text-recognition-app-6eb6f.firebaseapp.com",
  databaseURL: "https://text-recognition-app-6eb6f-default-rtdb.firebaseio.com",
  projectId: "text-recognition-app-6eb6f",
  storageBucket: "text-recognition-app-6eb6f.appspot.com",
  messagingSenderId: "1059463777721",
  appId: "1:1059463777721:web:179dbf8dae21561e4d3a68",
  measurementId: "G-TXY8SLX8XH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);