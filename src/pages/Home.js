import React, { useState } from "react";
import backgroundImage from "../assets/building.webp";
import { Link, useNavigate } from "react-router-dom";

export const Home = () => {
  const [selectedregion, setSelectedregion] = useState(null);
  const navigate = useNavigate();

  const handleregionClick = (region) => {
    setSelectedregion(region);
    navigate("/place", { state: { region } }); // Navigate to the details page with region data
  };

  const data = [
    { id: 1, name: "Rajpur Road", pincode: 248001 },
    { id: 2, name: "Mussoorie Road", pincode: 248179 },
    { id: 3, name: "Chakarata Road", pincode: 248001 },
    { id: 4, name: "Haridwar Bypass Road", pincode: 248001 },
    { id: 5, name: "Doiwala", pincode: 248140 },
    { id: 6, name: "Vikasnagar", pincode: 248198 },
    { id: 7, name: "Malsi", pincode: 248003 },
    { id: 8, name: "Clement Town", pincode: 248002 },
    { id: 9, name: "Saharanpur Road", pincode: 248197 },
    { id: 10, name: "Jakhan", pincode: 248001 },
    { id: 11, name: "Kashmir Road", pincode: 248001 },
    { id: 12, name: "Woolworth Estate", pincode: 248006 },
    { id: 13, name: "Prem Nagar", pincode: 248007 },
    { id: 14, name: "Harrawala", pincode: 248001 },
    { id: 15, name: "Bhaniawala", pincode: 248142 },
    { id: 16, name: "Shivpuri", pincode: 248009 },
    { id: 17, name: "Pondha", pincode: 248007 },
    { id: 18, name: "Dehradun Cantt", pincode: 248001 },
    { id: 19, name: "Raipur", pincode: 248008 },
    { id: 20, name: "Mithal Village", pincode: 248003 },
  ];
  return (
    <div>
      <div>
        <div className="flex flex-row h-[100vh]">
          <div className="w-[100%] md:w-[50%] h-[100%] flex flex-col items-center justify-center">
            <div className="flex  w-[70%] flex-col">
              <h1 className="text-6xl font-semibold relative top-[-40px]">
                Modern Living <br></br>For Everyone
              </h1>
              <p>
                Discover the perfect property with us! At Dream Homes Realty, we
                specialize in connecting people to their ideal homes. Whether
                you're buying, selling, or investing, we provide tailored
                solutions, expert guidance, and unparalleled service to make
                your real estate journey seamless and rewarding.
              </p>
              <div className="flex text-white p-3 rounded-lg bg-blue-700 w-max mt-5 hover:scale-110 transition-transform duration-300">
                <Link to="/contact">
                  <h1>Contact Us</h1>
                </Link>
              </div>
            </div>
          </div>
          <div className="md:w-[50%] h-[100%] flex items-center justify-center">
            <div
              className="md:w-[90%] h-[70%] bg-cover bg-center"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="flex w-[100%] justify-center bg-gradient-to-b from-white to-blue-500/20">
        <div className="w-[80vw]">
          <div className="flex flex-col md:w-max justify-between mb-10">
            <h1 className="text-3xl text-blue-700">
              What we have in store for you
            </h1>
            <div className="h-[2px] bg-blue-700 w-full  mt-2 mb-5"></div>
            <p>
              Explore a wide range of plots in prime locations of dehradun! .
              <br></br>
              Find the perfect location to build your dream home or <br></br>
              grow your investment portfolio with us.{" "}
            </p>
          </div>

          <div className="flex flex-wrap justify-center mb-10 ">
            {data.map((region) => (
              <div
                className="pt-5 w-[90vw] md:w-[25vw] hover:scale-105 transition-transform duration-300"
                key={region.id}
                onClick={() => handleregionClick(region)}
              >
                <div className="flex flex-col shadow-lg p-6 mr-5 justify-center bg-white rounded-lg">
                  <h1 className="text-3xl mb-5">{region.name}</h1>
                  <p>Pincode : {region.pincode}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
