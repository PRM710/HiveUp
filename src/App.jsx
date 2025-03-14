import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import MobileHome from './mobile/MobileHome';

const logo = '/assets/logo.png';
const linkedin = '/assets/Linkedin.png';
const fiverr = '/assets/Fiverr.png';
const instagram = '/assets/Instagram.png';
const clutch = '/assets/Clutch.png';

function App() {
  const [activeComponent, setActiveComponent] = useState('home');
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1228.8);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1228.8);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const goToComponent = (component) => {
    setActiveComponent(component);
    setShowMenu(false);
  };

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <div className='all'>
      {isMobile ? (
        <>
          {/* ✅ Mobile Logo (Top-Left) */}
          <div className="mobile-logo-container">
            <img src={logo} alt="Logo" className="mobile-logo" />
          </div>

          {/* Mobile Menu Button (Top-Right) */}
          <div className="mobile-menu-container" onClick={toggleMenu}>
            <div className="menu-icon">
              <div className={`bar ${showMenu ? 'rotate1' : ''}`}></div>
              <div className={`bar ${showMenu ? 'rotate2' : ''}`}></div>
            </div>
          </div>

          {/* Mobile Home Component */}
          <MobileHome />
        </>
      ) : (
        <>
          {/* Desktop Social Icons (Top-Left) */}
          <div className="socials-container">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" className="social-icon" />
            </a>
            <a href="https://www.fiverr.com/" target="_blank" rel="noopener noreferrer">
              <img src={fiverr} alt="Fiverr" className="social-icon" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" className="social-icon" />
            </a>
            <a href="https://clutch.co/" target="_blank" rel="noopener noreferrer">
              <img src={clutch} alt="Clutch" className="social-icon" />
            </a>
          </div>

          {/* Desktop Logo (Centered) */}
          <div className='logo-container' onClick={() => goToComponent('home')} style={{ cursor: 'pointer' }}>
            <img src={logo} alt="Logo" className='logo' />
          </div>

          {/* Desktop Menu Button */}
          <div className="menu-container" onClick={toggleMenu}>
            <span className="menu-text">Menu</span>
            <div className="menu-icon">
              <div className={`bar ${showMenu ? 'rotate1' : ''}`}></div>
              <div className={`bar ${showMenu ? 'rotate2' : ''}`}></div>
            </div>
          </div>

          {/* Render Components Dynamically */}
          {showMenu && <Menu goToComponent={goToComponent} />}
          {!showMenu && activeComponent === 'about' && <About />}
          {!showMenu && activeComponent === 'home' && <Home />}
        </>
      )}
    </div>
  );
}

export default App;
