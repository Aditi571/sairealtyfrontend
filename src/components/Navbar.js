import React, { useState,useEffect } from 'react';
import { NavLink } from "react-router-dom";
import backgroundImage from '../assets/AR.png';
import { FaToggleOn,FaToggleOff } from 'react-icons/fa';

export const Navbar = () => {
    const [active, setActive] = useState(false); 
    const [isOpen, setIsOpen] = useState(false); 
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const userData = localStorage.getItem('token'); 
        if (userData) {
          setActive(true); 
        }
        console.log("actibe")
    
      }, []);

    const toggleNavbar = () => {
        setIsOpen(!isOpen); // Toggle navbar visibility
    };
 


  return (
    <div className='w-[100vw] h-[10vh] bg-blue-700'>
      <div className='w-[100px] h-[50px] absolute bg-cover bg-center'><img src={backgroundImage} alt="Background" /></div>
      <nav className="flex md:justify-end justify-start p-3">
      <ul className="md:flex hidden">
           <NavLink
             to="/"
             className={({ isActive }) => (isActive ? "text-blue-500" : "text-gray-700")}
           >
             <li className="ml-5 hover:bg-blue-700 hover:scale-125 transition-transform duration-300 hover:rounded-lg py-1 px-3 cursor-pointer text-white">
               Home
             </li>
           </NavLink>
 
           <NavLink
             to="/sell"
             className={({ isActive }) => (isActive ? "text-blue-500" : "text-gray-700")}
           >
             <li className="ml-5 hover:bg-blue-700 hover:scale-125 transition-transform duration-300 hover:rounded-lg py-1 px-3 cursor-pointer text-white">
               Sell
             </li>
           </NavLink>
 
           <NavLink
             to="/contact"
             className={({ isActive }) => (isActive ? "text-blue-500" : "text-gray-700")}
           >
             <li className="ml-5 hover:bg-blue-700 hover:scale-125 transition-transform duration-300 hover:rounded-lg py-1 px-3 cursor-pointer text-white">
               Contact
             </li>
           </NavLink>
           {active ? (
             // Show Dashboard if user is logged in
             <>
             <NavLink
               to="/dashboard"
               className={({ isActive }) => (isActive ? "text-blue-500" : "text-gray-700")}
             >
               <li className="ml-5 hover:bg-blue-700 hover:scale-125 transition-transform duration-300 hover:rounded-lg py-1 px-3 cursor-pointer text-white">
                 Dashboard
               </li>
             </NavLink>
             <NavLink
             to="/logout"
             className={({ isActive }) => (isActive ? "text-blue-500" : "text-gray-700")}
           >
             <li className="ml-5 hover:bg-blue-700 hover:scale-125 transition-transform duration-300 hover:rounded-lg py-1 px-3 cursor-pointer text-white">
               Logout
             </li>
           </NavLink>
           </>
             
             
           ) : (
             // Show Login and Signup if user is not logged in
             <>
               <NavLink
                 to="/login"
                 className={({ isActive }) => (isActive ? "text-blue-500" : "text-gray-700")}
               >
                 <li className="ml-5 hover:bg-blue-700 hover:scale-125 transition-transform duration-300 hover:rounded-lg py-1 px-3 cursor-pointer text-white">
                   Login
                 </li>
               </NavLink>
 
               <NavLink
                 to="/signup"
                 className={({ isActive }) => (isActive ? "text-blue-500" : "text-gray-700")}
               >
                 <li className="ml-5 hover:bg-blue-700 hover:scale-125 transition-transform duration-300 hover:rounded-lg py-1 px-3 cursor-pointer text-white">
                   Signup
                 </li>
               </NavLink>
             </>
           )}
 
           
         </ul>





      <button onClick={toggleNavbar} className="text-white  p-3 rounded-md ml-3  md:hidden visible">
        {isOpen ? <FaToggleOn size={50}/> : <FaToggleOff size={50}/>}
      </button>
        {isOpen ? (
           <ul className="md:hidden flex flex-col absolute top-[10vh] bg-gray-400 rounded-lg pr-2 pt-2 pb-2 z-50">
           <NavLink
             to="/"
             className={({ isActive }) => (isActive ? "text-blue-500" : "text-gray-700")}
           >
             <li className="ml-5 hover:bg-blue-700 hover:scale-125 transition-transform duration-300 hover:rounded-lg py-1 px-3 cursor-pointer text-white">
               Home
             </li>
           </NavLink>
 
           <NavLink
             to="/sell"
             className={({ isActive }) => (isActive ? "text-blue-500" : "text-gray-700")}
           >
             <li className="ml-5 hover:bg-blue-700 hover:scale-125 transition-transform duration-300 hover:rounded-lg py-1 px-3 cursor-pointer text-white">
               Sell
             </li>
           </NavLink>
 
           <NavLink
             to="/contact"
             className={({ isActive }) => (isActive ? "text-blue-500" : "text-gray-700")}
           >
             <li className="ml-5 hover:bg-blue-700 hover:scale-125 transition-transform duration-300 hover:rounded-lg py-1 px-3 cursor-pointer text-white">
               Contact
             </li>
           </NavLink>
           {active ? (
             // Show Dashboard if user is logged in
             <>
             <NavLink
               to="/dashboard"
               className={({ isActive }) => (isActive ? "text-blue-500" : "text-gray-700")}
             >
               <li className="ml-5 hover:bg-blue-700 hover:scale-125 transition-transform duration-300 hover:rounded-lg py-1 px-3 cursor-pointer text-white">
                 Dashboard
               </li>
             </NavLink>
             <NavLink
             to="/logout"
             className={({ isActive }) => (isActive ? "text-blue-500" : "text-gray-700")}
           >
             <li className="ml-5 hover:bg-blue-700 hover:scale-125 transition-transform duration-300 hover:rounded-lg py-1 px-3 cursor-pointer text-white">
               Logout
             </li>
           </NavLink>
           </>
             
             
           ) : (
             // Show Login and Signup if user is not logged in
             <>
               <NavLink
                 to="/login"
                 className={({ isActive }) => (isActive ? "text-blue-500" : "text-gray-700")}
               >
                 <li className="ml-5 hover:bg-blue-700 hover:scale-125 transition-transform duration-300 hover:rounded-lg py-1 px-3 cursor-pointer text-white">
                   Login
                 </li>
               </NavLink>
 
               <NavLink
                 to="/signup"
                 className={({ isActive }) => (isActive ? "text-blue-500" : "text-gray-700")}
               >
                 <li className="ml-5 hover:bg-blue-700 hover:scale-125 transition-transform duration-300 hover:rounded-lg py-1 px-3 cursor-pointer text-white">
                   Signup
                 </li>
               </NavLink>
             </>
           )}
 
           
         </ul>
        ):


        (
          <div></div>
        )}
        
       
      </nav>
    </div>
  );
}
