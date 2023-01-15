
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDoZSDvVXgE3hE9MaKWt1q9sVQzXQ51vBs",
    authDomain: "netflix-clone-fb10a.firebaseapp.com",
    projectId: "netflix-clone-fb10a",
    storageBucket: "netflix-clone-fb10a.appspot.com",
    messagingSenderId: "215582729108",
    appId: "1:215582729108:web:59d9e12e923e17430c6581"
  };

  const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

