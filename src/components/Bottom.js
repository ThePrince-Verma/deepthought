import React from "react";
import "./Bottom.css";

const Bottom = () => {
  return (
    <div className="bottom">
      <div className="bottom1">
        <div className="image-container">
          <img src="/images/circle.png" alt="circle" className="circle" />
          <img src="/images/3.png" alt="1" className="overlay-image" />

        </div>
      </div>
      <div className="bottom2">
        <div className="image-container">
          <img src="/images/circle.png" alt="circle" className="circle" />
          <img src="/images/2.png" alt="1" className="overlay-image" />
        </div>
      </div>
      <div className="bottom3">
        <div className="image-container">
          <img src="/images/circle.png" alt="circle" className="circle" />
          <img src="/images/1.png" alt="1" className="overlay-image" />
        </div>
      </div>
    </div>
  );
};

export default Bottom;
