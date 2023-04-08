import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='my-container bg-slate-300 mx-auto p-5 flex justify-between'>
            <Link to='/' className='text-xl font-extrabold'>NI7</Link>

            <div className='flex gap-8 font-semibold'>
                <NavLink to='/contextApi'
                    className={({ isActive }) => isActive ? 'active' : ''}
                >ContextAPI</NavLink>
                <NavLink to='/contact'
                    className={({ isActive }) => isActive ? 'active' : ''}
                >Contact</NavLink>
                <NavLink to='/about Us'
                    className={({ isActive }) => isActive ? 'active' : ''}
                >About Us</NavLink>
                <NavLink to='/login'
                    className={({ isActive }) => isActive ? 'active' : ''}
                >Login</NavLink>
            </div>


        </nav>
    );
};

export default Header;