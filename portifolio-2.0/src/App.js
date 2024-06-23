import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import './responsive.css'
import Nav from './components/nav'
import Divisor from './components/divisor';
import Game_projects_list from './components/game_projects_list';
import Web_projects_list from './components/web_projects_list';

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
                <a className="bi bi-linkedin mx-1 icons-apresentation" href='https://www.linkedin.com/in/erivelton-almeida-lopes-6996b1272/' target='u_blank'></a>
                <a className="bi bi-github mx-1 icons-apresentation" href='https://github.com/CarteiroGalx' target='u_blank'></a>
              </div>
              <div className='d-flex mt-4 align-items-center d-flex'>
                <h3 className='px-0 b-blue-font mx-3'>Conhecimentos</h3>
                <div className='d-none d-md-block divisor-knowledge'></div>
              </div>
                <div className='icons-knowledge justify-content-center justify-content-md-start align-items-center d-flex flex-wrap'>
                  <img className='icon-knowledge mx-2 mb-1' src='/images/icons-knowledge/html.png'></img>
                  <img className='icon-knowledge mx-2 mb-1' src='/images/icons-knowledge/css.png'></img>
                  <img className='icon-knowledge mx-2 mb-1' src='/images/icons-knowledge/javascript.png'></img>
                  <img className='icon-knowledge mx-2 mb-1' src='/images/icons-knowledge/csharp.png'></img>
                  <img className='icon-knowledge mx-2 mb-1' src='/images/icons-knowledge/sql.png'></img>
                  <img className='icon-knowledge mx-2 mb-1' src='/images/icons-knowledge/sass.png'></img>
                  <img className='icon-knowledge mx-2 mb-1' src='/images/icons-knowledge/bootstrap.png'></img>
                  <img className='icon-knowledge mx-2 mb-1' src='/images/icons-knowledge/react.png'></img>
                  <img className='icon-knowledge mx-2 mb-1' src='/images/icons-knowledge/node.png'></img>
                  <img className='icon-knowledge mx-2 mb-1' src='/images/icons-knowledge/unity.png'></img>
                  <img className='icon-knowledge mx-2 mb-1' src='/images/icons-knowledge/git.png'></img>
                  <img className='icon-knowledge mx-2 mb-1' src='/images/icons-knowledge/python.png'></img>
                </div>
            </div>
          </div>
          <div className='m-5 mt-5 mt-md-0 m-md-0 mb-2 mb-md-0 col col-md-5 apresentation d-flex justify-content-lg-start align-baseline mt-4'>
            <img className='animation-logo mb-5' src='/images/animation-perfil.gif'></img>
          </div>
        </div>
        <Divisor className="mt-5" name="Projetos"/>
        <div id='projetos' className='justify-content-center align-items-center d-flex flex-column mb-4'>
        <button id="buttonGames" onClick={handleClick} className='button-project text-white rounded-5'>
          {showGames ? 'Games' : 'Websites'}
        </button>
        <p className='text-white'>↗Alternar entre projetos↖</p>
      </div>
      {showGames ? <Game_projects_list /> : <Web_projects_list />}
      <Divisor className="mt-5" name="Contato"/>
      <div id='contato' className='mx-5 mb-5 d-flex flex-wrap justify-content-center'>
        <div className='info-contact d-flex flex-column align-items-center mx-3'>
          <i className="icon-contact bi bi-linkedin"></i>
          <p className='font-contact fs-4'>Linkedin</p>
          <a className='fs-6 text-white' href='https://www.linkedin.com/in/erivelton-almeida-lopes-6996b1272/'  target='u_blank'>Clique para acessar</a>
        </div>
        <div className='info-contact d-flex flex-column align-items-center mx-3'>
          <i className="icon-contact bi bi-github"></i>
          <p className='font-contact fs-4'>Github</p>
          <a className='fs-6 text-white' href='#'>Clique para acessar</a>
        </div>
        <div className='info-contact d-flex flex-column align-items-center mx-3'>
          <i className="icon-contact bi bi-envelope-fill"></i>
          <p className='font-contact fs-4'>E-mail</p>
          <p className='fs-6 text-white' href='#'>almeidalopeserivelton@gmail.com</p>
        </div>
        <div className='info-contact d-flex flex-column align-items-center mx-3'>
          <i className="icon-contact bi bi-telephone-fill"></i>
          <p className='font-contact fs-4'>Telefone</p>
          <p className='fs-6 text-white' href='#'>(81) 994688568</p>
        </div>
        <div className='info-contact d-flex flex-column align-items-center mx-3'>
          <img className="icon-contact-img" src='./images/itch2.png'></img>
          <p className='font-contact fs-4'>Itch.io</p>
          <p className='fs-6 text-white' href='#'>Clique para acessar</p>
        </div>
      </div>
    </div>
  );
}

export default App;
