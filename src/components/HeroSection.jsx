import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-section">
      <h1 className="hero-title">Compartilhe o que sabe. Aprenda o que quiser.</h1>
      <p className="hero-subtitle">
        Na Expeeria, cada conexão é uma nova oportunidade de crescimento.
        Junte-se à nossa comunidade e troque conhecimento de forma livre e colaborativa.
      </p>
      <Link to="/entrar" className="hero-button">Começar Agora</Link>
    </div>
  );
}

export default HeroSection;