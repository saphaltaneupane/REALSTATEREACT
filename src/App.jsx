import React from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import './App.css'
import House from './components/Properties/House'
import Properties from './components/Properties/Properties'
import Footer from './components/Footer/footer'
import Contact from './components/Contact/contact'
const App = () => {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
          <Header />
          <Hero />
         
      </div>
       <Properties />


 
    <Contact />
    <Footer />
    </div>
  )
}

export default App
