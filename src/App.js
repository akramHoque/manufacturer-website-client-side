
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Home/Login';
import SignUp from './Pages/Home/SignUp';
import Tools from './Pages/Home/Tools';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
       <Navbar></Navbar>
       <Routes>
         <Route path='/' element = {<Home></Home>}></Route>
         <Route path="about" element={<About />} />
         <Route path='tools' element = {<Tools></Tools>}></Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        
       </Routes>
    </div>
  );
}

export default App;
