// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkJjJXTt6MoNGBMnHs2xygaWEN4vxFmPA",
  authDomain: "foodkal-01.firebaseapp.com",
  databaseURL: "https://foodkal-01.firebaseio.com",
  projectId: "foodkal-01",
  storageBucket: "foodkal-01.appspot.com",
  messagingSenderId: "563380131009",
  appId: "1:563380131009:web:c960dfb032d273a8fef040",
  measurementId: "G-8JWZ8XRQMV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);