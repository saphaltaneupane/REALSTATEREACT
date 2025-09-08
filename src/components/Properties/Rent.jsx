import React from 'react'

const Rent = () => {
    const houses = [
    {
      id: 1,
      image: "./hero.jpg",
      title: "Modern Family House",
      description: "A spacious family house with a beautiful garden and parking space.",
    },
    {
      id: 2,
      image: "./house.avif",
      title: "Luxury Villa",
      description: "Stylish villa with swimming pool and premium interiors.",
    },
    {
      id: 3,
      image: "./home.avif",
      title: "Cozy Cottage",
      description: "A peaceful cottage located in the countryside.",
    },
  ];
  return (
  <section className="property-section">
      <h2>Houses</h2>
      <p>Find beautiful and affordable houses that fit your lifestyle.</p>

      <div className="house-grid">
        {houses.map((house) => (
          <div className="house-card" key={house.id}>
            <img src={house.image} alt={house.title} className="house-img" />
            <h3>{house.title}</h3>
            <p>{house.description}</p>
            <button className="details-btn">See Details</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Rent