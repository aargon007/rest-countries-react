import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../SearchCountry/Search';

const NavBar = () => {
    
    return (
        <div className='nav'>
            <Link to="/" state={{from:location}} className='bg-blue-500 nav-item'>Home</Link>
            <Link to="/asia" className=' bg-gray-500 nav-item'>Asia</Link>
            <Link to="/europe" className=' bg-violet-500 nav-item'>Europe</Link>
            <Link to="/america" className=' bg-green-500 nav-item'>America</Link>
            <Link to="/africa" className=' bg-amber-500 nav-item '>Africa</Link>
            <Link to="/oceania" className=' bg-indigo-500 nav-item'>Oceania</Link>
            <Search/>
        </div>
    );
};

export default NavBar;