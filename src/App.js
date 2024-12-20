import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import {  Routes, Route } from "react-router-dom";
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";
import React from 'react';
import { Logout } from "./components/Logout";
import { Dashboard } from "./pages/Dashboard";
import { Place } from "./pages/Place";
import { PlotDetails } from "./components/PlotDetails";
import { Contact } from "./pages/Contact";
import { Sell } from "./pages/Sell";
import 'reactflow/dist/style.css';

function App() {

  return (
    <div className="App">
      <Navbar />

      <div className="flex justify-center">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/logout" element={<Logout/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/place" element={<Place/>}></Route>
        <Route path="/plot_details" element={<PlotDetails/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/sell" element={<Sell/>}></Route>
      </Routes>
      </div>
      
      
    </div>
  );
}

export default App;
