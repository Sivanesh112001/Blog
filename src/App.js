import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Register from './components/Registration/Registration';
import Fetch from './components/FetchDataComponent';
import Update from './components/parent and child/parent';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="content">
          <Sidebar />
          <div className="main-content">
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/Update" element={<Update />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/Fetch" element={<Fetch />} />
              {/* <Route path="/Registration" element={<Registration />} /> */}
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/" element={<Home />} /> {/* Default route */}
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
