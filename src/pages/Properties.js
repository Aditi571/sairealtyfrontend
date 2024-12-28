import React, { useState, useEffect } from "react";
import backgroundImage from "../assets/house.webp";
import { PropertyCard } from "../components/PropertyCard";

export const Properties = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const regionData = [
    { id: 1, region: "Indranagar" },
    { id: 1, region: "Indranagar" },
    { id: 1, region: "Indranagar" },
    { id: 1, region: "Indranagar" },
    { id: 1, region: "Indranagar" },
    { id: 1, region: "Indranagar" },
    { id: 1, region: "Indranagar" },
    { id: 1, region: "Indranagar" },
  ];
  const [propertyData, setPropertyData] = useState(null);

  const fetchPropertydata = async () => {
    try {
      const data = await fetch("http://13.60.7.175:5000/getproperties");
      console.log(data);
      const response = await data.json();
      console.log(response);
      console.log(response[0]);
      setPropertyData(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPropertydata();
  }, [propertyData]);

  if (propertyData === null) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-blue-700 text-xl">Loading...</h2>
      </div>
    );
  }
  return (
    <div className="w-[100vw] flex justify-center flex-col items-center">
      <div
        className="w-[100vw] h-[50vh] bg-cover bg-center flex flex-col gruppo text-2xl text-white justify-center items-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(9, 29, 53, 0.8), rgba(9, 29, 53, 0.8)), url(${backgroundImage})`,
        }}
      >
        <h1 className="text-2xl md:w-[100vw] text-center w-[80vw]">
          EXPLORE OUR EXCLUSIVE PROPERTIES{" "}
        </h1>
        <div className="relative inline-block text-left">
          <button
            onClick={toggleDropdown}
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 mt-5 "
          >
            Filter By Location
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 h-[20vh] overflow-auto bg-white border border-gray-200 rounded-md shadow-lg z-50">
              {regionData.map((region) => (
                <a
                  href="#option1"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  {region.region}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="mt-12 w-[95%] h-[70vh] flex flex-wrap ">
        {propertyData.map((property) => (
          <div className="ml-5">
            <PropertyCard obj={property}></PropertyCard>
          </div>
        ))}
      </div>
    </div>
  );
};
