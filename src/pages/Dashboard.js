import React, { useEffect, useState } from 'react'

export const Dashboard = () => {
    const [data,setData]=useState({})
    useEffect(()=>{
        const getUserDetails = async () => {
            const token = localStorage.getItem('token');  // Get token from localStorage
          
            const response = await fetch('https://arestatesbackend1.onrender.com/protected/user-details', {
              method: 'GET',
              headers: {
                'Authorization': `Bearer ${token}`,  // Send token in Authorization header
              },
            });
            console.log(response)
            const data = await response.json();
            
            
            if (data.user) {
              console.log(data);
              setData(data.user)
            } else {
              alert('Failed to get user details');
            }
          };
          
          getUserDetails();
    },[])
  return (
    <div>
        <div className="w-[100vw] h-screen bg-cover bg-center flex justify-center items-center">
            <div className='w-[70vw] h-[50vh] flex  items-center flex-row bg-white shadow-lg rounded-lg'>
                <div className='w-[50%] flex justify-center'><div className='bg-blue-950 rounded-full w-[250px] h-[250px]'></div></div>
                <div className='flex w-[50%] flex-col justify-center'>
                    <h1 className='font-semibold text-2xl'>{data.name}</h1>
                    <p>Address : {data.address}</p>
                </div>
            </div>
        </div>
    </div>
  )
}
