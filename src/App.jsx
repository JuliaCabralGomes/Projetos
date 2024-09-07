import React, { useState } from 'react';
import './Cofrinho.css';

function App() {
  const [produtoValor, setProdutoValor] = useState('');
  const [moedas1Real, setMoedas1Real] = useState('');
  const [moedas50Cent, setMoedas50Cent] = useState('');
  const [moedas25Cent, setMoedas25Cent] = useState('');
  const [moedas10Cent, setMoedas10Cent] = useState('');
  const [moedas5Cent, setMoedas5Cent] = useState('');
  const [mensagem, setMensagem] = useState('');

  const calcularTotal = () => {
    const total =
      moedas1Real * 1 +
      moedas50Cent * 0.5 +
      moedas25Cent * 0.25 +
      moedas10Cent * 0.1 +
      moedas5Cent * 0.05;

    if (total >= produtoValor) {
      setMensagem(`Você tem R$${total.toFixed(2)}. É suficiente para comprar o produto!`);
    } else {
      setMensagem(`Você tem R$${total.toFixed(2)}. Não é suficiente para comprar o produto.`);
    }
  };

  return (
    <div className="container">
      <h1>Cofrinho</h1>
      <label>
        Valor do Produto:
        <input
          type="number"
          value={produtoValor}
          onChange={(e) => setProdutoValor(parseFloat(e.target.value))}
          placeholder="Digite o valor do produto"
        />
      </label>

      <label>
        Moedas de 1 Real:
        <input
          type="number"
          value={moedas1Real}
          onChange={(e) => setMoedas1Real(parseInt(e.target.value))}
          placeholder="Quantidade de moedas"
        />
      </label>

      <label>
        Moedas de 50 Centavos:
        <input
          type="number"
          value={moedas50Cent}
          onChange={(e) => setMoedas50Cent(parseInt(e.target.value))}
          placeholder="Quantidade de moedas"
        />
      </label>

      <label>
        Moedas de 25 Centavos:
        <input
          type="number"
          value={moedas25Cent}
          onChange={(e) => setMoedas25Cent(parseInt(e.target.value))}
          placeholder="Quantidade de moedas"
        />
      </label>

      <label>
        Moedas de 10 Centavos:
        <input
          type="number"
          value={moedas10Cent}
          onChange={(e) => setMoedas10Cent(parseInt(e.target.value))}
          placeholder="Quantidade de moedas"
        />
      </label>

      <label>
        Moedas de 5 Centavos:
        <input
          type="number"
          value={moedas5Cent}
          onChange={(e) => setMoedas5Cent(parseInt(e.target.value))}
          placeholder="Quantidade de moedas"
        />
      </label>

      <button onClick={calcularTotal}>Calcular</button>

      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}

export default App;
