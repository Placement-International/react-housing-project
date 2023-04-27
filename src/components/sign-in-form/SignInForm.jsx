import React from 'react'
import { useState, useContext } from 'react'
import {signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';

import { UserContext} from '../../context/user.context'
const defaultFormFields = {
  email: '',
  password: ''
}

function SignInForm() {
const [formFields, setFormFields] = useState(defaultFormFields);
const {email, password} = formFields;
const { setCurrentUser } = useContext(UserContext);

const resetFormFields = () => {
  setFormFields(defaultFormFields);
}

const signInWithGoogle = async () => {
    const {user} = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
}

const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const { user } = await signInAuthUserWithEmailAndPassword(email, password);
      setCurrentUser(user);
      console.log(user)
      resetFormFields();
    } catch (error) {
      switch(error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email')
          break;
      }
      console.log(error);
    }
  }

const handleChange = (event) => {
  const {name, value} = event.target;

  setFormFields({...formFields, [name]: value })
}

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Email</label>
        <input name='email' value={email} onChange={handleChange} required type="email" />
        <label htmlFor="">Password</label>
        <input name='password' value={password} onChange={handleChange} required type="password" />
        <label htmlFor="">Confirm Password</label>
        <button type='submit'>Log In</button>
      </form>
      <button type='button' onClick={signInWithGoogle}>Google Sign In</button>
    </div>
  )
}


export default SignInForm