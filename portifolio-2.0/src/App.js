import logo from './logo.svg';
import './App.css';
import Nav from './components/nav'

function App() {
  return (
    <div className="App">
        <Nav />
        <div className='row'>
          <div className='col-6 apresentation mx-5'>
            <div className='col-10'>
              <h1>Olá, meu nome é <span>Erivelton</span></h1>
              <h5>Desenvolvedor Front-End & Game Developer. Um apaixonado pela tecnologia que mora em PE, Recife.</h5>
              <div>
                <i class="bi bi-linkedin mx-1 icons-apresentation"></i>
                <i class="bi bi-github mx-1 icons-apresentation"></i>
              </div>
              <div className='col-12 row mt-4 align-itens-center d-flex'>
                <h3 className='col-4 px-0 b-blue-font mx-3'>Conhecimentos</h3>
                <div className='col divisor-knowledge'></div>
              </div>
            </div>
          </div>
          <div className='col apresentation'>
            <img className='animation-logo' src='/images/animation-logo.gif'></img>
          </div>
        </div>
    </div>
  );
}

export default App;
