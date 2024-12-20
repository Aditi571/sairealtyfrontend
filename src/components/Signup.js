import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true); // Show loading state

    const userData = {
      name,
      phone,
      email,
      password,
      address
    };

    try {
      // Make API call to backend
      const response = await fetch('https://arestatesbackend1.onrender.com/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData), // Send form data
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Signup successful:', result);
        // Reset form
        setName('');
        setPhone('');
        setEmail('');
        setPassword('');
        setAddress('');

        navigate('/');
      } else {
        // Handle error if the signup fails
        const result = await response.json();
        setError(result.message || 'User exists, please try again.');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('An error occurred, please try again.');
    } finally {
      setLoading(false); // Hide loading state
    }
  };

  return (
    <div
      className="w-[100vw] pb-10 bg-cover bg-center flex justify-center items-center bg-gradient-to-b from-white to-blue-700/20"
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 mt-[100px]">
        <h2 className="text-2xl font-semibold mb-6 text-center">Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4">
            {/* Name */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Phone Number */}
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Address */}
            <div className="mb-6">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <textarea
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
                required
              />
            </div>

            {loading && (
              <div className="text-center mb-4 text-blue-500">
                <span>Loading...</span>
              </div>
            )}

            {/* Show error message if error exists */}
            {error && (
              <div className="text-red-500 text-sm mb-4">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
