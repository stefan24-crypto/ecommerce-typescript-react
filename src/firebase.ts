import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCVtoKk4eA7ubHZ7Md0uE182pN0n3P9Qgc",
  authDomain: "ecommerce-react-typescript.firebaseapp.com",
  projectId: "ecommerce-react-typescript",
  storageBucket: "ecommerce-react-typescript.appspot.com",
  messagingSenderId: "1066462752825",
  appId: "1:1066462752825:web:32d0b24e882760442f9de8",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
