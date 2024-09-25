import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [dias, setDias] = useState('');
  const [resultado, setResultado] = useState('');
  const [detalhes, setDetalhes] = useState('');

  const calcularValor = () => {
    const numDias = parseInt(dias);
    if (isNaN(numDias) || numDias <= 0) {
      setResultado('Por favor, insira um número válido de diárias.');
      setDetalhes('');
      return;
    }

    let valorPorDia = 100;
    if (numDias >= 6 && numDias <= 10) {
      valorPorDia = 90;
    } else if (numDias >= 11) {
      valorPorDia = 80;
    }

    const valorDiarias = valorPorDia * numDias;
    const desconto10 = valorDiarias * 0.10; // Desconto de 10%
    const valorComDesconto10 = valorDiarias - desconto10;
    const desconto15 = valorComDesconto10 * 0.15; // Desconto de 15%
    const valorComDesconto15 = valorComDesconto10 - desconto15;
    const multa = 150; // Multa
    const valorTotal = valorComDesconto15 + multa;

    setResultado(`Valor total a pagar: R$ ${valorTotal.toFixed(2)}`);
    setDetalhes(
      `Composição:\n` +
      `- Valor das diárias: R$ ${valorDiarias.toFixed(2)}\n` +
      `- Desconto de 10%: R$ ${desconto10.toFixed(2)}\n` +
      `- Valor após desconto de 10%: R$ ${valorComDesconto10.toFixed(2)}\n` +
      `- Desconto de 15%: R$ ${desconto15.toFixed(2)}\n` +
      `- Valor após desconto de 15%: R$ ${valorComDesconto15.toFixed(2)}\n` +
      `- Multa: R$ ${multa.toFixed(2)}\n` +
      `- Total: R$ ${valorTotal.toFixed(2)}`
    );
  };

  return (
    <div className="container">
      <h1>Cálculo de Conta do Albergue</h1>
      <div className="input-group">
        <label htmlFor="dias">Número de diárias:</label>
        <input
          type="number"
          id="dias"
          value={dias}
          onChange={(e) => setDias(e.target.value)}
          placeholder="Digite o número de diárias"
        />
      </div>
      <button onClick={calcularValor}>Calcular</button>
      {resultado && (
        <div className="resultado">
          <h2>Resultado</h2>
          <pre>{resultado}</pre>
          <h3>Detalhes da Conta</h3>
          <pre>{detalhes}</pre>
        </div>
      )}
    </div>
  );
};

export default App;
