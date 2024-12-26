import React, { useEffect, useState } from "react";
import backgroundImage from "../assets/house.webp";
import housebuy from "../assets/house2.jpg";
import housesell from "../assets/house3.jpg";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { PropertyCard } from "../components/PropertyCard";
import {
  FaEnvelope,
  FaFacebook,
  FaGoogle,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMailchimp,
  FaPhone,
} from "react-icons/fa";

export const Home = () => {
  const [propertyData,setPropertyData]=useState(null)

  const fetchPropertydata=async()=>{
    try {
      const data=await fetch("http://13.60.7.175:5000/getproperties");
      console.log(data)
      const response=await data.json();
      console.log(response)
      console.log(response[0])
      setPropertyData(response);
      
    } catch (error) {
      console.log(error)
    }

  }

  useEffect(()=>{
    fetchPropertydata();

  },[propertyData])

  if (propertyData === null) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-blue-700 text-xl">Loading...</h2>
      </div>
    );
  }


  return (
    <div>
      <div
        className="h-[100vh] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        }}
      >
        <div className="flex flex-row h-[100vh] w-[100vw]">
          <div className="w-[100%]  h-[100%] flex flex-col items-center justify-center">
            <div className="flex text-white text-center justify-center items-center flex-col">
              <h1 className=" fira-sans text-6xl font-semibold mb-2">
                Trending Properties
              </h1>
              <h2 className="gruppo text-xl">EXCLUSIVELY BY SAIREALTY</h2>
              <div className="flex text-white p-3 rounded-lg bg-blue-700 w-max mt-5 hover:scale-110 transition-transform duration-300">
                <Link to="/regions">
                  <h1>Explore</h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100vw] h-[90vh] text-center flex flex-col justify-center items-center">
        <h1 className="gruppo md:text-4xl text-2xl mb-10 ">What are you looking for?</h1>
        <div className="flex flex-col md:flex-row md:w-[80%] w-[100%] h-[70%] text-white text-6xl text-bold fira-sans">
        <NavLink
            to="/regions" className="md:w-[50%] w-[100%] md:h-full h-[40vh]">
          <div
            className="w-[100%] h-[100%] flex justify-center items-center bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${housebuy})`,
            }}
          >
            BUY
          </div>
          </NavLink>
          <NavLink
            to="/sell" className="md:w-[50%] w-[100%] md:h-full h-[40vh]">
              <div
            className="w-[100%] h-[100%] flex justify-center items-center bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(132, 145, 244,0.9), rgba(132, 145, 244,0.9)), url(${housesell})`,
            }}
          >
            SELL
          </div>
            </NavLink>
          
        </div>
      </div>

      <div className="w-[100vw] h-[100vh] items-center flex flex-col">
        <h1 className="gruppo mb-5  text-xl">NEW PROPERTIES</h1>
        <h2 className="fira-sans font-bold mb-10 text-4xl">For Sale</h2>
        <div className="flex justify-center items-center flex-col w-[100%]">
          <div className="w-[80%] h-[70vh] flex overflow-x-auto flex-row ">
            {propertyData.map((property) => (
              <div className="ml-5">
                <PropertyCard obj={property}></PropertyCard>
              </div>
            ))}
          </div>
          <NavLink to="/regions">
          <div className="bg-blue-500 fira-sans p-2 text-white px-5">
            View More
          </div>
          </NavLink>
          
        </div>
      </div>

      <div
        className="md:h-[70vh] h-[40vh] bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>

      <div className="flex flex-col items-center w-[100vw] justify-center bg-gradient-to-b from-white to-blue-500/20">
        <h1 className="md:text-4xl text-xl w-[70vw] mb-10 text-blue-700 gruppo mt-10">
          YOUR DREAM HOUSE IS ONE STEP AWAY!
        </h1>
        <div className="w-[80vw] pb-10 space-y-5 items-center flex md:flex-row flex-col justify-between">
          <div className="flex items-center flex-col">
            <FaPhone size={60} rotate={180} />
            <h1 className="mt-10 mb-5 fira-sans text-4xl">Call Us</h1>
            <a href="tel:+918439821578" className="text-blue-500">
              +91 8439821578
            </a>
          </div>
          <div className="flex items-center flex-col">
            <FaInstagram size={60} />
            <h1 className="mt-10 mb-5 fira-sans text-4xl">Find Us</h1>
            <a href="tel:+918439821578" className="text-blue-500">
              +91 8439821578
            </a>
          </div>
          <div className="flex items-center flex-col">
            <FaEnvelope size={60} />
            <h1 className="mt-10 mb-5 fira-sans text-4xl">Message Us</h1>
            <a href="mailto:abhinav63381@gmail.com" className="text-blue-500">
              abhinav63381@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-row color-bg h-[30vh] text-white justify-center items-center">
        <div className="flex justify-center w-[70%]">
          <div className="w-[50%] h-[70%]  items-start flex flex-col justify-between">
            <div>
              <FaHome />
              SaiRealty
            </div>
            <div>© 2035 by Dwell. Powered and secured by Wix</div>
          </div>
          <div className="w-[50%] flex items-end flex-col">
            <div>
              500 Terry Francine<br></br> Street San Francisco<br></br>CA 94158 info@mysite.com
            </div>
            <div className="flex flex-row space-x-6 mt-10">
              <FaFacebook size={30}/>
              <FaInstagram size={30}/>
              <FaLinkedin size={30}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
