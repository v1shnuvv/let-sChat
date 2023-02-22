// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA01q_jqaOIrZkXIRlWYoW6gQC0gU59dXU",
  authDomain: "let-s-chat-4f2fc.firebaseapp.com",
  projectId: "let-s-chat-4f2fc",
  storageBucket: "let-s-chat-4f2fc.appspot.com",
  messagingSenderId: "814513705193",
  appId: "1:814513705193:web:fc06dea7d805868cc16078"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
// Create a root reference
export const storage = getStorage();
export const db = getFirestore(app);