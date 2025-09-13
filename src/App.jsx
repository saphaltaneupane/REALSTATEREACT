import React from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import './App.css'
import House from './components/Properties/House'
import Properties from './components/Properties/Properties'
import Value from './components/Value/Value'
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


    <Value />
    <Contact />
    </div>
  )
}

export default App
