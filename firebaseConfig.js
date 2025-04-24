// Andrey Montibeller e Samuel Boaz

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB5cSKucdTGvUOIBcXpH5i8Qd3wJ12a9BE",
  authDomain: "be-frame-app.firebaseapp.com",
  projectId: "be-frame-app",
  storageBucket: "be-frame-app.firebasestorage.app",
  messagingSenderId: "507571363030",
  appId: "1:507571363030:web:09cafbce6f325a6718bd77",
  measurementId: "G-RVZWLNEKZQ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db };
