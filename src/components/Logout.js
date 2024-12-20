import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export const Logout = () => {
    const navigate = useNavigate();

  useEffect(() => {
    // Clear user data from localStorage
    localStorage.removeItem('token'); // Assuming 'user' is the key storing user data

    // Redirect to the login page
    navigate('/');
  }, [navigate]);


  return (
    <div>Logout</div>
  )
}
