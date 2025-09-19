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

const App = () => {
  return (
    <div className="App">
      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={
            <>
              <div>
                <div className="white-gradient" />
                <Header />
                <Hero />
              </div>
              <Properties />
                <About />
              <Contact />
              <Footer />
            
            </>
          }
        />

        {/* Register page */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
