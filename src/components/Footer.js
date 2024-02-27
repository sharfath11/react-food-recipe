import React from "react";

function Hero() {
  return (
    <div className="hero">
      <img
        src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className="hero-content">
        <h1>Its all about good food & taste</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          placeat cupiditate consequatur repudiandae,
        </p>
        <div className="text-box">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Number" />
            <textarea name="" id="" cols="20rem" rows="" placeholder="make improvent our team ?"></textarea>
        </div>
          <button className="footer-button">
             ORDER NOW
          </button>
       
      </div>
    
    </div>
  );
}

export default Hero;
