import { React, useContext } from 'react'
import { UserContext } from '../context/user.context';
import { signOutUser } from '../utils/firebase/firebase.utils';

function Nav() {
  const {currentUser} = useContext(UserContext);
  if (!currentUser) {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/properties">See Properties</a>
        </li>
        <li>
          <a href="/auth">Sign In / Register </a>
        </li>
      </ul>
    </nav>
  )} return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/my-profile">My Profile</a>
        </li>
        <li>
          <a href="/post-property">Post a Property</a>
        </li>
        <li>
          <a href="/properties">See Properties</a>
        </li>
        <li>
        <button onClick={signOutUser}>Sign Out</button>
        </li>
      </ul>
    </nav>
  )
}

export default Nav