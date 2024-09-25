import { useState } from 'react';
import './Emprestimo.css';

function Emprestimo() {
  const [salario, setSalario] = useState(0);
  const [valorEmprestimo, setValorEmprestimo] = useState(0);
  const [numPrestacoes, setNumPrestacoes] = useState(0);
  const [resultado, setResultado] = useState('');

  const calcularEmprestimo = () => {
    const salarioValor = parseFloat(prompt("Digite o valor do seu salário:"));
    const emprestimoValor = parseFloat(prompt("Digite o valor do empréstimo:"));
    const prestacoesValor = parseInt(prompt("Digite o número de prestações:"));

    if (salarioValor <= 0 || emprestimoValor <= 0 || prestacoesValor <= 0) {
      setResultado("Erro: Nenhum valor pode ser zero ou negativo.");
      return;
    }

    const prestacaoMensal = emprestimoValor / prestacoesValor;
    const limitePrestacao = salarioValor * 0.3;

    if (prestacaoMensal <= limitePrestacao) {
      setResultado("Empréstimo aprovado!");
    } else {
      setResultado("Empréstimo negado! A prestação excede 30% do seu salário.");
    }

    setSalario(salarioValor);
    setValorEmprestimo(emprestimoValor);
    setNumPrestacoes(prestacoesValor);
  };

  return (
    <div className="container">
      <h1>Simulador de Empréstimo</h1>
      <button onClick={calcularEmprestimo}>Calcular Empréstimo</button>
      <div className="resultado">
        <p className={resultado.includes('aprovado') ? 'resultado-aprovado' : 'resultado-negado'}>
          {resultado}
        </p>
      </div>
      <p>Salário: R$ {salario.toFixed(2)}</p>
      <p>Valor do Empréstimo: R$ {valorEmprestimo.toFixed(2)}</p>
      <p>Número de Prestações: {numPrestacoes}</p>
    </div>
  );
}

export default Emprestimo;
