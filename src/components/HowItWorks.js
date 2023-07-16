import React from "react";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <div className="howitworks">
      <div className="howitworks-text">
        <h2 className="h">
          How <span className="alt-text_2"> does it all</span> work?
        </h2>
        <p>
          Maecenas et tempus urna. Quisque rhoncus eget arcu condimentum
          lobortis. Integer pharetra mauris ac mauris vehicula lobortis. Sed
          vitae nibh.
        </p>
        <div className="li">
        <li>
          <a href="#">Pick Up Locations</a>
        </li>
        <li>
          <a href="#">Delivery Zones</a>
        </li>
        </div>
      </div>
      <div className="info">
      <div className="howitworks-info__1">
       <div className="infor">
       <p className="numb">1.</p>
        <button className="b1 , bt "></button>
        <h3 className="head">Order via Form</h3>
        <p className="pa">
          In nec tempor augue. Maecenas varius nulla lacus, et cursus lacus
          rutrum quis.
        </p>
       </div>
       <div className="infor , infor2">
       <p className="numb">2.</p>
       <button className="b2, bt"></button>
        <h3 className="head">Confirm Order</h3>
        <p className="pa">
          Praesent rutrum diam neque, molestie mollis odo mattis in. Quisque tempus
        </p>
        
       </div>
      </div>
      <div className="howitworks-info__2">
      <div className="infor">
      <p className="numb">3.</p>
      <button className="b3, bt"></button>
        <h3 className="head">Pick Up Goodies or</h3>
        <p className="pa">
          Nulla pellentesque laoreet ultrices. Phasellus nec lectus mi. Praesent
          volutpa.
        </p>
      </div>
        <div className="infor , infor2">
        <p className="numb">4.</p>
        <button className="b4, bt"></button>
        <h3 className="head">Wait for Delivery</h3>
        <p className="pa">
          Vestibulum nec lacus et elit dictum semper ac eu quam.
        </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default HowItWorks;
