import React from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import './App.css'
import House from './components/Properties/House'
import Properties from './components/Properties/Properties'
import Footer from './components/Footer/footer'
import Contact from './components/Contact/contact'
import { Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import Register from './components/Register/Register'; 
import Home from './components/Home/Home'; // <-- Add this line
import About from './components/About/About'; // <-- Add this line
import Local from './components/Local/local';
import Sell from './components/Sell/Sell';
import Rentals from './components/Rentals/rentals';
const App = () => {
  return (
    <div className="App">
      <Routes>
        
        <Route
          path="/"
          element={
            <>
              <div>
                <div className="white-gradient" />
                <Header />
                <Hero />
              </div>
               <House />
                <About />
              <Contact />
              <Footer />
            
            </>
          }
        />


        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        
      
       
        <Route path="/local" element={<Local />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/rentals" element={<Rentals />} />
      
 
      </Routes>
    </div>
  )
}

export default App
