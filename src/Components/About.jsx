import React from "react";
import AboutBackground from "../Components/Assets/about-background.png";
import AboutBackgroundImage from "../Components/Assets/img2.jpg";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  // Define the YouTube video URL
  const youtubeVideoUrl = "https://youtu.be/X_8olbXPkyU";

  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>  
        <h1 className="primary-heading">
          Elevate Your Style, Elevate Your Shopping.
        </h1>
        <p className="primary-text">
         Elevate your lifestyle with our carefully curated collection that goes beyond fashion.
         </p>
        <p className="primary-text">
          Our e-commerce platform is your gateway to style, quality, and a shopping experience that mirrors your aspirations.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">
            <a href="https://www.simelabs.com/" target="_blank" rel="noopener noreferrer">
              Learn More
            </a>
          </button>
          {/* Wrap the button with an anchor tag */}
          <a href={youtubeVideoUrl} target="_blank" className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video 
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
