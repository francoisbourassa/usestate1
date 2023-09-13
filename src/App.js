import React, { useState } from 'react';
import './App.css';

function App() {
  // Utilisation du hook useState pour gérer l'état du compteur
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <p>Compteur : {count}</p>
        <button onClick={() => setCount(count + 1)}>
          Augmenter
        </button>
        <button onClick={() => setCount(count - 1)}>
          Diminuer
        </button>
        <button onClick={() => setCount(0)}>
          Réinitialiser
        </button>
      </header>
    </div>
  );
}

export default App;
