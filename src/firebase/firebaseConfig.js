import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth' 





  const firebaseConfig = {
    apiKey: "AIzaSyCVbpYKPyjhxvsWRxr2yEi94t5Jk2zunOk",
    authDomain: "peliculas-1b09e.firebaseapp.com",
    projectId: "peliculas-1b09e",
    storageBucket: "peliculas-1b09e.appspot.com",
    messagingSenderId: "608001226150",
    appId: "1:608001226150:web:c3abdac867833aa85d0b67"
  };
  firebase.initializeApp(firebaseConfig);

  // Manera de referirnos a la base de datos
const database = firebase.firestore()

//Autenticacion de google ---- muy importante se crea es una nueva instancia !!
const google = new firebase.auth.GoogleAuthProvider()

export{
    firebase,
    database,
    google,
}