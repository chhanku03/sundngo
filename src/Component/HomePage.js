import React from 'react';
import './HomePage.css';


function HomePage() {
  return (
    <div className="home-container">
      
      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to Our NGO</h1>
          <p>We are a non-profit organization dedicated to helping those in need.</p>
          <button className="btn">Learn More</button>
        </div>
        <div className="hero-image">
          <img src="hero-image.jpg" alt="Hero Image" />
        </div>
      </section>
      <section className="features">
        <div className="feature">
          <i className="fas fa-heart"></i>
          <h2>Our Mission</h2>
          <p>To provide aid and support to those affected by poverty, natural disasters, and social injustice.</p>
        </div>
        <div className="feature">
          <i className="fas fa-handshake"></i>
          <h2>Get Involved</h2>
          <p>Join us in making a difference in the lives of others. Donate, volunteer, or spread the word about our cause.</p>
        </div>
        <div className="feature">
          <i className="fas fa-donate"></i>
          <h2>Donate</h2>
          <p>Your donation can help make a real difference in the lives of those in need.</p>
        </div>
      </section>
   
    </div>
  );
}

export default HomePage;