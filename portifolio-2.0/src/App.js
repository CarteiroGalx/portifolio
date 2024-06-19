import logo from './logo.svg';
import './App.css';
import './responsive.css'
import Nav from './components/nav'
import Divisor from './components/divisor';
import Game_projects_list from './components/game_projects_list';

function App() {
  return (
    <div className="App">
        <Nav />
        <div id='home' className='d-flex flex-column-reverse flex-md-row'>
          <div className='col-md-7 apresentation mx-5'>
            <div>
              <h1>Olá, meu nome é <span>Erivelton</span></h1>
              <h5>Desenvolvedor Front-End & Game Developer. Um apaixonado pela tecnologia que mora em PE, Recife.</h5>
              <div>
                <i class="bi bi-linkedin mx-1 icons-apresentation"></i>
                <i class="bi bi-github mx-1 icons-apresentation"></i>
              </div>
              <div className='d-flex mt-4 align-items-center d-flex'>
                <h3 className='px-0 b-blue-font mx-3'>Conhecimentos</h3>
                <div className='d-none d-md-block divisor-knowledge'></div>
              </div>
                <div className='icons-knowledge justify-content-center justify-content-md-start align-items-center d-flex flex-wrap'>
                  <img className='icon-knowledge mx-2' src='/images/icons-knowledge/html.png'></img>
                  <img className='icon-knowledge mx-2' src='/images/icons-knowledge/css.png'></img>
                  <img className='icon-knowledge mx-2' src='/images/icons-knowledge/javascript.png'></img>
                  <img className='icon-knowledge mx-2' src='/images/icons-knowledge/csharp.png'></img>
                  <img className='icon-knowledge mx-2' src='/images/icons-knowledge/sql.png'></img>
                  <img className='icon-knowledge mx-2' src='/images/icons-knowledge/sass.png'></img>
                  <img className='icon-knowledge mx-2' src='/images/icons-knowledge/bootstrap.png'></img>
                  <img className='icon-knowledge mx-2' src='/images/icons-knowledge/react.png'></img>
                  <img className='icon-knowledge mx-2' src='/images/icons-knowledge/node.png'></img>
                  <img className='icon-knowledge mx-2' src='/images/icons-knowledge/unity.png'></img>
                  <img className='icon-knowledge mx-2' src='/images/icons-knowledge/git.png'></img>
                  <img className='icon-knowledge mx-2' src='/images/icons-knowledge/python.png'></img>
                </div>
            </div>
          </div>
          <div className='m-5 mt-5 mt-md-0 m-md-0 mb-2 mb-md-0 col col-md-5 apresentation d-flex justify-content-lg-start align-baseline mt-4'>
            <img className='animation-logo mb-5' src='/images/animation-logo.gif'></img>
          </div>
        </div>
        <Divisor className="mt-5" name="Projetos"/>
        <div className='justify-content-center align-items-center d-flex mb-4'>
          <button className='button-project selected text-white rounded-start-5'>Games</button>
          <button className='button-project text-white rounded-end-5'>Websites</button>
        </div>
        <Game_projects_list/>
    </div>
  );
}

export default App;
