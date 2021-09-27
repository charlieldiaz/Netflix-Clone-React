// import { seedDatabase } from "../seed";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDreaKB_3zR71juFAapiCk9R5L7a0ybsEY",
  authDomain: "netflix-clone-cd.firebaseapp.com",
  projectId: "netflix-clone-cd",
  storageBucket: "netflix-clone-cd.appspot.com",
  messagingSenderId: "477238037925",
  appId: "1:477238037925:web:daf61b297dc2b75f22ec4c",
  measurementId: "G-7SZCQ7BSRM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage, firebaseApp };
