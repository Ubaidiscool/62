 import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCWlv7CtKvamsPo11UncTHE1vWn6yxPXVM",
  authDomain: "student-attendance-53966.firebaseapp.com",
  databaseURL: "https://student-attendance-53966-default-rtdb.firebaseio.com",
  projectId: "student-attendance-53966",
  storageBucket: "student-attendance-53966.appspot.com",
  messagingSenderId: "633159420191",
  appId: "1:633159420191:web:f068b0e2d2ee961c45882a"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()
 
 

  