import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

  const firebaseConfig = {
    apiKey: "AIzaSyCzZaiZh7Iok62rqp79cxd09KvX6HIvSRM",
    authDomain: "disney-plus-13592.firebaseapp.com",
    projectId: "disney-plus-13592",
    storageBucket: "disney-plus-13592.appspot.com",
    messagingSenderId: "319055185426",
    appId: "1:319055185426:web:36ed21695d186375eefacb",
    measurementId: "G-H1WX9WDW94"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
