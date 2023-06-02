import { React, useContext } from 'react'
import { UserContext } from '../../context/user.context'
import PropertySearchBar from '../../components/PropertySearchBar';
import Layout from '../../components/Layout';

function Home() {
  const {currentUser} = useContext(UserContext);
    return (
      <Layout>
        <div>
          <h1>Home</h1>
          <PropertySearchBar/>
          <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
        </div>
      </Layout>
    );
  }

export default Home