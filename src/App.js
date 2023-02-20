import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import DiceImage1 from './images/Dice1.png'
import DiceImage2 from './images/Dice2.png'
import DiceImage3 from './images/Dice3.png'
import DiceImage4 from './images/Dice4.png'
import DiceImage5 from './images/Dice5.png'
import DiceImage6 from './images/Dice6.png'

function App() {

  const diceImages = [
    // 'https://cdn.pixabay.com/photo/2013/07/12/17/39/dice-152173_960_720.png',
    // 'https://cdn.pixabay.com/photo/2014/04/03/11/56/dice-312627_960_720.png',
    // 'https://cdn.pixabay.com/photo/2014/04/03/11/56/dice-312624_960_720.png',
    // 'https://cdn.pixabay.com/photo/2014/04/03/10/24/dice-310335_960_720.png',
    // 'https://cdn.pixabay.com/photo/2014/04/03/11/56/dice-312622_960_720.png',
    // 'https://cdn.pixabay.com/photo/2014/04/03/10/24/dice-310333_960_720.png',
    DiceImage1,
    DiceImage2,
    DiceImage3,
    DiceImage4,
    DiceImage5,
    DiceImage6,
  ]

  const [diceCount, setDiceCount] = useState(5)
  const [diceStates, setDiceStates] = useState(
    Array(diceCount).fill({ rolled: true })
  )

  const rollDiceButton = () => {
    const newDiceStates = diceStates.map((diceState) => ({
      rolled: true,
    }));
    setDiceStates(newDiceStates);
  };

  const addDiceButton = () => {
    if (diceCount < 5) {

      setDiceCount((prevCount) => {
        const newDiceStates = diceStates.slice();
        newDiceStates.push({ rolled: false });
        setDiceStates(newDiceStates);
        return prevCount + 1;
      });
    }
  };

  const removeDiceButton = () => {
    if (diceCount > 1) {
      setDiceCount((prevCount) => {
        const newDiceStates = diceStates.slice(0, prevCount - 1);
        setDiceStates(newDiceStates);
        return prevCount - 1;
      });
    }
  };

  return (
    <div className="App">
      <h1>Perudo</h1>

      {diceStates.map((diceState, index) => (
        <img
          style={{ width: '150px', height: '150px' }}
          key={index}
          src={diceState.rolled ? diceImages[Math.floor(Math.random() * 6)] : diceImages[0]}
          alt={`Dice ${index + 1}`}
        />
      ))}

      <Button handleClick={rollDiceButton}>Roll</Button>
      <Button handleClick={addDiceButton}>add</Button>
      <Button handleClick={removeDiceButton}>remove</Button>
    </div>
  );
}

export default App;
