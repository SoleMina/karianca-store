import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
//
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDthtBbJ4Mb-FyuOSUmsNavf79rSKxX4n8",
  authDomain: "coder-ecommerce-2bb3d.firebaseapp.com",
  projectId: "coder-ecommerce-2bb3d",
  storageBucket: "coder-ecommerce-2bb3d.appspot.com",
  messagingSenderId: "349271358243",
  appId: "1:349271358243:web:bce65388dbfd1fa850aa96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
