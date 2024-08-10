// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEbDU-F22HU_F6mMYL9A9HdsMk8nWaTGE",
  authDomain: "login-a1722.firebaseapp.com",
  projectId: "login-a1722",
  storageBucket: "login-a1722.appspot.com",
  messagingSenderId: "22057156845",
  appId: "1:22057156845:web:f6cc935ee2e2aeef8e8ce4",
  measurementId: "G-0H8XPSEN2D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const db= getFirestore(app)
export{db,auth}
