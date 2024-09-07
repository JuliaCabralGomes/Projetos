import React, { useState } from 'react';

function App() {
    const [number, setNumber] = useState(null);

    const generateRandomNumber = () => {
        const randomNum = Math.floor(Math.random() * 100) + 1;
        setNumber(randomNum);
    };

    return (
        <div className="container">
            <h1>MisturaNúmeros</h1>
            <button onClick={generateRandomNumber}>Sortear Número</button>
            {number !== null && <p className="number">Número sorteado: {number}</p>}
        </div>
    );
}

export default App;
