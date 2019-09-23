import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDqM2oMFBmxr6aSK_cLeUf8xm5OoQgy6Kk",
    authDomain: "yourdreem-80633.firebaseapp.com",
    databaseURL: "https://yourdreem-80633.firebaseio.com",
    projectId: "yourdreem-80633",
    storageBucket: "yourdreem-80633.appspot.com",
    messagingSenderId: "719434335158",
    appId: "1:719434335158:web:133dfd6c0cfcc48f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase;