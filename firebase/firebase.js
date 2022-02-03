import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
  onValue,
  push
} from "https://www.gstatic.com/firebasejs/9.6.5/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyB6NDO7L5BupdxhseGhSl9nbXF8p8g-FjQ",
  authDomain: "admin-login-43e5f.firebaseapp.com",
  projectId: "admin-login-43e5f",
  storageBucket: "admin-login-43e5f.appspot.com",
  messagingSenderId: "810198201177",
  appId: "1:810198201177:web:7baa654c2097c54deb9248"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export { db, set, ref, onValue, push };
