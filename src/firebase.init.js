// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSFFV5WMoTx9hmXij5gmxz-btQDsIIkqw",
  authDomain: "assignment-12-53a87.firebaseapp.com",
  projectId: "assignment-12-53a87",
  storageBucket: "assignment-12-53a87.appspot.com",
  messagingSenderId: "290752209911",
  appId: "1:290752209911:web:b10576e0767daae948c4f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth ;