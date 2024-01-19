import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAu0kReV3LE8FzSykTnNZ7t_7NdMg9MCeQ",
  authDomain: "photfolio-6fa53.firebaseapp.com",
  projectId: "photfolio-6fa53",
  storageBucket: "photfolio-6fa53.appspot.com",
  messagingSenderId: "82990788780",
  appId: "1:82990788780:web:da0ec7c201f9f1fc22ef09"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);