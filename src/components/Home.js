import React from "react";
import bg from "../assets/bg.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div>
        <h1>Shake It Up!!!</h1>
        <p>
          Integer et massa nisi. Quisque fermentum leo eget <br />
          sagittis aliquet. Vivamus tincidunt blandit vestibulum.
          <br /> Nunc vitae faucibus libero. Duis cursus arcu nec <br />
          tincidunt placerat.
          <br />
          <br />
          <button type="button" className="btn">
            Order Now
          </button>
        </p>
      </div>
      <div className="bg-img">
        <img src={bg} alt="bg_img" />
      </div>
    </div>
  );
};

export default Home;
