import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import { authContext } from '../AuthProvider/AuthProvider';

const Navbar = () => {

   const {user, handleLogout} = useContext(authContext)
   console.log(user);
   

    return (
       <div className='bg-blue-500'>
          <div className='min-h-20  flex justify-between items-center text-white w-[80%] mx-auto max-w-[1200px]'>
            <div>
               <h1 className='text-xl font-extrabold'>TEETH WiZARD</h1>
            </div>
            <div className='flex gap-5'>
              <NavLink
            //    className={({isActive}) => isActive? 'text-green-600' : ""}
               to='/'>Home</NavLink>  
              <NavLink to='/allTreatments'>All Treatments</NavLink>  
              <NavLink to='/myAppointments'>My Appointments</NavLink>  
              <NavLink to='/profile'>Profile</NavLink>  
            </div>
            <div>
               {
                  user?.email ? (
                     <div>
                        <img src={user.photoURL} alt="photo"  className='rounded-full w-7 h-7' />

                        <button onClick={handleLogout}>Logout</button>
                     </div>
                  ) : (

                     <NavLink to='/login' className='btn btn-primary'>Login</NavLink>
                  )
               }
            </div>
        </div>
       </div>
    );
};

export default Navbar;