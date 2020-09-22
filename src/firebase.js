import firebase from "firebase";

export default firebase.initializeApp({
  apiKey: "xxxxxx",
  authDomain: "xxxxxx",
  databaseURL: "xxxxxx",
  projectId: "xxxxxx",
  storageBucket: "xxxxxx",
  messagingSenderId: "xxxxxx",
  appId: "xxxxxx"
});

export const firestore = firebase.firestore();
