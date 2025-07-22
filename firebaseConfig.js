import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Firebase Config
export const firebaseConfig = {
  apiKey: "AIzaSyDx2BhyzSAaVPVIMG1PpXAeg6_tB1eLXBg",
  authDomain: "omniplex-1adba.firebaseapp.com",
  projectId: "omniplex-1adba",
  storageBucket: "omniplex-1adba.firebasestorage.app",
  messagingSenderId: "1081714593124",
  appId: "1:1081714593124:web:0eeb3ab97aedcd78573e71",
  measurementId: "G-KQLKSR4VM4"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };

export const initializeFirebase = () => {
  return app;
};
