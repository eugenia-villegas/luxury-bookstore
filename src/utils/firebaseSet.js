// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVk7fYfI9bFRXrA9bo4-t9V1BAjCJ-krk",
  authDomain: "luxurystore-e2b5d.firebaseapp.com",
  projectId: "luxurystore-e2b5d",
  storageBucket: "luxurystore-e2b5d.appspot.com",
  messagingSenderId: "24712052696",
  appId: "1:24712052696:web:a6fcce571c34ece1653cad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();


export default db;