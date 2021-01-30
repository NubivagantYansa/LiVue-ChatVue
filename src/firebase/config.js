import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFOGhT-JZEnKOX9sy3vWC4i8JEXPX4mCU",
  authDomain: "livue-chatvue-ed4d2.firebaseapp.com",
  projectId: "livue-chatvue-ed4d2",
  storageBucket: "livue-chatvue-ed4d2.appspot.com",
  messagingSenderId: "104574778215",
  appId: "1:104574778215:web:4c4facdf23d2647b008dc2",
};

// init firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
// init firestore service
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
// export firestore
export { projectAuth, projectFirestore, timestamp };
