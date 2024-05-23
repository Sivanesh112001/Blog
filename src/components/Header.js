import React from 'react';
import './css/Header.css';
import Image from './assests/header.jpeg';

const Header = () => {
  return (
    <header className="header">
      <img src={Image} alt="discription of header"/>
      <h1>BLOG</h1>
      <a href="/Register">Register</a>
    </header>
  );
};

export default Header;
