import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyBCuZtBFNr-qmmVffX0jVVdUuq_I8tc-f8",
  authDomain: "el-goku-desarrollo.firebaseapp.com",
  projectId: "el-goku-desarrollo",
  storageBucket: "el-goku-desarrollo.appspot.com",
  messagingSenderId: "587101152715",
  appId: "1:587101152715:web:3d5af049aca0931a0c424e",
  measurementId: "G-EL8ZNSH6JW"
  };
  // Initialize Firebase
 const fb = firebase.initializeApp(firebaseConfig);
 export const db = fb.firestore();
