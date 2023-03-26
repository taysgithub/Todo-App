// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc, getDocs, getDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRaDhfwVypZQzhj-EDnWIM4JF35HnHo_M",
  authDomain: "info-5143-todo-app.firebaseapp.com",
  projectId: "info-5143-todo-app",
  storageBucket: "info-5143-todo-app.appspot.com",
  messagingSenderId: "68656387158",
  appId: "1:68656387158:web:425f06adc8e2215e0757f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();