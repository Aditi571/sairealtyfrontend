import React from 'react'
import { MapComponent } from './MapComponent';
import { Link } from 'react-router-dom';

export const HouseCard = ({obj}) => {
  const queryParams = new URLSearchParams(obj).toString();
  const url = `/plot_details?${queryParams}`;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
    <div className='flex flex-row h-[25vh] shadow-lg p-6 bg-white rounded-lg'>
        <div className="w-[20%] bg-cover bg-center">
          <MapComponent srcvalue={obj}/>
        </div>
        <div className='ml-5 w-[80%] h-[100%]'>
            <h1>Name: {obj.name}</h1>
            <h1>Area : {obj.address}</h1>
            <p>Estimated Price : {obj.price}</p>
            <div className='flex flex-row justify-end items-end'>
              <Link to='/contact'>
              <div className='p-2 shadow-lg rounded-lg hover:bg-blue-500 hover:scale-110 transition-transform duration-300 hover:text-white'>Inquiry</div>
              </Link>
            </div>
        </div>
    </div>
    </a>
  )
}
