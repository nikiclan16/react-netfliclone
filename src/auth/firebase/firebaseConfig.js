import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite';


const firebaseConfig = {
    apiKey: "AIzaSyDT8LLJfKQTrhlmfzOYzQuIYjXQOZaEevE",
    authDomain: "netflix-clone-fbc7a.firebaseapp.com",
    projectId: "netflix-clone-fbc7a",
    storageBucket: "netflix-clone-fbc7a.appspot.com",
    messagingSenderId: "336931571105",
    appId: "1:336931571105:web:89b1937f4b16c0cd7537e0"
  };


  
  //   export const FirebaseAuth = getAuth(FirebaseApp);
  
  //     export const FirebaseDB = getFirestore(FirebaseApp);
  
  export const FirebaseApp = initializeApp(firebaseConfig);

  export const FirebaseAuth = getAuth(FirebaseApp);
  
  export const FirebaseDB = getFirestore(FirebaseApp);