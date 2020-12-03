// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBFtIqsHvLHDTCCRh0fSKLPNrK3ZlCJy6o",
    authDomain: "forsake-2020.firebaseapp.com",
    databaseURL: "https://forsake-2020.firebaseio.com",
    projectId: "forsake-2020",
    storageBucket: "forsake-2020.appspot.com",
    messagingSenderId: "17103737146",
    appId: "1:17103737146:web:e9f7c04f8abf6c53f2c003",
    measurementId: "G-NBBX5H7E9M"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;