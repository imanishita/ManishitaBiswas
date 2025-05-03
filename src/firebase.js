import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKyBNwW0U4oiVcI-OjCWdKh6u1RQ6O_pY",
  authDomain: "portfoliomb-90ea1.firebaseapp.com",
  projectId: "portfoliomb-90ea1",
  storageBucket: "portfoliomb-90ea1.firebasestorage.app",
  messagingSenderId: "733280527511",
  appId: "1:733280527511:web:5ea7a00958f589f281f5d2",
  measurementId: "G-C9R9REB0WG"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, collection, addDoc };
