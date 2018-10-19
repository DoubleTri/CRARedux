import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAjf5jn0DceNFnYP6nNYyRgIt0iNSDo744",
  authDomain: "craredux.firebaseapp.com",
  databaseURL: "https://craredux.firebaseio.com",
  projectId: "craredux",
  storageBucket: "craredux.appspot.com",
  messagingSenderId: "448451753153"
  };

export const app = firebase.initializeApp(config);

export const db = firebase.database().ref();

export const auth = firebase.auth();

export const storage = firebase.storage();

export const functions = firebase.functions();

export default { app, auth, storage };