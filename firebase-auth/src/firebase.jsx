import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjFCAJvXoFP2NelQbe_lfiQW1u3moyNa4",
  authDomain: "fir-authentication-app-f9489.firebaseapp.com",
  projectId: "fir-authentication-app-f9489",
  storageBucket: "fir-authentication-app-f9489.appspot.com",
  messagingSenderId: "1055949070500",
  appId: "1:1055949070500:web:a5e903409cac3de489c631",
  measurementId: "G-74F22NWJ4L",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { auth, app };
