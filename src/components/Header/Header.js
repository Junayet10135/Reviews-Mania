import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            
            <nav>
                <div className='link-container flex justify-center mt-8'>
                    <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/'>HOME</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/reviews'>REVIEWS</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/dashboard'>DASHBOARD</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/blogs'>BLOGS</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/about'>ABOUT</NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Header;