import React from "react";
import "./NoticeBoard.css";

const NoticeBoard = () => {
  return (
    <div className="container">
      <div className="NoticeBoard">
        <div className="left_selection">
          <div className="vertical-text1">
            <img src="./images/x.png" alt="x"/>
          </div>
          <div className="vertical-text">
            <span>N</span>
            <span>o</span>
            <span>t</span>
            <span>i</span>
            <span>c</span>
            <span>e</span>
            <span>&nbsp;</span> {/* For spacing between words */}
            <span>B</span>
            <span>o</span>
            <span>a</span>
            <span>r</span>
            <span>d</span></div>
        </div>
        <div className="right_selection">
          {/* Content for right_selection */}
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
