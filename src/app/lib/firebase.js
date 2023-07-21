import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXci9UZbBRjz5s0wC7CZBlEmFT6JQiOHk",
  authDomain: "gentrification-app.firebaseapp.com",
  projectId: "gentrification-app",
  storageBucket: "gentrification-app.appspot.com",
  messagingSenderId: "72081082022",
  appId: "1:72081082022:web:ecaa43cf96342c488c5667",
  measurementId: "G-5GGB7033EC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
