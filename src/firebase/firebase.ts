import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8Ns4Rr3J-aiRnpXv_9z6BX8zl5Uc0IfI",
  authDomain: "fastpay-8f8a8.firebaseapp.com",
  projectId: "fastpay-8f8a8",
  storageBucket: "shivshakti-landingpage.appspot.com",
  messagingSenderId: "817262558269",
  appId: "1:817262558269:web:72f9f1e520334b1601be54",
  measurementId: "G-K50ZK7YX2R",
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

// const analytics = getAnalytics(app);
// const auth = getAuth(app);

export { database };
export const storage = getStorage(app);
