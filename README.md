# Perudo

Creare un gioco di dadi.

1) maxNumDadi = 5, minNumDadi = 1.
2) Bottone per rollare
3) 2 bottoni per aggiungere e togliere 1 dado


```js
import React, { useState } from 'react';

function Game() {
  const [dice, setDice] = useState([1, 2, 3, 4, 5]); //inizialmente ci sono 5 dadi
  const addDice = () => {
    setDice(prevDice => [...prevDice, Math.floor(Math.random() * 6) + 1]);
  }
  //...
  return (
    <div>
      <h1>Gioco dei dadi</h1>
      <div>
        {dice.map((die, index) => (
          <Die key={index} value={die} />
        ))}
      </div>
      <button onClick={roll}>Lancia i dadi</button>
      <button onClick={addDice}>+</button>
    </div>
  );
}
```

```js
import React, { useState } from 'react';

function Game() {
  const [dice, setDice] = useState([1, 2, 3, 4, 5]); //inizialmente ci sono 5 dadi
  const addDice = () => {
    setDice(prevDice => [...prevDice, Math.floor(Math.random() * 6) + 1]);
  }
  const removeDice = () => {
    setDice(prevDice => prevDice.slice(0, -1));
  }
  //...
  return (
    <div>
      <h1>Gioco dei dadi</h1>
      <div>
        {dice.map((die, index) => (
          <Die key={index} value={die} />
        ))}
      </div>
      <button onClick={roll}>Lancia i dadi</button>
      <button onClick={addDice}>+</button>
      <button onClick={removeDice}>-</button>
    </div>
  );
}
```

