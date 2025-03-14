import React from 'react';

function Menu({ goToComponent }) {
  const menuContainerStyle = {
    backgroundColor: 'black',
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000,
    fontFamily: "'Inter Tight', sans-serif",
  };

  const navMenuStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1px',
    textAlign: 'center',
  };

  const navItemStyle = {
    fontSize: '4rem',
    color: 'white',
    textDecoration: 'none',
    fontWeight: 800,
    padding: '2px',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
  };

  return (
    <div style={menuContainerStyle}>
      <div style={navMenuStyle}>
        <span style={navItemStyle} onClick={() => goToComponent('home')}>
          Home
        </span>
        <span style={navItemStyle} onClick={() => goToComponent('about')}>
          About
        </span>
        <span style={navItemStyle}>
          Services
        </span>
        <span style={navItemStyle}>
          Work
        </span>
        <span style={navItemStyle}>
          Contact
        </span>
      </div>
    </div>
  );
}

export default Menu;
