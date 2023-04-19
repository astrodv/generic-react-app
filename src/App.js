import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>honey app title</h1>
        <p>
          Bear body text!
        </p>
        <p>this-is-sprint-2</p>
        <p>testing the automated github actions yaml</p>
        <p>this should appear after automation</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
