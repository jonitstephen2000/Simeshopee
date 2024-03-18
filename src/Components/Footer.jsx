import React from "react";
import Logo from "../Components/Assets/logo1.8.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BsMicFill } from "react-icons/bs";

const Footer = () => {
  const handleSpeakOut = () => {
    const isConfirmed = window.confirm("Do you want to use your microphone to search?");
    if (isConfirmed) {
      // Start recording the voice 
      console.log("Recording voice...");
    }
  };

  const redirectToTwitter = () => {
    window.open("https://twitter.com", "_blank");
  };

  const redirectToLinkedin = () => {
    window.open("https://linkedin.com", "_blank");
  };

  const redirectToYoutube = () => {
    window.open("https://youtube.com", "_blank");
  };

  const redirectToFacebook = () => {
    window.open("https://facebook.com", "_blank");
  };

  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        
        <div className="footer-icons">
          <BsTwitter onClick={redirectToTwitter} />
          <SiLinkedin onClick={redirectToLinkedin} />
          <BsYoutube onClick={redirectToYoutube} />
          <FaFacebookF onClick={redirectToFacebook} />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.1090871342813!2d76.36124397478453!3d10.007847372900176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c83207ea785%3A0x8bd86afab357e4e6!2sSinergia%20Media%20Labs%20(Simelabs)!5e0!3m2!1sen!2sin!4v1708492868633!5m2!1sen!2sin" width="300" height="225" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
        <div className="footer-section-columns"></div>
        <div className="footer-section-columns">
          <span>Address (Head Office) : </span>
          <span>Simelabs Shope Pvt. Ltd. </span>
          <span>World Unit no. 305 & 306, </span>
          <span>Trade Center-Tower A, Infopark </span>
          <span>phase 1 SEZ, Infopark P.O, </span>
          <span>Kakkanad, Kochi 682042 </span>
          <span>simelabsshope@gmail.com </span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
      <div className="about-search-box-container" style={{ position: "fixed", bottom: "35px", marginRight: "-19px" }}>
        <form className="search-box" action="" method="post" style={{ marginLeft: "1150px" }}>
          <button className="watch-video-button" type="button" onClick={handleSpeakOut} name="button">
            Speak Out to Search
            <BsMicFill />
          </button>
        </form>
      </div>
      <div>
        <span style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>Copyright @ SimeShope</span>
      </div>
    </div>
  );
};

export default Footer;
