import {Routes, Route} from 'react-router-dom'
import Auth from './routes/auth/Auth';
import Home from './routes/home/Home'
import './App.css';
import PostProperty from './routes/properties/PostProperty';
import MyProfile from './routes/user-profile/MyProfile';
import PropertiesList from './routes/properties/PropertiesList';


function App() {
  return (
    <Routes> 
      <Route path='/' element={<Home />}/>
      <Route path='auth' element={<Auth />}/>
      <Route path='post-property' element={<PostProperty />}/>
      <Route path='my-profile' element={<MyProfile />}/>
      <Route path='properties' element={<PropertiesList />}/>
    </Routes>
  );
}

export default App;
