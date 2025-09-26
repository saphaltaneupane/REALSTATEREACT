import React, { useState } from 'react';    
export default function Rentals() {
      const [title, setTitle] = useState("");
      const [address, setAddress] = useState("");
      const [price, setPrice] = useState("");
      const [description, setDescription] = useState("");
        const [image, setImage] = useState(null);
        const [ownerName, setOwnerName] = useState("");
        const [contactNumber, setContactNumber] = useState("");

  return (
  
    <div>
      <h1>Sell your Property</h1>
      <form action="">
        <input type="text" placeholder="Property Title" value={title}  onChange={(e) => setTitle(e.target.value)}/><br />
        <input type="text" placeholder="Address" value={address} onChange={(e)=>setAddress(e.target.value)} /><br />

        <input type="number" placeholder="Expected Price" value={price} onChange={(e)=>setPrice(e.target.value)} /><br />
        <input type="text" placeholder="Description" value={description} onChange={(e)=>setDescription(e.target.value)} /><br />
        <input type="file" placeholder="Image of the photos"  value={image} onChange={(e)=>setImage(e.target.files[0])} /><br />
        <input type="text" placeholder="Full Name of owner" value={ownerName} onChange={(e)=>setOwnerName(e.target.value)} /><br />
        <input type="text" placeholder="Contact number" value={contactNumber} onChange={(e)=>setContactNumber(e.target.value)} /><br />
        <button type="submit">Submit</button>
      </form>
      
    </div>
  );
}