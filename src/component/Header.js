import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
		<div className="navbar bg-red-200">
		<div className="navbar-start">
		  <div className="dropdown">
			<label tabIndex={0} className="btn btn-ghost lg:hidden">
			  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
			</label>
			<ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
			  <li><Link to='/'>Home</Link></li>
			  <li><Link to='/contact'>contact</Link></li>
			  <li><Link to='/about'>About</Link></li>
			  <li><Link to='product'>Product</Link></li>
			</ul>
		  </div>
		  <Link className="btn btn-ghost normal-case text-xl">Book World</Link>
		</div>
		<div className="navbar-center hidden lg:flex">
		  <ul className="menu menu-horizontal px-1">
			<li><Link to='/'>Home</Link></li>
			<li><Link to='/contact'>Contact</Link></li>
			<li><Link to='/about'>About</Link></li>
			<li><Link to='/product'>Product</Link></li>
		  </ul>
		</div>

		<div className="flex-none gap-2 ml-8 navbar-end">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered" />
    </div>
	</div>

		<div className="dropdown dropdown-end navbar-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt='' />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <Link className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><Link>Settings</Link></li>
        <li><Link>Logout</Link></li>
      </ul>
    </div>
	  </div>

       
    );
};

export default Header;