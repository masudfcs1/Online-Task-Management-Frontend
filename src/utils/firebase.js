// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBAESE_API_KEY,
  authDomain: "task-manger-e7b50.firebaseapp.com",
  projectId: "task-manger-e7b50",
  storageBucket: "task-manger-e7b50.appspot.com",
  messagingSenderId: "676549193501",
  appId: "1:676549193501:web:3c28f42276d57ae059fbf4",
  measurementId: "G-9TZ6ZRJJN9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);