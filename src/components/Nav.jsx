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
    <ul className="flex justify-end items-center">
      <li className="mr-4">
        <a href="/" className="py-2 px-4 hover:bg-gray-700">
          Home
        </a>
      </li>
      <li className="mr-4">
        <a
          href="/my-profile"
          className="py-2 px-4 hover:bg-gray-700"
        >
          My Profile
        </a>
      </li>
      <li className="mr-4">
        <a
          href="/post-property"
          className="py-2 px-4 hover:bg-gray-700"
        >
          Post a Property
        </a>
      </li>
      <li className="mr-4">
        <a
          href="/properties"
          className="py-2 px-4 hover:bg-gray-700"
        >
          See Properties
        </a>
      </li>
      <li>
      <div className="flex py-2 px-4">
            <button
              onClick={signOutUser}
              className="hover:bg-gray-700"
            >
              Sign Out
            </button>
          </div>
      </li>
    </ul>
  </nav>
  )
}

export default Nav