import React, { useState } from 'react';
import './App.css';

function App() {
  const [precoCompra, setPrecoCompra] = useState('');
  const [precoVenda, setPrecoVenda] = useState(null);

  const calcularPrecoVenda = () => {
    const valorCompra = parseFloat(precoCompra);
    
    if (isNaN(valorCompra) || valorCompra < 0) {
      alert('Por favor, insira um valor de compra válido.');
      return;
    }

    let lucroPercentual = valorCompra < 20 ? 0.45 : 0.30;
    const valorVenda = valorCompra * (1 + lucroPercentual);
    
    setPrecoVenda(valorVenda.toFixed(2));
  };

  return (
    <div className="App">
      <h1>Cálculo de Preço de Venda</h1>
      <div>
        <label htmlFor="precoCompra">Preço de Compra (R$): </label>
        <input
          type="number"
          id="precoCompra"
          value={precoCompra}
          onChange={(e) => setPrecoCompra(e.target.value)}
        />
      </div>
      <button onClick={calcularPrecoVenda}>Calcular Preço de Venda</button>
      {precoVenda !== null && (
        <h2>Preço de Venda: R$ {precoVenda}</h2>
      )}
    </div>
  );
}

export default App;
