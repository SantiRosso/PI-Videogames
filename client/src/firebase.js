import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";
// import { GoogleAuthProvider } from "firebase/auth";

// export const provider = new GoogleAuthProvider();
// provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
// provider.setCustomParameters({
//   login_hint: "user@example.com",
// });

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyBy3vnaIEfAxoYY3hQYW-Kyg02Ufzl7Spc",
  authDomain: "videogames-eb8e9.firebaseapp.com",
  projectId: "videogames-eb8e9",
  storageBucket: "videogames-eb8e9.appspot.com",
  messagingSenderId: "1025893374241",
  appId: "1:1025893374241:web:61ec4b1cd5a37684aa0660",
  measurementId: "G-0E7Z51EKNL",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// analytics and firestore
// // export const db = getFirestore(app);
// import { getAnalytics } from "firebase/analytics";
