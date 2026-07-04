import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAI61yLcxc8INO-zNhkrsjbXB6OYnRK0Ig",
  authDomain: "chat-app-3006c.firebaseapp.com",
  projectId: "chat-app-3006c",
  storageBucket: "chat-app-3006c.firebasestorage.app",
  messagingSenderId: "232537781175",
  appId: "1:232537781175:web:4104e6504ab26ea3596e32"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);