import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD3PtEzd0i5Ia8PADeO99GOuvl_8iZIyhg",
    authDomain: "react-app-journal-44b48.firebaseapp.com",
    databaseURL: "https://react-app-journal-44b48.firebaseio.com",
    projectId: "react-app-journal-44b48",
    storageBucket: "react-app-journal-44b48.appspot.com",
    messagingSenderId: "440211287686",
    appId: "1:440211287686:web:c7ddc106072299eadaab07",
    measurementId: "G-GX6TG5X7XR"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}