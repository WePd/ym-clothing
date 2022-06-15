import { useState } from "react"
import FormInput from "../InputForm"

import {
  createAuthUserWithEmailAndPassword,
  createUserDocument,
} from "../../utils/firebase/firebase.utils"
import "./index.scss"

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
}

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)

  const { displayName, email, password, confirmPassword } = formFields

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormFields({ ...formFields, [name]: value })
  }
  const resetdeFormFields = () => {
    setFormFields(defaultFormFields)
  }
  const handleSubmit = async (event) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      alert("password do ont match")
      return
    }
    try {
      const { user } = createAuthUserWithEmailAndPassword(email, password)

      await createUserDocument(user, { displayName })

      resetdeFormFields()
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("email already in use")
      } else {
        console.log(error)
      }
    }
  }
  return (
    <div className="sign-up-container">
      <h2>Dont Have a Count?</h2>
      <h3>Sign up With Your Email and Password </h3>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="PassWord"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <button type="submit">Sing Up</button>
      </form>
    </div>
  )
}

export default SignUp
