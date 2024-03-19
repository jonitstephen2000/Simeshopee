import React from "react";
import BannerBackground from "../Components/Assets/home-banner-background.png";
import BannerImage from "../Components/Assets/img1.png";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
          <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Seamless Shopping, Infinite Possibilities.
          </h1>
          <p className="primary-text">
            Navigate a world of infinite possibilities with our user-friendly platform.
            We redefine seamless shopping, offering you a limitless array of choices at your fingertips.
          </p>
          <Link to="/Products" className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </Link>
          </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;