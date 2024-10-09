import { useState } from "react";
import "./App.css";

function App() {
  const [resultado, setResultado] = useState("");

  const calcularAltura = () => {
    let alturaValentina = 150; 
    let alturaEnzo = 140; 
    let anos = 0;

    const crescimentoValentina = 2;
    const crescimentoEnzo = 3;

    while (alturaEnzo <= alturaValentina) {
      alturaValentina += crescimentoValentina;
      alturaEnzo += crescimentoEnzo;
      anos++;
    }

    setResultado(`Enzo será mais alto que Valentina em ${anos} anos.`);
  };

  return (
    <div className="App">
      <h1>Quando Enzo será mais alto que Valentina?</h1>
      <button onClick={calcularAltura}>Calcular</button>
      {resultado && <p>{resultado}</p>}
    </div>
  );
}

export default App;
