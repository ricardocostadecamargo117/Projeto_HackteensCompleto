import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importe useNavigate para redirecionamento
import './EntrarPage.css';

function EntrarPage() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState(''); // Estado para exibir mensagens de erro
  const navigate = useNavigate(); // Hook para navegar entre rotas

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita o comportamento padrão de envio do formulário

    if (!nome.trim() || !email.trim() || !senha.trim()) {
      setErro('Por favor, preencha todos os campos.');
      return;
    }

    // Aqui você faria a lógica de cadastro (enviar dados para o servidor, etc.)
    console.log('Dados de cadastro enviados:', { nome, email, senha });

    // Simulação de cadastro bem-sucedido
    setErro(''); // Limpa qualquer mensagem de erro
    navigate('/'); // Redireciona para a página inicial
  };

  return (
    <div className="entrar-page">
      <h1>Cadastre-se</h1>
      <form className="cadastro-form" onSubmit={handleSubmit}>
        {erro && <p className="erro-mensagem">{erro}</p>} {/* Exibe a mensagem de erro se existir */}
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            name="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <button type="submit" className="cadastro-button">Cadastrar</button>
        <p className="login-link">
          Já tem uma conta? <a href="/login">Faça login</a>
        </p>
      </form>
    </div>
  );
}

export default EntrarPage;