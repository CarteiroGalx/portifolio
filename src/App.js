import React, { useState } from 'react';
import './App.css';
import './responsive.css'
import Nav from './components/nav'
import Divisor from './components/divisor';
import GAME_PROJECTS_LIST from './components/game_projects_list';
import WEB_PROJECTS_LIST from './components/web_projects_list';

function App() {
  const [showGames, setShowGames] = useState(true);

  const handleClick = () => {
    setShowGames(!showGames);
  };

  return (
    <div className="App">
        <Nav />
        <div id='home' className='d-flex flex-column-reverse flex-md-row'>
          <div className='col-md-7 apresentation mx-5'>
            <div>
              <h1>Olá, meu nome é <span>Erivelton</span></h1>
              <h5>Desenvolvedor Front-End & Game Developer. Um apaixonado pela tecnologia que mora em PE, Recife.</h5>
              <div>
                <a className="bi bi-linkedin mx-1 icons-apresentation" href='https://www.linkedin.com/in/erivelton-almeida-lopes-6996b1272/' target='u_blank' aria-label='Ir para pagina de perfil do Linkedin'></a>
                <a className="bi bi-github mx-1 icons-apresentation" href='https://github.com/CarteiroGalx' target='u_blank' aria-label='Ir para pagina de perfil do Github'></a>
              </div>
              <div className='d-flex mt-4 align-items-center d-flex'>
                <h3 className='px-0 b-blue-font mx-3'>Conhecimentos</h3>
                <div className='d-none d-md-block divisor-knowledge'></div>
              </div>
                <div className='icons-knowledge justify-content-center justify-content-md-start align-items-center d-flex flex-wrap'>
                  <img className='icon-knowledge mx-2 mb-1' src='/images/icons-knowledge/html.png' alt='icone do HTML'></img>
                  <img className='icon-knowledge mx-2 mb-1' src='/images/icons-knowledge/css.png' alt='icone do CSS'></img>
                  <img className='icon-knowledge mx-2 mb-1' src='/images/icons-knowledge/javascript.png' alt='icone do JS'></img>
                  <img className='icon-knowledge mx-2 mb-1' src='/images/icons-knowledge/csharp.png' alt='icone do C#'></img>
                  <img className='icon-knowledge mx-2 mb-1' src='/images/icons-knowledge/sql.png' alt='icone do SQL'></img>
                  <img className='icon-knowledge mx-2 mb-1' src='/images/icons-knowledge/sass.png' alt='icone do SASS'></img>
                  <img className='icon-knowledge mx-2 mb-1' src='/images/icons-knowledge/bootstrap.png' alt='icone do Bootstrap'></img>
                  <img className='icon-knowledge mx-2 mb-1' src='/images/icons-knowledge/react.png' alt='icone do React'></img>
                  <img className='icon-knowledge mx-2 mb-1' src='/images/icons-knowledge/node.png' alt='icone do Node.js'></img>
                  <img className='icon-knowledge mx-2 mb-1' src='/images/icons-knowledge/unity.png' alt='icone da Unity'></img>
                  <img className='icon-knowledge mx-2 mb-1' src='/images/icons-knowledge/git.png' alt='icone do Git'></img>
                  <img className='icon-knowledge mx-2 mb-1' src='/images/icons-knowledge/python.png' alt='icone do Python'></img>
                </div>
            </div>
          </div>
          <div className='m-5 mt-5 mt-md-0 m-md-0 mb-2 mb-md-0 col col-md-5 apresentation d-flex justify-content-lg-start align-baseline mt-4'>
            <img className='animation-logo mb-5' src='/images/animation-perfil.gif' alt='Foto do criador'></img>
          </div>
        </div>
        <Divisor className="mt-5" name="Projetos"/>
        <div id='projetos' className='justify-content-center align-items-center d-flex flex-column mb-4'>
        <button id="buttonGames" onClick={handleClick} className='button-project text-white rounded-5'>
          {showGames ? 'Games' : 'Websites'}
        </button>
        <p className='text-white'>↗Alternar entre projetos↖</p>
      </div>
      {showGames ? <GAME_PROJECTS_LIST /> : <WEB_PROJECTS_LIST />}
      <Divisor className="mt-5" name="Contato"/>
      <div id='contato' className='mx-5 mb-5 d-flex flex-wrap justify-content-center'>
        <div className='info-contact d-flex flex-column align-items-center mx-3'>
          <i className="icon-contact bi bi-linkedin"></i>
          <p className='font-contact fs-4'>Linkedin</p>
          <a className='fs-6 text-white' href='https://www.linkedin.com/in/erivelton-almeida-lopes-6996b1272/'  target='u_blank'>Clique para acessar</a>
        </div>
        <div className='info-contact d-flex flex-column align-items-center mx-3'>
          <i className="icon-contact bi bi-github" alt='Github'></i>
          <p className='font-contact fs-4'>Github</p>
          <a className='fs-6 text-white' href='https://github.com/CarteiroGalx'>Clique para acessar</a>
        </div>
        <div className='info-contact d-flex flex-column align-items-center mx-3'>
          <i className="icon-contact bi bi-envelope-fill" alt='E-mail'></i>
          <p className='font-contact fs-4'>E-mail</p>
          <p className='fs-6 text-white' href='#'>almeidalopeserivelton@gmail.com</p>
        </div>
        <div className='info-contact d-flex flex-column align-items-center mx-3'>
          <i className="icon-contact bi bi-telephone-fill" alt='Numero de contato'></i>
          <p className='font-contact fs-4'>Telefone</p>
          <p className='fs-6 text-white' href='#'>(81) 994688568</p>
        </div>
        <div className='info-contact-img-container d-flex flex-column align-items-center mx-3'>
          <img className="icon-contact-img" src='./images/itch2.png' alt='Itch.io'></img>
          <p className='font-contact fs-4'>Itch.io</p>
          <a className='fs-6 text-white' href='https://carteirogalx.itch.io/'>Clique para acessar</a>
        </div>
      </div>
    </div>
  );
}

export default App;
