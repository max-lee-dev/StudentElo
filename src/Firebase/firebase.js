// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

import {getAnalytics} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD0PCiA5KZdvdetN-UUfwQYFXF07qHRfuA",
    authDomain: "studentelo.firebaseapp.com",
    projectId: "studentelo",
    storageBucket: "studentelo.appspot.com",
    messagingSenderId: "696056817377",
    appId: "1:696056817377:web:10f03a77e58303b9c839a0",
    measurementId: "G-RBF2Z6L892"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export const auth = getAuth(app);
export const signInWithGoogle = () => signInWithPopup(auth, provider);
