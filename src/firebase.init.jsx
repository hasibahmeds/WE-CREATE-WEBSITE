// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvx0DpEZDCi4xRj7FniD1inzeksvTMZBo",
  authDomain: "hasibreactjs.firebaseapp.com",
  projectId: "hasibreactjs",
  storageBucket: "hasibreactjs.firebasestorage.app",
  messagingSenderId: "736288921560",
  appId: "1:736288921560:web:38bc5e8e40b1165d0984ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;