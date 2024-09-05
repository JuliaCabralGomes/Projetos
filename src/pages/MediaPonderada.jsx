import React, { useState } from 'react'; 

function MediaPonderada() { 
  const [nota1, setNota1] = useState(''); 
  const [peso1, setPeso1] = useState(''); 
  const [nota2, setNota2] = useState(''); 
  const [peso2, setPeso2] = useState(''); 
  const [nota3, setNota3] = useState(''); 
  const [peso3, setPeso3] = useState(''); 
  const [nota4, setNota4] = useState(''); 
  const [peso4, setPeso4] = useState(''); 
  const [resultado, setResultado] = useState(''); 

  function calcularMediaPonderada() { 
    const totalPesos = Number(peso1) + Number(peso2) + Number(peso3) + Number(peso4); 
    const mediaPonderada = (Number(nota1) * Number(peso1)  
    + Number(nota2) * Number(peso2)  
    + Number(nota3) * Number(peso3)  
    + Number(nota4) * Number(peso4))  
    / totalPesos; 

    if (mediaPonderada >= 7) { 
      setResultado('Aprovadíssimo, meu chapa!👍'); 
    } else { 
      setResultado('Ih, não foi dessa vez, estuda mais, hein? 😑'); 
    } 
  } 

  return ( 
    <div className="media-ponderada"> 
      <label> 
        Nota 1: 
        <input type="number" value={nota1} onChange={(e) => setNota1(e.target.value)} /> 
      </label> 
      <br />

      <label> 
        Peso 1: 
        <input type="number" value={peso1} onChange={(e) => setPeso1(e.target.value)} /> 
      </label> 
      <br /> 

      <label> 
        Nota 2: 
        <input type="number" value={nota2} onChange={(e) => setNota2(e.target.value)} /> 
      </label> 
      <br /> 

      <label> 
        Peso 2: 
        <input type="number" value={peso2} onChange={(e) => setPeso2(e.target.value)} /> 
      </label> 
      <br /> 

      <label> 
        Nota 3: 
        <input type="number" value={nota3} onChange={(e) => setNota3(e.target.value)} /> 
      </label> 
      <br /> 

      <label> 
        Peso 3: 
        <input type="number" value={peso3} onChange={(e) => setPeso3(e.target.value)} /> 
      </label> 
      <br /> 

      <label> 
        Nota 4: 
        <input type="number" value={nota4} onChange={(e) => setNota4(e.target.value)} /> 
      </label> 
      <br /> 

      <label> 
        Peso 4:
        <input type="number" value={peso4} onChange={(e) => setPeso4(e.target.value)} /> 
      </label> 
      <br /> 

      <p></p> 

      <input type="submit" value="Calcular" className="submit-btn" onClick={calcularMediaPonderada} /> 
      <p>{resultado}</p> 
    </div>
  ); 
} 

export default MediaPonderada; 

 