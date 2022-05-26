
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Home/Login';
import SignUp from './Pages/Home/SignUp';
import Tools from './Pages/Home/Tools';
import Purchase from './Pages/Home/Purchase';
import NotFound from './Pages/NotFound';
import RequireAuth from './Pages/Home/RequireAuth';
import DashBoard from './Pages/Dashboard/Dashboard';
import MyProfile from './Pages/Dashboard/MyProfile';
import AddReview from './Pages/Dashboard/AddReview';
import MyOrders from './Pages/Dashboard/MyOrders';
import Users from './Pages/Dashboard/Users';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddProducts from './Pages/Dashboard/AddProducts';
import ManageProducts from './Pages/Dashboard/ManageProducts';


function App() {

  return (
    <div className='max-w-7xl mx-auto px-12'>
       <Navbar></Navbar>
      
       <Routes>
         <Route path='/' element= {<Home></Home>}></Route>
        
         <Route path="about" element={<About />} />
         <Route path='tools' element= {<Tools></Tools>}></Route>
         <Route path = '/purchase/:itemId' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>

        <Route path='dashboard' element = {
          <RequireAuth>
            <DashBoard></DashBoard>
          </RequireAuth>
        }>

        <Route index element = {<MyProfile></MyProfile>}></Route>
          <Route path='addreview' element = {<AddReview></AddReview>}></Route>
          <Route path='order' element = {<MyOrders></MyOrders>}></Route>
          <Route path='users' element = {<RequireAuth><Users></Users></RequireAuth>}></Route>
          <Route path='addProduct' element = {<RequireAuth><AddProducts></AddProducts></RequireAuth>}></Route>
          <Route path='manageProduct' element = {<RequireAuth><ManageProducts></ManageProducts></RequireAuth>}></Route>
        </Route>



        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path='*' element={<NotFound></NotFound>}></Route>
        
       </Routes>
       <ToastContainer />
      
    </div>
  );
}

export default App;
