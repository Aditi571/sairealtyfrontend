import React from 'react'
import { MapComponent } from './MapComponent';

export const PropertyCard = ({obj}) => {
    const queryParams = new URLSearchParams(obj).toString();
  const url = `/plot_details?${queryParams}`;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
    <div className="md:w-[20vw] w-[70vw] h-[55vh] bg-white shadow-md overflow-hidden">
        <div className="relative">
        <MapComponent srcvalue={obj} />
          <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded">
            BUY
          </div>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800 mt-10">{obj.name}</h2>
          <p className="text-sm text-gray-500">{obj.address}</p>
          <p className="text-lg font-bold text-gray-800 mt-2 mb-10">{obj.price}</p>
          <hr className="my-4" />
          <div className="flex justify-between text-center text-sm text-gray-600 mt-10">
     
            <div>
              <p className="font-bold">SIZE :</p>
              <p className="text-gray-800 text-lg">{obj.size}</p>
            </div>
 
          </div>
        </div>
      </div>
      </a>
  )
}


  