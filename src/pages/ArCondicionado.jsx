// ArCondicionado.jsx
import React, { useState } from 'react';
import './ArCondicionado.css';

function ArCondicionado() {
  const [inputCelsius, setInputCelsius] = useState('');
  const [inputFahrenheit, setInputFahrenheit] = useState('');

  function mudouCelsius(event) {
    const celsiusValue = event.target.value;
    setInputCelsius(celsiusValue);
    const fahrenheitValue = (celsiusValue * 1.8 + 32).toFixed(1);
    setInputFahrenheit(fahrenheitValue);
  }

  function mudouFahrenheit(event) {
    const fahrenheitValue = event.target.value;
    setInputFahrenheit(fahrenheitValue);
    const celsiusValue = ((fahrenheitValue - 32) / 1.8).toFixed(1);
    setInputCelsius(celsiusValue);
  }

  return (
    <div className="container">
      <h1>Exercício 5.27</h1>
      <p>
        Ligar o ar condicionado: Faça um programa onde o usuário irá escolher se
        quer converter graus Celsius para Fahrenheit ou Fahrenheit para Celsius. 
        Após a escolha, faça uma leitura e converta para a unidade escolhida.
      </p>

      <div className="input-group">
        <label htmlFor="inpC">Celsius</label>
        <input
          type="number"
          id="inpC"
          value={inputCelsius}
          onChange={mudouCelsius}
        />
        <span>{inputCelsius} <span className="unit">°C</span></span>
      </div>

      <div className="input-group">
        <label htmlFor="inpF">Fahrenheit</label>
        <input
          type="number"
          id="inpF"
          value={inputFahrenheit}
          onChange={mudouFahrenheit}
        />
        <span>{inputFahrenheit} <span className="unit">°F</span></span>
      </div>

    </div>
  );
}

export default ArCondicionado;
