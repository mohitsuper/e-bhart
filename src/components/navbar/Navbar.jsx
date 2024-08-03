import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Search from "../search/Search";

export default function Navbar() {

//HOW TO GET DATA FIREBASE?


//solved error?

  // State to manage the visibility of the mobile menu
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  
   let localData = localStorage.getItem("users");
   let userinfo = JSON.parse(localData);
   console.log(localData)
  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  
  let logout =() =>{
    Navigate('/login');
  }

  // Navigation list items
  const NavList = (
    <ul className="flex flex-col lg:flex-row gap-3 text-xl lg:text-base">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/allproduct">All Products</Link>
      </li>
      <li>
        <Link to="/signup">Signup</Link>
      </li>
      <li>
      <Link to="/user-dashboard">{(localData)?userinfo.name:"user"}</Link>
      </li>
      <li>
        <Link to="/login">{(localData)?"logout":"login"}</Link>
      </li> 
      <li>
        <Link to="/cart">Cart</Link>
      </li>
      <li>
        <Link to="/admin" className={`${(userinfo.role == "user")?"hidden":"block"}`}>Admin</Link>
      </li>
      <li>
       
        <Link to="/login" onClick={logout}></Link>
      </li>
    </ul>
  );

  return (
    <nav className="container-2xl bg-pink-600 sticky top-0 z-50">
      <div className="container mx-auto flex flex-col lg:flex-row items-center py-3 lg:px-3 justify-between gap-4 duration-500">
        {/* Logo Section */}
        <div className="flex justify-between items-center w-full lg:w-auto px-3">
          <Link to="/">
            <h2 className="font-bold text-white text-2xl text-center lg:text-left">E-Bharat</h2>
          </Link>
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-white text-2xl duration-500"
            aria-label="Toggle menu"
          >
            
            &#9776; {/* Hamburger Icon */}
          </button>
        </div>
        {/* Menu Section */}
        <div
          className={`lg:flex lg:justify-between lg:items-center lg:flex-row lg:gap-1 w-full lg:w-auto ${isMobileMenuOpen ? 'block' : 'hidden'} lg:block`}
        >
          {/* <div className="flex lg:hidden justify-between items-center mb-4 lg:mb-0">
            <Search />
          </div> */}
          <div className="flex justify-center mb-4 lg:mb-0 text-white">
            {NavList}
          </div>
          <div className=" lg:flex">
            <Search />
          </div>
        </div>
      </div>
    </nav>
  );
}
