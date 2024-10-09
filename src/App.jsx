import React, { useState } from 'react';
import './App.css';


const App = () => {
  const [pessoas, setPessoas] = useState([]);
  const [altura, setAltura] = useState('');
  const [genero, setGenero] = useState('0');
  const [resultados, setResultados] = useState(null);

  const adicionarPessoa = (e) => {
    e.preventDefault();
    
    if (pessoas.length < 10) {
      setPessoas([...pessoas, { altura: parseFloat(altura), genero }]);
      setAltura('');
      setGenero('0');
    }
    
    if (pessoas.length === 9) {
      calcularResultados([...pessoas, { altura: parseFloat(altura), genero }]);
    }
  };

  const calcularResultados = (dados) => {
    const alturas = dados.map(p => p.altura);
    const mulheres = dados.filter(p => p.genero === '1');
    const homens = dados.filter(p => p.genero === '0');
    
    const maiorAltura = Math.max(...alturas);
    const menorAltura = Math.min(...alturas);
    const mediaAlturaMulheres = mulheres.length > 0
      ? (mulheres.reduce((acc, p) => acc + p.altura, 0) / mulheres.length).toFixed(2)
      : 0;
    const mediaAlturaPopulacao = (alturas.reduce((acc, alt) => acc + alt, 0) / dados.length).toFixed(2);
    const percentualHomens = ((homens.length / dados.length) * 100).toFixed(2);

    setResultados({
      maiorAltura,
      menorAltura,
      mediaAlturaMulheres,
      mediaAlturaPopulacao,
      percentualHomens,
    });
  };

  return (
    <div className="App">
      <h1>Pesquisa de Altura e Gênero</h1>
      {pessoas.length < 10 && (
        <form onSubmit={adicionarPessoa}>
          <div>
            <label>Altura (em metros):</label>
            <input 
              type="number" 
              step="0.01" 
              value={altura} 
              onChange={(e) => setAltura(e.target.value)} 
              required 
            />
          </div>
          <div>
            <label>Gênero:</label>
            <select value={genero} onChange={(e) => setGenero(e.target.value)}>
              <option value="0">Masculino</option>
              <option value="1">Feminino</option>
            </select>
          </div>
          <button type="submit">Adicionar Pessoa</button>
        </form>
      )}
      {resultados && (
        <div className="resultados">
          <h2>Resultados:</h2>
          <p><strong>Maior altura:</strong> {resultados.maiorAltura}m</p>
          <p><strong>Menor altura:</strong> {resultados.menorAltura}m</p>
          <p><strong>Média de altura das mulheres:</strong> {resultados.mediaAlturaMulheres}m</p>
          <p><strong>Média de altura da população:</strong> {resultados.mediaAlturaPopulacao}m</p>
          <p><strong>Percentual de homens:</strong> {resultados.percentualHomens}%</p>
        </div>
      )}
    </div>
  );
};

export default App;
