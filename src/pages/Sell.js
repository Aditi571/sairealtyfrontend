import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import ReactFlow  from 'reactflow';
import 'reactflow/dist/style.css';

export const Sell = () => {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async(e) => {
    
    e.preventDefault();
    try {
      const response = await fetch('https://arestatesbackend1.onrender.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      if (response.ok) {
        console.log(data.success);
        // Optionally, redirect or show success message
        navigate('/');
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  const nodes = [
    { id: '1', data: { label: 'You Contact Us' }, position: { x: 100, y: 50 } },
    { id: '2', data: { label: 'We Review the Property' }, position: { x: 100, y: 150 } },
    { id: '3', data: { label: 'We upload the property on our website' }, position: { x: 100, y: 250 } },


  ];
  
  const edges = [
    { id: 'e1-2', source: '1', target: '2', animated: true },
    { id: 'e2-3', source: '2', target: '3' },
    { id: 'e3-4', source: '3', target: '4', label: 'Yes' },
    { id: 'e4-5', source: '4', target: '5' },
    { id: 'e5-6', source: '5', target: '6' },
  ];
  
  return (
    <div className='w-[100vw] h-[90vh] flex md:flex-row flex-col'>
      <div  className='w-[50vw] h-[90vh] hidden md:flex'>
      <ReactFlow zoomOnScroll={false} 
        zoomOnPinch={false} 
        panOnDrag={false}  nodes={nodes} edges={edges} fitView
      >
      </ReactFlow>
      </div>
      <div className='flex flex-col justify-center items-center md:w-[50%] w-[100%]'>
        <h1 className='md:text-4xl text-2xl mb-10'>Contact us to sell your property</h1>
        <a className="text-blue-500" href="tel:+918439821578">+91 8439821578</a>
        <a className="text-blue-500" href="mailto:abhinav63381@gmail.com" >abhinav63381@gmail.com</a>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg md:w-96 w-[90%]"
      >


        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700">Phone Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700">How can we help you</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
      </div>
      
    </div>
  )
}
