

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewai-de347.firebaseapp.com",
  projectId: "interviewai-de347",
  storageBucket: "interviewai-de347.firebasestorage.app",
  messagingSenderId: "996368813829",
  appId: "1:996368813829:web:14936c33049135d261b16c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)

const provider=new GoogleAuthProvider()

export {auth,provider}

