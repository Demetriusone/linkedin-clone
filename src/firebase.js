import firebase from "firebase/compat";
const firebaseConfig = {
  apiKey: "AIzaSyDJKHdPFF5jeC74RLO4d8mpCYwobxlMGg8",
  authDomain: "linkedin-clone-yt-9d2bf.firebaseapp.com",
  projectId: "linkedin-clone-yt-9d2bf",
  storageBucket: "linkedin-clone-yt-9d2bf.appspot.com",
  messagingSenderId: "860713872015",
  appId: "1:860713872015:web:071adc90fdfb48e1bedefa",
};
const fireBaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
