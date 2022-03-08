import firebase from 'firebase';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyCZ0stVIigeKJXJnv0bN7ofujOnFEBGHoU",
    authDomain: "realestate-322709.firebaseapp.com",
    projectId: "realestate-322709",
    storageBucket: "realestate-322709.appspot.com",
    messagingSenderId: "529835988139",
    appId: "1:529835988139:web:1e12d30d03cfed681793ee",
    measurementId: "G-J7VMN8894T"
};



firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();





export { auth, provider }
export { firebase }




