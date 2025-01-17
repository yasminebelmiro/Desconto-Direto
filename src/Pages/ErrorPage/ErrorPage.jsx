import React from 'react'
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Página Não Encontrada</h1>
      <p>A página que você tentou acessar não existe ou não está disponível.</p>
      <button onClick={() => navigate("/")}>Voltar para a Home</button>
    </div>
  );
}

export default ErrorPage