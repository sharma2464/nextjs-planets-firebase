  // Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage, ref } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBZFoZVAgO0E0RXiH2JK0hBlc2NLeXoX48',
  authDomain: 'nextclient-8e091.firebaseapp.com',
  projectId: 'nextclient-8e091',
  storageBucket: 'nextclient-8e091.appspot.com',
  messagingSenderId: '898617027757',
  appId: '1:898617027757:web:3680ce302969ac112b6a24',
  measurementId: 'G-81J80WBECE',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
const storage = getStorage(app);
// const analytics = getAnalytics(app);

const authProviders = {
  google: GoogleAuthProvider,
};
const googleSignInWithPopup = () => {
  const provider = new GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  signInWithRedirect(auth, provider);
  /*
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
      localStorage.setItem('token', token);
      localStorage.setItem('user', user);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      console.log({ errorCode, errorMessage, email, credential });
    });
    */
};

const firebase = {
  app,
  auth,
  db,
  storage,
  authProviders,
  googleSignInWithPopup,
};
export default firebase;
