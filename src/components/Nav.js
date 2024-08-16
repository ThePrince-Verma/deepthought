import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { BsThreeDotsVertical } from "react-icons/bs";

// Move the styled component outside of the function component
const StyledNav = styled.nav`
  .navbar-lists {
    display: flex;
    gap: 4rem;
    list-style-type: none; /* Remove the dots */

    .home {
      position: absolute;
      top: 35px;
      left: 1212px;
    }
    .setting {
      position: absolute;
      top: 35px;
      left: 1265px;
    }
    .notification {
      position: absolute;
      top: 33.43px;
      left: 1316px;

      img {
        display: inline-block;
      }

      .notification--item {
        background-color: #ff2c55; /* Red background for highlight */
        color: white; /* White text color */
        font-weight: bold; /* Bold text */
        border-radius: 50%; /* Make it circular */
        width: 7.5px; /* Set equal width and height */
        height: 7.6px; /* Set equal width and height */
        position: absolute;
        top: 7px; /* Adjust the position relative to the notification icon */
        right: 7px; /* Adjust the position relative to the notification icon */
        font-size: 0.8rem; /* Smaller font size */
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .ellipse {
      position: absolute;
      top: 30px;
      left: 1370px;
    }

    .three-dot {
      position: absolute;
      top: 35px;
      left: 1422px;
      color: #3683f0;
      font-size: 30px;
    }

    .navbar-link {
      &:link,
      &:visited {
        display: inline-block;
      }
    }
  }
`;

const Nav = () => {
  const [menuIcon, setMenuIcon] = useState();

  return (
    <StyledNav>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <div className="navbar-container">
          <ul className="navbar-lists">
            <li>
              <NavLink
                to="/"
                className="navbar-link"
                onClick={() => setMenuIcon(false)}
              >
                {/* used for logo  */}
              </NavLink>
            </li>
            <li>
              <NavLink to="/home" className="navbar-link">
                <div className="home">
                  <img
                    src="./images/home.png"
                    alt="home-logo"
                    className="home-logo"
                  />
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/setting"
                className="navbar-link"
                onClick={() => setMenuIcon(false)}
              >
                <img
                  src="./images/setting.png"
                  alt="setting"
                  className="setting"
                />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="notification"
                className="navbar-link"
                onClick={() => setMenuIcon(false)}
              >
                <div className="notification">
                  <img src="./images/notification.png" alt="notification" />
                  <span className="notification--item"></span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/image"
                className="navbar-link"
                onClick={() => setMenuIcon(false)}
              >
                <img
                  src="./images/Ellipse.png"
                  alt="ellipse"
                  className="ellipse"
                />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/three-dot"
                className="navbar-link three-dot--link"
              >
                <BsThreeDotsVertical className="three-dot" />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </StyledNav>
  );
};

export default Nav;
