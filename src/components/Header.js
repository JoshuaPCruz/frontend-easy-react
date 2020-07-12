import React from 'react'
import './styles/header.css'

function Header() {
  return (
    <div className="App">
      <header className="header">
        <div className="header__title">
          <h1>The New York Times</h1>
        </div>
        <div className="header__subtitle">
          <h4>Contenido de subcabecera</h4>
        </div>
      </header>
    </div>
  );
}

export default Header;