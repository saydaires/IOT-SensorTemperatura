// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCMOLltUbE2ji2Y9mddGf87L9fclkAD5Lg",
    authDomain: "iotdatabase-6d965.firebaseapp.com",
    projectId: "iotdatabase-6d965",
    storageBucket: "iotdatabase-6d965.firebasestorage.app",
    messagingSenderId: "58423914373",
    appId: "1:58423914373:web:037417f5fabfd4ee861eec",
    measurementId: "G-CVZ7F198YN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);