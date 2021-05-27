import firebase from "firebase";

const firebaseApp = firebase.initializeApp ({
  apiKey: "AIzaSyCOGgLS4eEp5NK_gbMY5E-LPplti_4bPT4",
  authDomain: "instagram-clone-react-3317c.firebaseapp.com",
  projectId: "instagram-clone-react-3317c",
  storageBucket: "instagram-clone-react-3317c.appspot.com",
  messagingSenderId: "234229700101",
  appId: "1:234229700101:web:3ecf5602505964ad1b6e6c",
  measurementId: "G-JFJ9WH855P",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };



