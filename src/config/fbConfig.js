import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyCfndHOU1V7ha3IPbL7Bx3gtERjStG038w",
    authDomain: "dorisreact-867a5.firebaseapp.com",
    databaseURL: "https://dorisreact-867a5.firebaseio.com",
    projectId: "dorisreact-867a5",
    storageBucket: "dorisreact-867a5.appspot.com",
    messagingSenderId: "808201990497",
    appId: "1:808201990497:web:932075c132c8d01a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore() // <- needed if using firestore

export default firebase;