import React from 'react';
import './FuncionalidadesPage.css'; // Crie este arquivo CSS

function FuncionalidadesPage() {
  return (
    <div className="funcionalidades-page">
      <h1>Nossas Funcionalidades</h1>
      <section className="funcionalidade">
        <h2>Salas de Aprendizado Colaborativo</h2>
        <p>Conecte-se com outros learners em salas virtuais para discussões em tempo real, resolução de dúvidas e aprendizado em grupo.</p>
      </section>
      <section className="funcionalidade">
        <h2>Compartilhamento de Conhecimento</h2>
        <p>Publique seus próprios tutoriais, guias, dicas e experiências para ajudar a comunidade e construir sua reputação como especialista.</p>
      </section>
      <section className="funcionalidade">
        <h2>Fóruns de Discussão</h2>
        <p>Participe de fóruns organizados por tópicos para fazer perguntas, compartilhar ideias e debater sobre os assuntos que te interessam.</p>
      </section>
      <section className="funcionalidade">
        <h2>Criação de Grupos de Interesse</h2>
        <p>Crie ou junte-se a grupos focados em temas específicos para colaborar em projetos, estudar em conjunto e compartilhar recursos.</p>
      </section>
      <section className="funcionalidade">
        <h2>Mentoria</h2>
        <p>Encontre mentores experientes para guiar sua jornada de aprendizado ou ofereça sua expertise para mentorar outros membros da comunidade.</p>
      </section>
      {/* Adicione mais funcionalidades conforme necessário */}
    </div>
  );
}

export default FuncionalidadesPage;