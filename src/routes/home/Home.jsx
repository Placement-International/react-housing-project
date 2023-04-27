import { React, useContext } from 'react'
import { UserContext } from '../../context/user.context'

function Home() {
  const {currentUser} = useContext(UserContext);
  return (
    <div>
        <h1>Home</h1>
    </div>
  )
}

export default Home