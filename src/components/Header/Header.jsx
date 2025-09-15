import React from 'react'
import  './Header.css'
import  '../../index.css'
const Header = () => {
  return (
   <section className="h-wrapper">
    <div className= "h-container">
        <img src="./logo.png" alt="logo" width={100} />
        <div className="h-menu">
            <a href="#">Property</a>
         
            <a href="#">Contact us</a>
            <a href="#">Get Started</a>
            <button className="button">
                <a href="" className="contact"> Register</a>
            </button>
            
        </div>
    </div>
   </section>
  )
}

export default Header