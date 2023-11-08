import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsX0RVdZkj0MT8-GBznfhFrLqjjDnkio8",
  authDomain: "adrofx-9feec.firebaseapp.com",
  projectId: "adrofx-9feec",
  storageBucket: "adrofx-9feec.appspot.com",
  messagingSenderId: "253978813344",
  appId: "1:253978813344:web:edd27081da84b99aef7ac5",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);
export const bucket = getStorage(app);
