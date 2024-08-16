import React from "react";
import "./HeroGrid.css";
import { BsThreeDots } from "react-icons/bs";


const HeroGrid = () => {
  return (
    <div className="grid-container">
      <div className="grid-item grid-item1">
        <div className="heading">
          <span>Technical Project Management</span>
          <img className="info-icon" src="./images/i.png" alt="Info" />
        </div>
        <div className="description-container">
          <span className="bold-text">Description:</span> Story of Alignment, Scope of Agility, Specific Accountable Staggering Approach
        </div>
        <img className="image-vc" src="./images/image.png" alt="Visual Content" />
      </div>

      <div className="grid-item grid-item2">
        <div className="heading">
          <span>Threadbuild</span>
          <img className="info-icon" src="./images/i.png" alt="Info" />
        </div>
        <div className="description-container">
          <span className="bold-text">Description:</span> Watch the video, build threads, and jot down key points while watching.
        </div>
        <div className="thread">
          <img className="vector-arrow" src="./images/Vector2.png" alt="Arrow" />
          <h2>Thread A</h2>
        </div>
        <div className="subthread">
          <div className="subthread-item subthread1">Sub thread 1</div>
          <div className="input-box">
            <input type="text" placeholder="Enter Text here" />
          </div>
          <div className="subthread-item subthread2">Sub Interpretation 1</div>
          <div className="input-box">
            <input type="text" placeholder="Enter Text here" />
          </div>
          <img className="logo2" src="./images/Group 1588.png" alt="" />
          {/* <img className="select1" src="./images/Group 1732.png" alt=""></img>
          <img className="select2" src="./images/Group 1733.png" alt=""></img> */}
          <div className="select1">
            <button>Select Categ <img src="./images/arrow3.png" alt="" /> </button>
            
          </div>
          <div className="select2">
            <button>Select Proces <img src="./images/arrow3.png" alt="" /> </button>
          </div>
          <div className="plussubthread">
            <button> <span className="plus-text">+ </span> Sub-thread</button>
          </div>
          <div className="summary-subthread-item subthread1">Sub thread 1</div>
          <div className="summary-input-box">
            <input type="text" placeholder="Enter Text here" />
          </div>
        </div>
      </div>

      <div className="grid-item grid-item3">
        <div className="heading">
          <span>Structure your Pointers</span>
          <img className="info-icon" src="./images/i.png" alt="Info" />
        </div>
        <div className="description-container2">
          <span className="bold-text">Description  :</span>Write a 300 - 400 word article from your thread . Publish your understanding and showcase your understanding to the entire world 
        </div>
        <div className="title">
          Title
        </div>
        <div className="blank-box"> </div>
        <div className="content">
        Content
        </div>
        <div class="menu-bar">
  <div class="menu-options">
    <span>File</span>
    <span>Edit</span>
    <span>View</span>
    <span>Insert</span>
    <span>Format</span>
    <span>Tools</span>
    <span>Table</span>
    <span>Help</span>
  </div>
  <div class="action-buttons">
    <button><img src="./images/Iconl.png" alt="l" /></button>
    <button><img src="./images/arrow-curve-left-down.png" alt="l" /></button>
    <button><img src="./images/arrow-expand-02.png" alt="l" /></button>
  
    <input type="text" value="Paragraph" />
    <button three-dot><BsThreeDots size={25} /></button>
  </div>
  <div class="text-area">
</div>          
</div>



      </div>

      <div className="grid-item grid-item4">
        <div className="heading">
          <span>4SA Method</span>
          <img className="info-icon" src="./images/i.png" alt="Info" />
        </div>
        <div className="description-container2  ">
          <span className="bold-text">Description :</span> To Explore more read more 
        </div>
        <div className="introduction">
          <img className="vector-arrow2" src="./images/Vector2.png" alt="Arrow" />
          <h2>Introduction</h2>
        </div>
        <p>The 4SA Method , How to bring a idea into progress ?</p>
       <p2>See More</p2>
       <div className="introduction2">
          <img className="vector-arrow2" src="./images/Vector2.png" alt="Arrow" />
          <h2>Thread A</h2>
        </div>
        <p3>How are you going to develop your stratergy ? Which method are you going to use to develop a stratergy ? What if the project is lengthy?</p3>
        <p4>See More</p4>

        <div className="introduction3">
          <h2>Example 1</h2>
        </div>
        <p5>You have a concept , How will you put into progress?</p5>
      </div>
      
    </div>
  );
};

export default HeroGrid;
