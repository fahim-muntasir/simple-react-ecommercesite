// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbxIYhracH9K50EvMr8Lt5NAt0u0oUutQ",
  authDomain: "simple-ecommerce-802d6.firebaseapp.com",
  projectId: "simple-ecommerce-802d6",
  storageBucket: "simple-ecommerce-802d6.appspot.com",
  messagingSenderId: "278841501510",
  appId: "1:278841501510:web:cf2644cdf9398709a0a747"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;