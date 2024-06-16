import logo from './logo.svg';
import './App.css';
import Nav from './components/nav'

function App() {
  return (
    <div className="App">
        <Nav />
        <div className='row'>
          <div className='col-8 apresentation'>
            <h1>Olá, meu nome é <span>Erivelton</span></h1>
            <h3>Desenvolvedor Front-End & Game Developer. Um apaixonado pela tecnologia que mora em PE, Recife.</h3>
          </div>
        </div>
    </div>
  );
}

export default App;
