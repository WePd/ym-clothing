import { useEffect } from "react"

import { getRedirectResult } from "firebase/auth"

import {
  auth,
  signInWithGooglePopup,
  createUserDocument,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils"

const SignIn = () => {
  useEffect(async () => {
    const response = await getRedirectResult(auth)
    if (response) {
      const userDocRef = await createUserDocument(response.user)
    }
  }, [])
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await createUserDocument(user)
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Recirect
      </button>
    </div>
  )
}

export default SignIn
