import {Routes, Route} from 'react-router-dom'
import SignIn from './routes/sign-in/Sign-in';
import Home from './routes/home/Home'
import './App.css';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='sign-in' element={<SignIn />}/>
    </Routes>
  );
}

export default App;
