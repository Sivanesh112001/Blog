import React from 'react';
import './css/Header.css';
import { Link } from 'react-router-dom';
import Image from './assests/header.jpeg';

const Header = () => {
  return (
    <header className="header">
      <img src={Image} alt="discription of header"/>
      <h1>BLOG</h1>
      <Link to="/Register">Register</Link>
    </header>
  );
};

export default Header;
