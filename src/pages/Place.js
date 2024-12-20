import React,{useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import { HouseCard } from '../components/HouseCard';

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
          const response = await fetch(`https://arestatesbackend1.onrender.com/getplots?region=${region.name}`);
          
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
              <h2 className="text-red-500 text-xl">Region not specified. Please go back and try again.</h2>
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
        <div className='flex justify-center mt-10'>
        <div className='w-[70vw] '>
            <div className='flex flex-col w-max justify-between '>
                <h1 className='text-3xl text-blue-700'>Plots available in {region.name}</h1>
                <div className="h-[2px] bg-blue-700 w-full  mt-2 mb-5"></div>
            </div>
            {plots.map(plot => (
          <div className='pt-5 hover:scale-110 transition-transform duration-300' key={plot.id}>
            <HouseCard obj={plot}/>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}
