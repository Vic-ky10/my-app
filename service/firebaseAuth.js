// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOr2wHR960R0Z2jm2Vu3VZZeLRDkaTuxo",
  authDomain: "react-native-auth-demo-e40b0.firebaseapp.com",
  projectId: "react-native-auth-demo-e40b0",
  storageBucket: "react-native-auth-demo-e40b0.firebasestorage.app",
  messagingSenderId: "577270414900",
  appId: "1:577270414900:web:72d452de3533a847199461"
};
let auth;

// Initialize Firebase
const app = initializeApp(firebaseConfig);

auth = initializeAuth(app)


export default auth;


// 