const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyDleDw1EaBM2t-hh79QQoajtHn9WSSg7RY",
  authDomain: "capstone-968d6.firebaseapp.com",
  projectId: "capstone-968d6",
  storageBucket: "capstone-968d6.appspot.com",
  messagingSenderId: "988293723555",
  appId: "1:988293723555:web:d3a014801098eb21a81616",
  measurementId: "G-CRV51KFG71"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("Users");
module.exports = User;