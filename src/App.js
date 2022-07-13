import logo from './logo.svg';
import './App.css';
import ButtonAppBar from './Components/ButtonAppBar';
import axios from 'axios';
import DogFacts from './Pages/DogFacts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DogFacts></DogFacts>
      </header>
    </div>
  );
}

export default App;
