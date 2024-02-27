import React from "react";
import Header from './Header'

function Hero() {
  
  return (
    <div className="hero">
      <Header/>
      <img
        src="https://images.unsplash.com/photo-1534080564583-6be75777b70a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className="hero-content">
        <h1>Its all about good food & taste</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          placeat cupiditate consequatur repudiandae,
        </p>
      </div>
    </div>
  );
}

export default Hero;
