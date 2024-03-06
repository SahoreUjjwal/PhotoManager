import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDM4Xkwb2ekgXZbJaRB_O01JU0Ueb3OtxM",
  authDomain: "photo-manager-773b9.firebaseapp.com",
  projectId: "photo-manager-773b9",
  storageBucket: "photo-manager-773b9.appspot.com",
  messagingSenderId: "1064967193398",
  appId: "1:1064967193398:web:56ffdccea486da30a72997"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);