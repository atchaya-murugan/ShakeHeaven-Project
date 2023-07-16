import React from "react";
import Pexels1 from "../assets/Pexels1.png";
import Pexels2 from "../assets/Pexels2.png";
import Pexels3 from "../assets/Pexels3.png";
import Pexels4 from "../assets/Pexels4.png";
import Pexels5 from "../assets/Pexels5.png";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="gallery-text">
        <h2>Mouth watering shots</h2>
      </div>
      <div className="gallery-img">
        <img src={Pexels1} alt="gallery_1" className="im1" />
        <img src={Pexels2} alt="gallery_2" className="im2" />
        <img src={Pexels3} alt="gallery_3" className="im3" />
        <img src={Pexels4} alt="gallery_4" className="im4"/>
        <img src={Pexels5} alt="gallery_5" className="im5"/>
      </div>
      <div className="gallery-actions">
        <button type="button" className="left">
          <FaArrowLeft />
        </button>
        <button type="button" className="right">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Gallery;
