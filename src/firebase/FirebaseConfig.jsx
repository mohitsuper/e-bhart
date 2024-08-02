// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtx88zvqHC-TEyc1OGuylA58N8NxQ6Zs4",
  authDomain: "estore-3cba4.firebaseapp.com",
  projectId: "estore-3cba4",
  storageBucket: "estore-3cba4.appspot.com",
  messagingSenderId: "456715916666",
  appId: "1:456715916666:web:fe551762526540944572c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }

