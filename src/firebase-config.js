import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBvZT44sFgiOPCPIORga_aVtS0y0RMY5tM",
    authDomain: "contact-429a5.firebaseapp.com",
    databaseURL: "https://contact-429a5-default-rtdb.firebaseio.com",
    projectId: "contact-429a5",
    storageBucket: "contact-429a5.appspot.com",
    messagingSenderId: "355017319398",
    appId: "1:355017319398:web:8efefe9a7eba6c295aec27"
  };

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const provider=new GoogleAuthProvider();
export const db=getFirestore(app);