// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_P-2rga2JAwmgQ0z92CL4Q17utAzZs7A",
  authDomain: "react-blog-sanx.firebaseapp.com",
  projectId: "react-blog-sanx",
  storageBucket: "react-blog-sanx.appspot.com",
  messagingSenderId: "987022755380",
  appId: "1:987022755380:web:1cf29640f88e6a4e2bec61",
  measurementId: "G-X75E4C0Q45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;