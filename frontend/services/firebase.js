import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAIB9oJJm8f9DVnXybvsU_oTLJq0SiirnE",
  authDomain: "auth12-9eb55.firebaseapp.com",
  projectId: "auth12-9eb55",
  storageBucket: "auth12-9eb55.firebasestorage.app",
  messagingSenderId: "583043601929",
  appId: "1:583043601929:web:df17f6b511c178c0e14ad8",
  measurementId: "G-M56WV6PTMV",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
