import { React, useContext } from 'react'
import { UserContext } from '../../context/user.context'
import Layout from '../../components/Layout';

function Home() {
  const {currentUser} = useContext(UserContext);
    return (
      <Layout>
        <div>
          <h1>Home</h1>
          <h2>Welcome, this page is still under construction</h2>
        </div>
      </Layout>
    );
  }

export default Home