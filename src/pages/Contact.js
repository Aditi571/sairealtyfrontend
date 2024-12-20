import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

export const Contact = () => {
    const navigate=useNavigate();
    const [showEmail, setShowEmail] = useState(true);
    const [showPhone, setShowPhone] = useState(true);
  
    // Toggle functions
    const toggleEmail = () => setShowEmail(!showEmail);
    const togglePhone = () => setShowPhone(!showPhone);
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
  return (
    <div className='w-[100vw] h-[90vh] flex justify-center items-center'>
        <div className='w-[80%] h-[80%]  flex md:flex-row flex-col'>
            <div className='md:w-[50%] w-[100%] flex flex-col justify-center'>
                <h1 className='text-6xl mb-[50px]'>Contact Us</h1>
                <p>Get in Touch <br></br>We’d love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out.</p>
                <div className='mt-5 flex md:flex-row flex-col'>
                <div onClick={toggleEmail} className="cursor-pointer">
        <FaEnvelope size={30} />
        {showEmail && (
          <div className="mt-2 text-lg">
            <a href="mailto:abhinav63381@gmail.com" className='text-blue-500' >Mail: abhinav63381@gmail.com</a>
          </div>
        )}</div>
                    <div onClick={togglePhone} className="md:ml-10 ml-0 cursor-pointer">
        <FaPhone size={30} />
        {showPhone && (
          <div className="mt-2 text-lg">
            <a href="tel:+918439821578" className='text-blue-500'>Phone: +91 8439821578</a>
          </div>
        )}
      </div>
                </div>
            </div>
            <div className='md:mt-0 mt-5 md:w-[50%] w-[100%] flex justify-center'>
            <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-96"
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

    </div>
  )
}
