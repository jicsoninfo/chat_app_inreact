import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_KEY,
  // authDomain: "chat-ab746.firebaseapp.com",
  // projectId: "chat-ab746",
  // storageBucket: "chat-ab746.appspot.com",
  // messagingSenderId: "901216368405",
  // appId: "1:901216368405:web:8ec942ee51611df5c49b1c",

  // apiKey: "AIzaSyDm3dEzH3ql9Sc99op9F_TzsLeEftsBszU",
  // authDomain: "hongkongchat-80df0.firebaseapp.com",
  // projectId: "hongkongchat-80df0",
  // storageBucket: "hongkongchat-80df0.appspot.com",
  // messagingSenderId: "949397190604",
  // appId: "1:949397190604:web:ffd7140a135f724b1f0f69",
  // measurementId: "G-VT080SHTJY",


  apiKey: "AIzaSyDNftBTg9EcPsmnZTWcc0VbvCe2V3T12kU",
  authDomain: "chat-firbase-346ea.firebaseapp.com",
  projectId: "chat-firbase-346ea",
  storageBucket: "chat-firbase-346ea.appspot.com",
  messagingSenderId: "384882023621",
  appId: "1:384882023621:web:81de6d61e0d98cb69f64ac"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
