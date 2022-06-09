import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyChTdPdmA9jFxwRjvUZd5arUkhpsiXWuro",
  authDomain: "my-db-e8e03.firebaseapp.com",
  projectId: "my-db-e8e03",
  storageBucket: "my-db-e8e03.appspot.com",
  messagingSenderId: "63756133934",
  appId: "1:63756133934:web:2f0b367bd7d30e593121bf"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
