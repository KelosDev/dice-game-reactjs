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
    DiceImage1,
    DiceImage2,
    DiceImage3,
    DiceImage4,
    DiceImage5,
    DiceImage6,
  ]

  const [image, setImage] = useState(diceImages[0])
  const [image2, setImage2] = useState(diceImages[1])
  const [image3, setImage3] = useState(diceImages[1])
  const [image4, setImage4] = useState(diceImages[1])
  const [image5, setImage5] = useState(diceImages[1])

  const rollDiceButton = () => {
    const randomNum1 = Math.floor(Math.random() * 6)
    const randomNum2 = Math.floor(Math.random() * 6)
    const randomNum3 = Math.floor(Math.random() * 6)
    const randomNum4 = Math.floor(Math.random() * 6)
    const randomNum5 = Math.floor(Math.random() * 6)
    setImage(diceImages[randomNum1])
    setImage2(diceImages[randomNum2])
    setImage3(diceImages[randomNum3])
    setImage4(diceImages[randomNum4])
    setImage5(diceImages[randomNum5])
  }

  const addDiceButton = () => {
  }

  const removeDiceButton = () => {

  }

  return (
    <div className="App">
      <h1>Perudo</h1>

      <img src={image}></img>
      <img src={image2}></img>
      <img src={image3}></img>
      <img src={image4}></img>
      <img src={image5}></img>

      <Button handleClick={rollDiceButton}>Roll</Button>
      <Button handleClick={addDiceButton}>add</Button>
      <Button handleClick={removeDiceButton}>remove</Button>
    </div>
  );
}

export default App;
