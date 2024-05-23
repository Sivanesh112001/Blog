import React from 'react';
import { Link } from 'react-router-dom';
import './css/Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h1>Menus</h1>
      <nav>
        <ul>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/Update">Blog </Link></li>
          <li><Link to="/Fetch">Post</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
