import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB4B8r82RzooKtj5MmIZPw6wjFG_hnETPw",
  authDomain: "e-comerce-code.firebaseapp.com",
  projectId: "e-comerce-code",
  storageBucket: "e-comerce-code.appspot.com",
  messagingSenderId: "345818510156",
  appId: "1:345818510156:web:d6c8649d6c94ae466dd5e9"
};


const app = initializeApp(firebaseConfig);
export const bd = getFirestore(app)