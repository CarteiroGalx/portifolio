import { Header } from './nav.jsx'

function nav(){
    return(
        <Header className="row pb-5 d-flex align-items-center">
            <img className='col-1 mx-4 mt-2' src="/images/logo.png" alt="Logo do criador" />
            <div className='col-5'></div>
            <a className="col-1 text-end text-decoration-none fs-5 p-0" href="#home"><i className="bi bi-house"></i>Home</a>
            <a className="col-1 text-center mx-5 text-decoration-none fs-5 p-0" href="#"><i className="bi bi-tools p-0"></i>Projetos</a>
            <a className="col-1 text-decoration-none fs-5 p-0 text-start" href="#"><i className="bi bi-telephone"></i>Contato</a>     
        </Header>
    )
}

export default nav