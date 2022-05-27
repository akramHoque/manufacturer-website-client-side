import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';


const DashBoard = () => {

const [user] = useAuthState(auth)
  const [admin] = useAdmin(user)

  return (
    <div class="drawer drawer-mobile">
    <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      {/* <!-- Page content here --> */}

      <h2 className='text-2xl font-bold text-purple-500'>Dashboard</h2>
      <Outlet></Outlet>
    
    </div> 
    <div class="drawer-side">
      <label for="dashboard-sidebar" class="drawer-overlay"></label> 
      <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
        {/* <!-- Sidebar content here --> */}
        <li><Link to = '/dashboard'>My Profile</Link></li>
        {
          !admin && <>
          <li><Link to = '/dashboard/addreview'>Add Review</Link></li>
          <li><Link to = '/dashboard/order'>My Orders</Link></li>
          </>
        }
        { admin && <>
          <li><Link to = '/dashboard/users'>All Users</Link></li>
          <li><Link to = '/dashboard/addProduct'>Add Products</Link></li>
          <li><Link to = '/dashboard/manageProduct'>Manage Products</Link></li>
          <li><Link to = '/dashboard/manageOrder'>Manage All Orders</Link></li>
        
        </>}
        
      </ul>
    
    </div>
  </div>
  );
};

export default DashBoard;