import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6LVr8aUUmXdQhlKYGlIVGluJHuX-xEm0",
  authDomain: "blog-vue-ffd4e.firebaseapp.com",
  projectId: "blog-vue-ffd4e",
  storageBucket: "blog-vue-ffd4e.appspot.com",
  messagingSenderId: "5454428996",
  appId: "1:5454428996:web:dd19a74d47d35f22f03511",
};

// init firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
// init firestore service
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
// export firestore
export { projectAuth, projectFirestore, timestamp };
