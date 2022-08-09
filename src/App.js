import './App.css';
import logo from "./logo.jpg";
import Dictionary from './Dictionary';


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <a href='https://hopeful-mirzakhani-0b7b52.netlify.app/' target="_blank">
          <img src={logo} alt="logo" className="App-logo img-fluid" />
          </a>
        </header>
        <main>
          <Dictionary defaultKeyword="Love"/>
        </main>
        <footer className="App-footer">
          Coded by SheCodes student Vitalija Ramonaitė<br />
          You can find the code on <a href='https://github.com/vitamix159/react-dictionary-app' target="_blank">GitHub</a>
        </footer>
      </div>
    </div>
  );
}
        
