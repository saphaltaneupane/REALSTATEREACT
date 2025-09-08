import React from 'react';
import House from './House';
import Rent from './Rent';
import Land from './Land';
import './properties.css';

const Properties = () => {
  return (
    <div className="properties-wrapper">
      <House />
      <Rent />
      <Land />
    </div>
  );
};

export default Properties;
