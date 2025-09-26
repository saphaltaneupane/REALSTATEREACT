import React from "react";
import './House.css';
import { useNavigate } from 'react-router-dom';

const House = ({ disableRedirect = false, customButtonHandler }) => {
  const navigate = useNavigate();

  const houses = [
    {
      id: 1,
      image: "./first.webp",
      title: "Buy a home",
      description: "A real estate agent can help you buy your dream home.",
      button: "Find a local agent",
      path: "/local"  
    },
    {
      id: 2,
      image: "./second.webp",
      title: "Sell a home",
      description: "No matter what path you take to sell your home we can help",
      button: "See your options",
      path: "/sell"  
    },
    {
      id: 3,
      image: "./third.webp",
      title: "Rent a home",
      description: "We are creating a seamless online experience to help people rent",
      button: "Find rentals",
      path: "/rentals"   
    },
  ];

  const handleClick = (path) => {
    if (customButtonHandler) {
      customButtonHandler(path);
    } else if (!disableRedirect) {
      navigate("/login");
    } else {
      navigate(path);  
    }
  };

  return (
    <section className="property-section">
      <h1>Properties</h1>
      <div className="house-grid">
        {houses.map((house) => (
          <div className="house-card" key={house.id}>
            <div className="left">
              <img src={house.image} alt={house.title} className="house-img" />
            </div>
            <div className="right">
              <h3>{house.title}</h3>
              <p>{house.description}</p>
              <button
                className="details-btn"
                onClick={() => handleClick(house.path)}
              >
                {house.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default House;
