import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBu7RuuGFArxS4oeUyc0odWZAO0o4-puE0",
  authDomain: "tienda-rojo.firebaseapp.com",
  projectId: "tienda-rojo",
  storageBucket: "tienda-rojo.appspot.com",
  messagingSenderId: "839028659107",
  appId: "1:839028659107:web:b1baab0654a885c2ea8016"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);