// Version 8
// import firebase from "firebase/app";
// import firestore from "firebase/firestore";

// Version 9
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkKOMVw-yyXoVRXwaEpMo11mPJVzWXnhQ",
  authDomain: "blog-site-192d4.firebaseapp.com",
  projectId: "blog-site-192d4",
  storageBucket: "blog-site-192d4.appspot.com",
  messagingSenderId: "975276323956",
  appId: "1:975276323956:web:aee0c22935390f4b830d21",
};

// Version 8
// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();

// Version 9
initializeApp(firebaseConfig);

const db = getFirestore();

export { db };
