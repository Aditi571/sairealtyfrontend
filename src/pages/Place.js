import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import backgroundImage from "../assets/house.webp";
import { PropertyCard } from "../components/PropertyCard";

export const Place = () => {
  const location = useLocation();

  const { region } = location.state || {}; // Extract the region data from the state

  const [plots, setPlots] = useState(null); // Initialize with null to indicate loading state

  useEffect(() => {
    if (region) {
      handleSearch();
    }
  }, [region]);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `http://13.60.7.175:5000/getplots?region=${region.name}`
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "An error occurred");
      }

      const data = await response.json();
      setPlots(data);
    } catch (err) {
      setPlots([]);
    }
  };

  // Handle undefined region gracefully
  if (!region) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-red-500 text-xl">
          Region not specified. Please go back and try again.
        </h2>
      </div>
    );
  }

  // Wait for plots to load before rendering
  if (plots === null) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-blue-700 text-xl">Loading...</h2>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-white to-blue-500/20 pb-5 bg-cover bg-center w-[100vw]">
           <div className='w-[100vw] h-[20vh] bg-cover bg-center flex flex-col gruppo text-2xl text-white justify-center items-center' style={{
          backgroundImage: `linear-gradient(to bottom, rgba(9, 29, 53, 0.8), rgba(9, 29, 53, 0.8)), url(${backgroundImage})`,
        }}>
          <h1 className="text-2xl md:w-[100vw] text-center w-[80vw]">OUR EXCLUSIVE PROPERTIES IN</h1>
          <h2 className="md:w-[100vw] text-center w-[80vw]">{region.name}</h2>
        </div>
      <div className="flex justify-center mt-10">
        <div className="md:w-[70vw] w-[90vw] ">
          <div className="flex flex-col w-max justify-between ">
            <div className="h-[2px] bg-blue-700 w-full  mt-2 mb-5"></div>
          </div>
          {plots.map((plot) => (
            <div
              className="pt-5 hover:scale-110 transition-transform duration-300"
              key={plot.id}
            >
              <PropertyCard obj={plot}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
