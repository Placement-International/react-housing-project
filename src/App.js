import {Routes, Route} from 'react-router-dom'
import Auth from './routes/auth/Auth';
import Home from './routes/home/Home'
import './App.css';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='auth' element={<Auth />}/>
    </Routes>
  );
}

export default App;
