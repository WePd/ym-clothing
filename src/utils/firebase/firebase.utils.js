import { initializeApp } from "firebase/app"
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth"

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyChTdPdmA9jFxwRjvUZd5arUkhpsiXWuro",
  authDomain: "my-db-e8e03.firebaseapp.com",
  projectId: "my-db-e8e03",
  storageBucket: "my-db-e8e03.appspot.com",
  messagingSenderId: "63756133934",
  appId: "1:63756133934:web:2f0b367bd7d30e593121bf",
}

const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: "select_account",
})

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return
}

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider)
export const db = getFirestore()

export const createUserDocument = async (userAuth, additionalInformation = {}) => {
  if (!userAuth) return
  const userDocRef = doc(db, "user", userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)

  //若用户不存在
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...additionalInformation
      })
    } catch (error) {
      console.log(error.message)
    }
  }

  return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return
  return await createUserWithEmailAndPassword(auth, email, password)
}
