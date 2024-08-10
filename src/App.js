import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './Components/Login';
import { Signup } from './Components/Signup';
import Home from './Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/home" element={<Home/>}/>
      
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
