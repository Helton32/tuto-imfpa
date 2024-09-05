// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from "firebase/auth" ;
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7DpxcSY3l2xRG3CbI3j2btXATuMhf3Qo",
  authDomain: "tuto-imfpa.firebaseapp.com",
  projectId: "tuto-imfpa",
  storageBucket: "tuto-imfpa.appspot.com",
  messagingSenderId: "1028198754487",
  appId: "1:1028198754487:web:edbeef50bf3f4c6a984532"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentification
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider() ;
export const db = getFirestore(app);
export default app