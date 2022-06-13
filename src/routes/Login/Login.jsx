import { useEffect } from "react"

import { getRedirectResult } from "firebase/auth"

import {
  auth,
  signInWithGooglePopup,
  createUserDocument,
} from "../../utils/firebase/firebase.utils"

import SignUp from "../../components/SignUp/SignUp"

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
      <h1>Sign In Pages</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignUp />
    </div>
  )
}

export default SignIn
