import { initializeApp } from "firebase/app";
import {getFirestore, collection} from "firebase/firestore/lite";
// Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: import.meta.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: "vanlife-7e1b9",
  storageBucket: "vanlife-7e1b9.firebasestorage.app",
  messagingSenderId: "488932877702",
  appId: "1:488932877702:web:3f151f46308474bc603807"
};
 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);
 const usersCollectionRef = collection (db, "users");
 const vansCollectionRef = collection (db, "vans");

export { db, usersCollectionRef, vansCollectionRef }