import { React, useContext } from 'react'
import { UserContext } from '../../context/user.context'
import Layout from '../../components/Layout';

function MyProfile() {
  const {currentUser} = useContext(UserContext);
  console.log(currentUser);
  if (!currentUser) {
    // User is not logged in, show a message or redirect to login page
    return (
          <h1>Loading</h1>

    );
  }
  return (
    <Layout>
      <div>
        <h1>My Profile</h1>
        <h3>Hello, {currentUser.displayName}</h3>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png" alt="Description of the image" style={{ width: '25%', height: 'auto' }}/>
        <p>My email: {currentUser.email}</p>
        <p>You created this account: {currentUser.metadata.creationTime}</p>
        <div>
          <p>My posts</p>
          <p>My favourites</p>
        </div>
      </div>
    </Layout>
  )
}

export default MyProfile