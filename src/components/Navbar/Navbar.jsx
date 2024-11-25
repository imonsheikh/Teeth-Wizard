import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='min-h-20 bg-blue-500 flex justify-between items-center text-white'>
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
                <button className='btn btn-primary'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;