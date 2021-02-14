// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
/*const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBgsa2HssqIwrk-CdSsY5kzXa3LIzEfH_c",
    authDomain: "shareing-app-78d47.firebaseapp.com",
    projectId: "shareing-app-78d47",
    storageBucket: "shareing-app-78d47.appspot.com",
    messagingSenderId: "891649004895",
    appId: "1:891649004895:web:8f4898873ff57bef1e92ea",
    measurementId: "G-4CMQ44J302"
});*/
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/*const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBgsa2HssqIwrk-CdSsY5kzXa3LIzEfH_c",
  authDomain: "shareing-app-78d47.firebaseapp.com",
  databaseURL: "https://shareing-app-78d47-default-rtdb.firebaseio.com",
  projectId: "shareing-app-78d47",
  storageBucket: "shareing-app-78d47.appspot.com",
  messagingSenderId: "891649004895",
  appId: "1:891649004895:web:8f4898873ff57bef1e92ea",
  measurementId: "G-4CMQ44J302"
});*/
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBgsa2HssqIwrk-CdSsY5kzXa3LIzEfH_c",
  authDomain: "shareing-app-78d47.firebaseapp.com",
  databaseURL: "https://shareing-app-78d47-default-rtdb.firebaseio.com",
  projectId: "shareing-app-78d47",
  storageBucket: "shareing-app-78d47.appspot.com",
  messagingSenderId: "891649004895",
  appId: "1:891649004895:web:52490b5a375c500a1e92ea",
  measurementId: "G-J7RP5B660H"
});
  const db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage };