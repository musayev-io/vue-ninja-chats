import firebase, { firestore } from 'firebase'
// import firstore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDRew1lz5E6jzPuePALaVJocQdtK9q51Y0",
  authDomain: "ninja-chats-1928e.firebaseapp.com",
  databaseURL: "https://ninja-chats-1928e.firebaseio.com",
  projectId: "ninja-chats-1928e",
  storageBucket: "ninja-chats-1928e.appspot.com",
  messagingSenderId: "670324907553",
  appId: "1:670324907553:web:1305ae66c4294837cecd60",
  measurementId: "G-NWWPTPKZZW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const firebaseApp = firebase.initializeApp(config)


export default firebaseApp.firestore()
