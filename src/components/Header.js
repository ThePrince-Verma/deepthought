import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src='./images/logo.png' alt='my logo img' className='logo' />
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  height: 90px;
  width: 1440;
  background-color: #F0F0F0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  top: 2px;
  left:-1px;
  padding: 0; /* Ensure there's no padding */

  .logo {
    height: 49px;
    width: 311px;
    position: absolute;
    top: 22px;
    left: 82px;
  }
`;

export default Header;
