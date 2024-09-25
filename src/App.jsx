import React, { useState } from 'react';
import './App.css';

function App() {
  const [numero, setNumero] = useState('');  
  const [resultado, setResultado] = useState('');
  const [status, setStatus] = useState('');  


  const verificarNumero = () => {
    const num = parseFloat(numero);
    if (isNaN(num)) {
      setResultado('Por favor, insira um número válido.');
    } else if (num > 0 && num % 2 === 0) {
      setResultado('O número é par e positivo.');
    } else {
      setResultado('O número não é par e positivo.');
    }
  };

  const handleInputChange = (e) => {
    setNumero(e.target.value);
    const num = parseFloat(e.target.value);
    if (!isNaN(num)) {
      setStatus(num > 0 ? (num % 2 === 0 ? 'par e positivo' : 'não par e positivo') : 'inválido');
    } else {
      setStatus('inválido');
    }
  };

  return (
    <div className="container">
      <h1>Verificador de Número</h1>
      <p>Digite um número para verificar se ele é par e positivo:</p>
      <input
        type="number"
        value={numero}
        onChange={handleInputChange}
        className={status === 'par e positivo' ? 'valid' : status === 'inválido' ? 'invalid' : ''}
        placeholder="Digite um número"
      />
      <button onClick={verificarNumero}>Verificar</button>
      <div className="resultado-container">
        {resultado && <p className="resultado">{resultado}</p>}
      </div>
    </div>
  );
}

export default App;
