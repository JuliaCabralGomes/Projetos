import React, { useState } from 'react';
import './CopoMeioCheio.css';

function CopoMeioCheio() {
  const [numero, setNumero] = useState('');
  const [resultado, setResultado] = useState('');

  const verificarNumero = () => {
    const num = parseFloat(numero);

    if (isNaN(num)) {
      setResultado('Por favor, insira um número válido.');
    } else if (num > 0) {
      setResultado('O número é positivo.');
    } else if (num < 0) {
      setResultado('O número é negativo.');
    } else {
      setResultado('O número é nulo (zero).');
    }
  };

  return (
    <div className="copo-container">
      <h1>Copo Meio Cheio</h1>
      <p>Digite um número para verificar se ele é positivo, negativo ou nulo:</p>
      <input
        type="number"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
        placeholder="Digite um número"
      />
      <button onClick={verificarNumero}>Verificar</button>
      {resultado && <p className="resultado">{resultado}</p>}
    </div>
  );
}

export default CopoMeioCheio;
