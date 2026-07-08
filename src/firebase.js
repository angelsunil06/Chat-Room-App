import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAn0csqXhzYyXmh3bdT9q3M5CCBBd-vhN8",
  authDomain: "react-chat-app-1997a.firebaseapp.com",
  projectId: "react-chat-app-1997a",
  storageBucket: "react-chat-app-1997a.firebasestorage.app",
  messagingSenderId: "117719642368",
  appId: "1:117719642368:web:58e8a045e3378a4c5083e5",
  measurementId: "G-4L2GX5Q5J6"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);