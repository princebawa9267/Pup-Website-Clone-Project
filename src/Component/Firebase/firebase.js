// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJC6ykLItmuhfK7-cvijSUpEutQsUrn1w",
  authDomain: "pup-project-001.firebaseapp.com",
  projectId: "pup-project-001",
  storageBucket: "pup-project-001.appspot.com",
  messagingSenderId: "102019879561",
  appId: "1:102019879561:web:813dc166b57ba974e5ec58",
  databaseURL: "https://pup-project-001-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;