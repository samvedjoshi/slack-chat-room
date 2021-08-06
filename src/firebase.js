import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDhdGXptluuWjG8y_mVAzwMHFuHmg5aPPs",
    authDomain: "chat-room-app-d8e38.firebaseapp.com",
    projectId: "chat-room-app-d8e38",
    storageBucket: "chat-room-app-d8e38.appspot.com",
    messagingSenderId: "961821870147",
    appId: "1:961821870147:web:90636db7daf0e15f7aecf6",
    measurementId: "G-6HG8GF5ZBW"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider, db} 