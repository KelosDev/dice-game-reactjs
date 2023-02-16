import './App.css';
import Button from './components/Button';

function App() {

  const rollDiceButton = () => {

  }

  const addDiceButton = () => {

  }

  const removeDiceButton = () => {

  }

  return (
    <div className="App">
      <h1>Perudo</h1>
      <Button handleClick={rollDiceButton}>Roll</Button>
      <Button handleClick={addDiceButton}>add</Button>
      <Button handleClick={removeDiceButton}>remove</Button>
    </div>
  );
}

export default App;
