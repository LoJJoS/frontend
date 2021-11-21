// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAE6ot-MKUGmMTmDhlCswwwpUbUldlygh8",
  authDomain: "western-hack.firebaseapp.com",
  databaseURL: "https://western-hack-default-rtdb.firebaseio.com",
  projectId: "western-hack",
  storageBucket: "western-hack.appspot.com",
  messagingSenderId: "798881710707",
  appId: "1:798881710707:web:75dd200352878b80b32006",
  measurementId: "G-623KD6C91J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);