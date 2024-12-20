import React from 'react'
import { NavLink, useSearchParams } from "react-router-dom";
import { FaStar } from 'react-icons/fa';
import Carousel from './Carousel';

export const PlotDetails = () => {
  const [searchParams] = useSearchParams();
  const area = searchParams.get("address");
  const price = searchParams.get("price");
  const name=searchParams.get("name")
  const description=searchParams.get("description")
  const rating=searchParams.get("rating")
  const length=searchParams.get("length")
  const width=searchParams.get("width")

  const plotdetail={
    image1 : searchParams.get("image1"),
    image2 : searchParams.get("image2"),
    image3 : searchParams.get("image3"),
    image4 : searchParams.get("image4"),
  }
    
  return (
    <div className='w-[100vw] flex md:flex-row flex-col'>
        <div className='md:w-[50%] w-[100%] flex justify-center'>
            <div className='w-[70%] mt-12'>
                <h1 className='text-3xl md:text-6xl mb-4'>{name}</h1>
                <p>{area}</p>
                <p className='mt-10 font-bold text-2xl'>${price}</p >
                <NavLink
            to="/contact">
                <div className='p-4 bg-blue-700 rounded-3xl w-max text-white mt-5'>Contact us </div>
            </NavLink>
                <h1 className='text-blue-700 mt-10 text-xl mb-5'>Plot Description </h1>
                <p>{description}</p>
                <h1>Length: {length}</h1>
                <h1>Width: {width}</h1>
                <div className='flex flex-row mt-10'>
                    <FaStar size={30} />
                    <h1 className='text-2xl ml-5 md:text-4xl font-bold'>{rating} / 5</h1>
                </div>
                
            </div>
            
        </div>
        <div className='w-[50%] h-[70vh] flex justify-center items-center'>
            <div className="w-[70%] h-[50%]  bg-cover bg-center ">
                <Carousel obj={plotdetail}/>
            </div>
        </div>
    </div>
  )
}
