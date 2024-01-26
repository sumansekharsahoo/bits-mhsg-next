import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore" 

const firebaseConfig = {
  apiKey: "AIzaSyCLLGBuL0SqfeEoa2dDy87JpmxBKenbEiQ",
  authDomain: "www.bitsmhsg.me",
  projectId: "bits-mhsg-161d5",
  storageBucket: "bits-mhsg-161d5.appspot.com",
  messagingSenderId: "155596352162",
  appId: "1:155596352162:web:651ed0a82b73879b14c5fb",
  measurementId: "G-MZVEX3JHDT"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider= new GoogleAuthProvider();
export const db= getFirestore(app);