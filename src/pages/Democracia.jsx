import React, { useState } from 'react';
import './Democracia.css'; // Novo arquivo CSS para os estilos

function Democracia() {
  // Estados para armazenar as idades e a chapa mais experiente
  const [chapa1, setChapa1] = useState({ candidato: '', vice: '' });
  const [chapa2, setChapa2] = useState({ candidato: '', vice: '' });
  const [maisExperiente, setMaisExperiente] = useState('');
  const [erro, setErro] = useState('');

  // Função para calcular a chapa com mais experiência
  const calcularExperiencia = () => {
    // Validação de campos
    if (!chapa1.candidato || !chapa1.vice || !chapa2.candidato || !chapa2.vice) {
      setErro('Por favor, preencha todas as idades corretamente.');
      return;
    }
    
    // Resetando mensagem de erro
    setErro('');

    const experienciaChapa1 = parseInt(chapa1.candidato) + parseInt(chapa1.vice);
    const experienciaChapa2 = parseInt(chapa2.candidato) + parseInt(chapa2.vice);

    if (experienciaChapa1 > experienciaChapa2) {
      setMaisExperiente('A chapa 1 tem mais experiência.');
    } else if (experienciaChapa2 > experienciaChapa1) {
      setMaisExperiente('A chapa 2 tem mais experiência.');
    } else {
      setMaisExperiente('Ambas as chapas têm a mesma experiência.');
    }
  };

  // Função para atualizar as idades nos inputs
  const handleInputChange = (event, chapa, role) => {
    const value = event.target.value;
    if (chapa === 1) {
      setChapa1(prevState => ({ ...prevState, [role]: value }));
    } else {
      setChapa2(prevState => ({ ...prevState, [role]: value }));
    }
  };

  return (
    <div className="demo-container">
      <h1>Exercício 5.28 - DEMOcracia</h1>
      <p>Comparação de experiência entre duas chapas presidenciais.</p>

      {/* Inputs para as idades */}
      <div className="inputs-container">
        <div className="input-group">
          <h2>Chapa 1</h2>
          <input
            type="number"
            placeholder="Idade do Candidato 1"
            value={chapa1.candidato}
            onChange={(e) => handleInputChange(e, 1, 'candidato')}
          />
          <input
            type="number"
            placeholder="Idade do Vice 1"
            value={chapa1.vice}
            onChange={(e) => handleInputChange(e, 1, 'vice')}
          />
        </div>

        <div className="input-group">
          <h2>Chapa 2</h2>
          <input
            type="number"
            placeholder="Idade do Candidato 2"
            value={chapa2.candidato}
            onChange={(e) => handleInputChange(e, 2, 'candidato')}
          />
          <input
            type="number"
            placeholder="Idade do Vice 2"
            value={chapa2.vice}
            onChange={(e) => handleInputChange(e, 2, 'vice')}
          />
        </div>
      </div>

      {/* Botão para calcular a experiência */}
      <button onClick={calcularExperiencia} className="btn-calcular">
        Calcular Experiência
      </button>

      {/* Mensagem de erro */}
      {erro && <p className="erro">{erro}</p>}

      {/* Exibição dos resultados */}
      <div className="resultados">
        <h2>Resultado</h2>
        <p>{maisExperiente}</p>
      </div>
    </div>
  );
}

export default Democracia;
