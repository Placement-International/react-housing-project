import React, { useContext } from 'react'
import { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

function SignUpForm() {
const [formFields, setFormFields] = useState(defaultFormFields);
const {displayName, email, password, confirmPassword} = formFields;


const resetFormFields = () => {
  setFormFields(defaultFormFields);
}

const handleSubmit = async (event) => {
  event.preventDefault();

  if (password !== confirmPassword) {
    //dont allow to create user
    alert("passwords do not match");
    return;
  } 
  
  try {
      const {user} = await createAuthUserWithEmailAndPassword(email, password);
      console.log(user)
     await createUserDocumentFromAuth(user, {displayName})
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use')
      } else {
        console.log('user creation encountered an error', error)
      }
    }
  }

const handleChange = (event) => {
  const {name, value} = event.target;

  setFormFields({...formFields, [name]: value })
}

  return (
    <div>
      <h1>Sign Up with</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input name='displayName' value={displayName} onChange={handleChange} required type="text" />
        <label htmlFor="">Email</label>
        <input name='email' value={email} onChange={handleChange} required type="email" />
        <label htmlFor="">Password</label>
        <input name='password' value={password} onChange={handleChange} required type="password" />
        <label htmlFor="">Confirm Password</label>
        <input name='confirmPassword' value={confirmPassword} onChange={handleChange} required type="password" />
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
}


export default SignUpForm