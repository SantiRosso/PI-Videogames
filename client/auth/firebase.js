import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
// import { getFirestore } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsetWKCZhz9QLj2BRaK60RLntVguXKwbk",
  authDomain: "fir-auth-practice-9ec93.firebaseapp.com",
  projectId: "fir-auth-practice-9ec93",
  storageBucket: "fir-auth-practice-9ec93.appspot.com",
  messagingSenderId: "950406997430",
  appId: "1:950406997430:web:12a239e313c9b969864d17",
  measurementId: "G-9BV8LYEBMF",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const auth = getAuth(app);
// export const db = getFirestore(app);
