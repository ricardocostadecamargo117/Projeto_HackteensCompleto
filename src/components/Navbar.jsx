import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Expeeria</div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Início</Link>
        </li>
        <li className="navbar-item">
          <Link to="/sobre" className="navbar-link">Sobre</Link>
        </li>
        <li className="navbar-item">
          <Link to="/funcionalidades" className="navbar-link">Funcionalidades</Link> {/* Use Link aqui */}
        </li>
        <li className="navbar-item">
          <Link to="/entrar" className="navbar-button">Entrar</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;