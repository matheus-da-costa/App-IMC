import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBHqy6uP2rlDYjH8yXbbj59kgI0vOEM5pU",
    authDomain: "app-imc-e22e1.firebaseapp.com",
    databaseURL: "https://app-imc-e22e1.firebaseio.com",
    projectId: "app-imc-e22e1",
    storageBucket: "app-imc-e22e1.appspot.com",
    messagingSenderId: "889301466928",
    appId: "1:889301466928:web:ce4f8602eacd64854e12f5",
    measurementId: "G-N348TLXBKT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;