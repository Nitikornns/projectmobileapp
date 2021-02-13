import firebase from "firebase";
import "firebase/auth";
var firebaseConfig = {
  apiKey: "AIzaSyDXfI2Odta_HSaCg2NnEOQOESUEluI5QCU",
  authDomain: "project-a6f5c.firebaseapp.com",
  databaseURL: "https://project-a6f5c-default-rtdb.firebaseio.com",
  projectId: "project-a6f5c",
  storageBucket: "project-a6f5c.appspot.com",
  messagingSenderId: "557425325593",
  appId: "1:557425325593:web:8dc1fcab436ed22b671c88",
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export const auth = fireDb.auth();
export default fireDb.database().ref();
