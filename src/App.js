import {Routes, Route} from 'react-router-dom'
import Auth from './routes/auth/Auth';
import Home from './routes/home/Home'
import './App.css';
import PostProperty from './routes/properties/PostProperty';
import MyProfile from './routes/user-profile/MyProfile';


function App() {
  return (
    <Routes> 
      <Route path='/' element={<Home />}/>
      <Route path='auth' element={<Auth />}/>
      <Route path='post-property' element={<PostProperty />}/>
      <Route path='my-profile' element={<MyProfile />}/>
    </Routes>
  );
}

export default App;
