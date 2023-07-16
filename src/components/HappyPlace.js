import React from "react";
import Calendar from "../assets/calendar.png";
import Note from "../assets/note.png";
import Thumb from "../assets/thumb.png";
import "./HappyPlace.css";

const HappyPlace = () => {
  return (
    <div className="happyplace">
      <div className="happyplace-text">
        <h2>Your Happy Place</h2>
        <p>
          Donec blandit maximus dolor nec bibendum. Integer interdum, ipsum id
          rhoncus <br />luctus, orci eros dictum sem, at congue nulla justo id diam
        </p>
      </div>
      <div className="happyplace-content">
        <div className="happyplace-calendar">
          <img src={Calendar} alt="calendar_img" />
          <h3>Working 24/7</h3>
          <p>
            In nec tempor augue. Maecenas varius nulla lacus, et cursus lacus.
          </p>
        </div>
        <div className="happyplace-note">
          <img src={Note} alt="note_img" />
          <h3>Daily Menus</h3>
          <p>
            Mauris pulvinar metus diam, sit amet fermentum velit ullamcorper.
          </p>
        </div>
        <div className="happyplace-thumb">
          <img src={Thumb} alt="thumb_img" />
          <h3>Five Star Service</h3>
          <p>Vivamus lorem metus, maximus hendrerit viverra non, tempus.</p>
        </div>
      </div>
    </div>
  );
};

export default HappyPlace;
