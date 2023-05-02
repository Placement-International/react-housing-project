import { React, useContext } from 'react'
import { UserContext } from '../../context/user.context'
import CreatePropertyForm from '../../components/property/CreatePropertyForm';

function Home() {
  const {currentUser} = useContext(UserContext);
  if (!currentUser) {
    // User is not logged in, show a message or redirect to login page
    return (
      <div>
        <h1>Home</h1>
        <p>You are not logged in</p>
      </div>
    );
  }
  return (
    <div>
        <h1>Home</h1>
        <h2>Hello, {currentUser.displayName}</h2>
        <CreatePropertyForm></CreatePropertyForm>
    </div>
  )
}

export default Home