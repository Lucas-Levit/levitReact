// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBxeri5MoIdNeeM7nItzHj1hiAYxhjmJ6o",
    authDomain: "mi-proyecto-c09df.firebaseapp.com",
    projectId: "mi-proyecto-c09df",
    storageBucket: "mi-proyecto-c09df.appspot.com",
    messagingSenderId: "99726555780",
    appId: "1:99726555780:web:c69780033c8b3ff67a60d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreInit = () => app