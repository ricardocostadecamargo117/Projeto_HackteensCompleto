import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SobrePage from './pages/SobrePage';
import EntrarPage from './pages/EntrarPage';
import FuncionalidadesPage from './pages/FuncionalidadesPage'; // Importe a nova página
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre" element={<SobrePage />} />
            <Route path="/entrar" element={<EntrarPage />} />
            <Route path="/funcionalidades" element={<FuncionalidadesPage />} /> {/* Adicione esta rota */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;