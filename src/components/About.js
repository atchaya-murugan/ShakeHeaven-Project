import React from "react";
import Pics from "../assets/pics.png";
import Lit from "../assets/lit.png";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <div className="about-img">
          <img src={Pics} alt="about_img" />
        </div>
        </div>
        <div className="about-text">
          <h2 className="">
            Shake Heaven
            <span className="alt-text">
              is <img src={Lit} alt="lit_img" className="lit-img" />
            </span>
          </h2>
          <p>
            Maecenas et tempus urna. Quisque rhoncus eget arcu condimentum
            lobortis. Integer pharetra mauris ac mauris vehicula lobortis. Sed
            vitae nibh dolor. <br /> Nullam aliquet, odio eu molestie posuere,
            mauris quam ultricies leo, nec tempor nibh nunc ac eros. Etiam nec
            tristique diam. Aliquam venenatis nulla id tincidunt facilisis. Sed
            eu mattis nibh.
          </p>
          <li className="about-text__links">
            <a href="#">Store Locations</a>
          </li>
        </div>
      </div>
    
  );
};

export default About;
