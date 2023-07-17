// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "firebase/firebase"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNOIMwgXQL1l9KyME0puYzHfPjtOlKeSg",
  authDomain: "miniblog-1e33d.firebaseapp.com",
  projectId: "miniblog-1e33d",
  storageBucket: "miniblog-1e33d.appspot.com",
  messagingSenderId: "408977813150",
  appId: "1:408977813150:web:16fc99dd6d56cd90b7558f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };