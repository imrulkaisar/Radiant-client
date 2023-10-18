// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLSz-rSb2Q9LPkHW0KIGwAUYM9QZSNUik",
  authDomain: "radiant-beauty-shop.firebaseapp.com",
  projectId: "radiant-beauty-shop",
  storageBucket: "radiant-beauty-shop.appspot.com",
  messagingSenderId: "688858187891",
  appId: "1:688858187891:web:c29237aee2fe4fbab68206",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
