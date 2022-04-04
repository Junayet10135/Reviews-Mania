import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex'>
            
            <nav className='link-container flex justify-center items-center'>
                <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/'>HOME</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/reviews'>REVIEWS</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/dashboard'>DASHBOARD</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/blogs'>BLOGS</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/about'>ABOUT</NavLink>
            </nav>
        </div>
    );
};

export default Header;