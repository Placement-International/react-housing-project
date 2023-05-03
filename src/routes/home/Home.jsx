import { React, useContext } from 'react'
import { UserContext } from '../../context/user.context'
import Layout from '../../components/Layout';

function Home() {
  const {currentUser} = useContext(UserContext);
  if (!currentUser) {
    // User is not logged in, show a message or redirect to login page
    return (
      <Layout>
        <div>
          <h1>Home</h1>
          <h2>Welcome, this page is still under construction</h2>
          <p>You are not logged in</p>
        </div>
      </Layout>
    );
  }
  return (
    <Layout>
      <div>
        <h1>Home</h1>
        <h3>Hello, {currentUser.displayName}. This page is still under construction.</h3>
      </div>
    </Layout>
  )
}

export default Home