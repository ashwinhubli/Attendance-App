 import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAYGHx-3b4_LrNyIDW70GrCkylLamlmcBI",
  authDomain: "school-attendance-app-e5139.firebaseapp.com",
  databaseURL: "https://school-attendance-app-e5139-default-rtdb.firebaseio.com",
  projectId: "school-attendance-app-e5139",
  storageBucket: "school-attendance-app-e5139.appspot.com",
  messagingSenderId: "397798228632",
  appId: "1:397798228632:web:b1bec942aeca54d90086ed"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.database();

 
 

 
 

  