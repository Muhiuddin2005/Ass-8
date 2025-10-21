import React from 'react';
import logo from '../assets/logo.png'
import icon from '../assets/fi_2111432.png'
import { Link, NavLink } from 'react-router';
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
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><NavLink to='/'> Home</NavLink> </li>
        <li><NavLink to='/apps'> Apps</NavLink> </li>
        <li><NavLink to='/installedApps'> Installations</NavLink> </li>
      </ul>
    </div>
    <Link to='/' className='flex w-1/10 items-center'>
      <img className='w-full' src={logo} alt="" />
      <p className="capitalize text-[16px] font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">HERO.IO</p> 
  </Link>
    </div>
    
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to='/'> Home</NavLink> </li>
        <li><NavLink to='/apps'> Apps</NavLink> </li>
        <li><NavLink to='/installedApps'> Installations</NavLink> </li>
    </ul>
  </div>
  <div className="navbar-end">
    <div className='rounded-[4px] w-[145px] h-[43px] flex flex-row justify-center items-center gap-[10px] px-[16px] py-[12px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>
      <img className='w-1/5' src={icon} alt="" />
      <a> Contribute</a> 
    </div>
    </div>
</div> 
    );
};

export default Navbar;