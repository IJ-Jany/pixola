import React from 'react';
import { NavLink } from 'react-router';
import { Github } from 'lucide-react';

const Navbar = () => {
    return (
     <div className="navbar bg-base-100 shadow-sm">
    <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
        <li><NavLink to="/">Home</NavLink></li>
     <li><NavLink to="/apps">Apps</NavLink></li>
      <li><NavLink to="/install">Installation</NavLink></li>
      </ul>
    </div>
    <div className='flex items-center'>
      <img className='w-[35px]' src="./logo.png" alt="" />
 <a className="btn btn-ghost text-xl text-purple-700">Pixola</a>
    </div>
   
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
            <li><NavLink to="/">Home</NavLink></li>
     <li><NavLink to="/apps">Apps</NavLink></li>
      <li><NavLink to="/install">Installation</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
  <button className="btn bg-purple-500 text-white"> <span>
    <Github /></span><a href="https://github.com/IJ-Jany">Contribute</a></button>
  </div>
</div>
    );
};

export default Navbar;