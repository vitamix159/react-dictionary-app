import './App.css';
import logo from "./logo.jpg";
import Dictionary from './Dictionary';


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} alt="logo" className="App-logo img-fluid" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          Coded by SheCodes student Vitalija Ramonaitė
        </footer>
      </div>
    </div>
  );
}
        
