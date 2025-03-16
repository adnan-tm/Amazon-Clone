
import firebase from "firebase/compat/app";
// auth
import {getAuth} from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4AXeh-9LRWOt-uzV68HDkqBUiaBnGnFo",
  authDomain: "clone-3663c.firebaseapp.com",
  projectId: "clone-3663c",
  storageBucket: "clone-3663c.firebasestorage.app",
  messagingSenderId: "769626743117",
  appId: "1:769626743117:web:ad4cc3da6b86d9fce81704"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = app.firestore()