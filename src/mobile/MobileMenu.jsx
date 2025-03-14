import React from 'react';
import '../mobile.css';

function MobileMenu({ goToComponent }) {
  return (
    <div className="mobile-menu">
      <div className="mobile-menu-item" onClick={() => goToComponent('home')}>
        Home
      </div>
      <div className="mobile-menu-item" onClick={() => goToComponent('about')}>
        About
      </div>
      <div className="mobile-menu-item" onClick={() => goToComponent('services')}>
        Services
      </div>
      <div className="mobile-menu-item" onClick={() => goToComponent('contact')}>
        Contact
      </div>
    </div>
  );
}

export default MobileMenu;